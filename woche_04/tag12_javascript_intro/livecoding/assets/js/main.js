// ! Testen wir, ob wir unsere JS-Datei erfolgriech eingebunden haben
// ? Was ist console.log()
// * Damit könne wir Sachen (Texte bzw. Variablen) ind er KOnsole ausgeben lassen, das benutzen wir sehr oft, wenn wir sachen testen wollen

console.log("Die Verbindung isZzz Da")

// ------- Variablen

// # const => Die Variablen sollten für Werte verwendet werden, die sich nicht mehr verändern.

const meinName = "Farid"
// ! meinName = "Joe" => main.js:12 Uncaught TypeError: Assignment to constant variable.
console.log(meinName)

// # let => Die Variablen werden für Werte verwendet, die sich später auch ändern können.

let alter = 29
console.log(alter)

alter = 30
console.log(alter)

// # var => Hat man vor  ECMASscript 6 benutzt => benutzen wir NICHT mehr
// var street = "musterStraße"
// console.log(street)

// ! +++++++ Datentypen +++++++

// ? 1. string, number, boolean

// * strings => Text der in Anführungszeichenstehen müssen
// * z. B.
console.log("Hallo ich bin daaa")

// * number => Die Zahlen werden in der Konsole farbig angezeigt

const number1 = 17
console.log(number1)

console.log(number1 + 3)

// ! Sobald man einen string mit einer number kombiniert, wird am End eein string ausgegeben.
console.log(number1 + "3")

// * boolean => gibt true/false bzw. 0 oder 1, das könne wir für Vergleiche benutzen

console.log(true)
console.log(false)

// ! Konvention bei Variablenbenennung

// ? Aussagekräftig
// ? Nicht zu kurz und nicht zu lang
// ? Namen dürfen nicht mit Zahlen beginnen
// ? Keine Leerzeichen
// ? JS ist case-sensitive

// let 0_apfel =.
// let kiwi apfel = 200
// let heuteisteinschönertag = true
// ! Nicht zulässig

// Hier sehen wir zwei verschiedene Variablen, das Apfel einmal groß und einmal kelin geschrieben werden

// * Klein und große sind zwei verschiedene Variablen
let apfel = 15
console.log(apfel)

let Apfel = 20
console.log(Apfel)

// ! camelCase
let vorName = "joe"
let nachName = "doe"
console.log(vorName)
console.log(nachName)

// ! snake_case

let meine_erste_variable = "Heute ist es richtig warm"
console.log(meine_erste_variable)

// ! PascalCase

let MeineErsteVariable = "Andre sieht heute sehr schön aus"

// ! Auf gar KEINEN FALL
// let $meineErsteVariable
// let meineerstevariable
// let banane-traube-apfel

// ! ****** strings miteinander verbinden ******

const firstName = "Marco"
const lastName = "Orlandi"

let city = "München"

const fullName = firstName + lastName
console.log(fullName)

// * Mehrere Textelemente miteinander verbinden direkt in console.log()

// ! Beachtet keine Zeilenumbrüche
console.log("ich heiße " + firstName + " " + lastName + " und ich wohne in " + city)

// # template Literals => schreiben wir in die Backticks ``` + $ + {}
// * Das können wir mit Ansführungszeichen leider nicht kombinieren
// * Hier werden Zeilenumbrüche, Leerzeichen und Einrückung beachtet
// * z. B.
console.log(`ich bin ${firstName} ${lasName} und wohne in ${city}`)

// * Mit Zuweisungsoperator += können wir den Satz "hallo was geht" nach dem Satz "hello wasupp" anhängen
//  ! Variante 1
let message = "hello wasupp"
message += "hallo was geht"

//  ! Variante 2
let message2 = "hello wasupp"
message2 = message2 + "hallo was geht"

console.log(message)

// ! Arithmetische Operatoren ++++++++++
let x = 5
let y = 10
let z = 3

// * Addition
console.log(x + y)

// * Subtraktion
console.log(y - z)

// * Multiplikation
console.log(x * y)

// * Division
console.log(y / 5)

// * Module gibt den Restwert zurück
console.log(y % 2)

let a = 1
// * Wie können wir zu variable x 1 addieren?

const summe = x + 1
console.log(summe)

// * Hie rwird ebenfalls 1 addiert, dies ist aber eine kurzschreibweise + das darf bei einer neuen Deklaration nicht verwendet werden
// ! let summ2 = a++
a++
console.log(a)

// * Hier wird die Variable b 1 abgezogen
let b = 10
b--
console.log(b)

// ! SEHR VERALTET
// * Hier könne wir Text in unser HTML einfügen
document.write("Hallo, heute ist es sehr warm")
document.write("<h2>Ich bin eine Überschrift</h2>")
// * Es öffnet sich ein Popup-Fenster jedes Mal, wenn die Seite neu geladen wird
// window.alert("Irgendwas blablabla")

// * confirm => Öffnet ein Dialog Popup-Fenster mit der eingegebenen Nachricht und wartet darauf, das der Benutzer den Dialog bestätigt oder abbricht.

// let confirmElement = window.confirm("Stimmen Sie den Cookies zu")
// console.log(confirmElement)

// * Wiederholung
// Wie deklariere ich eine Variable richtig?

let myStreet = "musterstraße"
let myCity = "berlin"
console.log(myStreet + "" + myCity)

let actor = "ben afleck"
console.log(`${actor} ist gerade in ${myCity}`)

myStreet = "Sesamstraße"
console.log(myStreet)

const result = (myStreet += "10")
console.log(result)
