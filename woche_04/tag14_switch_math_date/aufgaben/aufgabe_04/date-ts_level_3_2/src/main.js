import { format, differenceInYears, differenceInCalendarMonths, differenceInDays, differenceInMonths } from "date-fns"
import { de } from "date-fns/locale"

const date1970 = new Date(1970, 1, 1)
const dateNow = new Date()

console.log(dateNow)
console.log(date1970)

const yearsDiff = differenceInYears(dateNow, date1970)
const monthDiff = differenceInMonths(dateNow, date1970)
const dayDiff = differenceInDays(dateNow, date1970)

console.log(yearsDiff)
console.log(monthDiff)
console.log(dayDiff)

const myBirthday = new Date(1992, 9, 23)
const date20070407 = new Date(2007, 4, 7)

const ageCurrent = differenceInYears(dateNow, myBirthday)
console.log(`Mein aktuelles Alter: ${ageCurrent}`)

const ageOn20070407 = differenceInYears(date20070407, myBirthday)
console.log(`Alter am 07.04.2007: ${ageOn20070407}`)

const dateFullTime = format(myBirthday, "dd.MM.yyyy HH:mm:ss")
const dateShortTime = format(myBirthday, "dd.MM.yyyy HH:mm")
console.log(format(myBirthday, "dd.MM.yyyy"))
console.log(format(myBirthday, "dd. MMMM yyyy"))
console.log(format(myBirthday, "HH:mm"))
console.log(format(myBirthday, "dddd"))
console.log(format(myBirthday, "MMMM"))

const sentenceDay = format(myBirthday, "dd")
const sentenceMonth = format(myBirthday, "MMMM")
const sentenceYear = format(myBirthday, "yyyy")

console.log(`${sentenceDay} des ${sentenceMonth} im Jahre des Herrn ${sentenceYear}`)
