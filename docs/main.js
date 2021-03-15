import {
  watchFunction,
  render,
  h,
  mapEntries,
  showIfElse
} from "./horseless.0.5.2.min.esm.js";

import { model, TBD } from "./model.js";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const now = new Date();

const classesForPersonDate = (person, date) =>
  [
    "day",
    person.name,
    dayNames[new Date(date).getDay()],
    monthNames[new Date(date).getMonth()],
    new Date(date) > now ? "future" : "past"
  ].join(" ");

const days = () => {
  const output = {};
  const counts = {};
  const lastDate = {};
  const ruleNames = Object.keys(model.rules);
  let inPast = true;
  for (const yearName in model.history) {
    const year = model.history[yearName];
    for (const monthName in year) {
      const month = year[monthName];
      for (const dateName in month) {
        const date = { monthName, dateName, yearName };
        const dayName = `${monthName} ${dateName} ${yearName}`;
        const realDate = new Date(dayName);
        let person = month[dateName];
        if (person === TBD) {
          ruleNames.sort((a, b) => {
            if (counts[a] != counts[b]) {
              return counts[a] - counts[b];
            }
            return lastDate[a] - lastDate[b];
          });
          person = ruleNames.filter(ruleName => {
            if (realDate - lastDate[ruleName] < 2 * 24 * 60 * 60 * 1000) {
              return false;
            }
            const skipDays = model.rules[ruleName]?.skipDays || [];
            if (skipDays.includes(realDate.getDay())) {
              return false;
            }
            const skipDates =
              model.rules[ruleName]?.skipDates?.map(d =>
                new Date(d).toString()
              ) || [];
            if (skipDates.includes(realDate.toString())) {
              return false;
            }
            return true;
          })[0];
        }
        lastDate[person] = realDate;
        output[dayName] = { name: person, date, displayDate: `${monthName.substr(0, 3)} ${dateName}` };
        output[dayName].classes = classesForPersonDate(
          output[dayName],
          dayName
        );
        if (inPast && now < realDate) {
          inPast = false;
          output[dayName].id = "future";
        }
        if (model.rules[person]) {
          counts[person] = (counts[person] || 0) + 1;
          output[dayName].count = counts[person];
        }
      }
    }
  }
  return output;
};

render(
  document.body,
  h`
    ${mapEntries(
      days,
      (person, date) => h`
        <div id=${person.id} class=${person.classes}>
          <div class="inner">
            <span>${person.displayDate}</span>
            <div>${person.name}</div>
            ${showIfElse(
              () => person.count != null,
              h`
            <div>count: ${person.count}</div>
            `
            )}
          </div>
        </div>
      `
    )}
  `
);

setTimeout(() => {
  document.querySelector("#future").scrollIntoView({ behavior: "smooth" });
}, 100);
