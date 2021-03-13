import { watchFunction, render, h, mapEntries } from './horseless.0.5.2.min.esm.js'

import {model} from './model.js'

const historyAsDays = () => {
  const output = {}
  for (const yearName in model.history) {
    const year = model.history[yearName]
    for (const monthName in year) {
      const month = year[monthName]
      for (const dateName in month) {
        const person = month[dateName]
        const date = `${monthName.substr(0, 3)} ${dateName} ${yearName}`
        output[date] = person
      }
    }
  }
  return output
}

const dayNames = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const classesForPersonDate = (person, date) => [
  'day',
  person,
  dayNames[new Date(date).getDay()],
  monthNames[new Date(date).getMonth()]
].join(' ')

render(document.body, h`
  ${mapEntries(historyAsDays, (person, date) => h`
    <div class=${() => classesForPersonDate(person, date)}>
      <span>${date}</span>: 
      <span>${person}</span>
    </div>
  `)}
`)
