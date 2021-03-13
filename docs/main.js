import {
  watchFunction,
  render,
  h,
  mapEntries,
  showIfElse
} from "./horseless.0.5.2.min.esm.js";

import { model } from "./model.js";

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
const classesForPersonDate = (person, date) => [
  "day",
  person.name,
  dayNames[new Date(date).getDay()],
  monthNames[new Date(date).getMonth()],
  (new Date(date) > now ? "future" : "past")
].join(" ");

const days = () => {
  const output = {};
  const counts = {};
  for (const yearName in model.history) {
    const year = model.history[yearName];
    for (const monthName in year) {
      const month = year[monthName];
      for (const dateName in month) {
        const person = month[dateName];
        const date ={monthName, dateName, yearName}
        const dayName = `${monthName} ${dateName} ${yearName}`;
        output[dayName] = {name: person, date};
        if (model.families[person]) {
          counts[person] = (counts[person] || 0) + 1
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
        <div class=${() => classesForPersonDate(person, date)}>
          <div class="inner">
            <span>${date}</span>: 
            <div>${person.name}</div>
            ${showIfElse(() => person.count != null, h`
            <div>count: ${person.count}</div>
            `)}
          </div>
        </div>
      `
    )}
  `
);
