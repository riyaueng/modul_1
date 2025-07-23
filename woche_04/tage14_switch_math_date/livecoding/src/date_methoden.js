import { format, differenceInYears, getDate, getDay } from "date-fns"

console.log("%c Date Methoden", "background-color: red; color: white")

const myDate = new Date()

console.log("myDate", myDate)
console.log(typeof myDate)

console.log(typeof myDate.toString())

// # Koordninierte Weltzeit (UTC)

console.log(myDate.toUTCString())

// # Uhrzeiten in Stunden, Minuten und Sekunden unterteilt
const meinBearbeiteteVariable = myDate.toISOString()
console.log(meinBearbeiteteVariable)

// # toLocale-Methode

console.log(myDate.toLocaleDateString("de", { dateStyle: "full" })),
  // --> myDate.toLocaleDateString("de", { dateStyle: "full"}))
  console.log(myDate.toLocaleDateString("de", { dateStyle: "long" }))

console.log(myDate.toLocaleDateString("de", { dateStyle: "short" }))

// Das gibt uns eine MS zurück
console.log(Date.now())

// # getFullYear() -> holt sich den Jahrgang
console.log(myDate.getFullYear().toString())

// # getMonth() -> holt sich den Monat, Aufzählung beginnt immer mit 0
console.log(myDate.getMonth())

// # get.Date() -> holt sich den Tag der Woche, da wird der tag auch mit 0 beginnen und der Start der Woche ist Sonntag
console.log(myDate.getDay())

// # get.Date() -> hotl sich den Tag des Monats
console.log(myDate.getDate())

// # get.Time() -> sind die Anzahl der Millisekunden seit 01.01.1970

console.log(myDate.getTime())

console.log("TIME->", myDate.getHours(), myDate.getMinutes(), myDate.getSeconds())

console.clear()

const projektStartDate = new Date(2025, 7, 24, 10, 0)

console.log(projektStartDate)

// # sobald wir keine Uhrzeit übergeben, wird da 00:00 angezeigt
console.log(new Date(2025, 8, 30))

// ! Lasst uns was Cooles machen und installieren

console.log(format(new Date(), "'Heute ist' eeee"))

const sagMirWieAltduBist = differenceInYears(new Date(), new Date("2000-02-11"))

console.log(sagMirWieAltduBist)

const gibMirDenTag = getDay(new Date(2025, 6, 28))

console.log(gibMirDenTag)

switch (gibMirDenTag) {
  case 0:
    console.log("Sonntag")
    break
  case 1:
    console.log("Montag")
    break
  case 2:
    console.log("Dienstag")
    break
}
