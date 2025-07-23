import { format, differenceInYears, getDate, getDay, formatDate, getMonth, isFuture } from "date-fns"

// * --------------- Datum ---------------

const fullDate = new Date()

const day = fullDate.getDate()
const month = fullDate.getMonth()
const year = fullDate.getFullYear()

document.querySelector(".hyphen_date").innerHTML = day + "-" + month + "-" + year

document.querySelector(".slash_date").innerHTML = day + "/" + month + "/" + year

// * --------------- Uhrzeit ----------------

const deMinutes = fullDate.getMinutes()
const deHours = fullDate.getHours()

document.querySelector(".local_time").innerHTML = deHours + ":" + deMinutes + " " + "Uhr"

const utcMinutes = fullDate.getUTCMinutes()
const utcHours = fullDate.getUTCHours()

document.querySelector(".utc_time").innerHTML = utcHours + ":" + utcMinutes + " " + "Uhr"
