//  ! ---- String Methoden ----

// * Index-Start ist immer bei 0, und H wäre in dem Fall index 0
const ourString = "Hallo Leudddeee, Heute ist ein schöner Tag und wir werden Heute string-Methoden lernen"

// # concat() -> Verbindet zwei Texte bzw. strings

let moreText = "Ich bin sogar mehr input"

console.log(ourString.concat(" " + moreText))
console.log(moreText.concat(" blabla"))

// # charAt() -> Liefert uns das jeweilige Zeichen zurück, dass sich in einer Zeichenkette befindet

console.log(ourString.charAt(6))

// # includes() -> Überprüft erstmal ob ein bestimmtes Wprt innerhalb einer Zeichenkette überhaupt gibt und gibt usn ein true oder false zurück

console.log(ourString.includes("Tag")) // true
console.log(ourString.includes("tag")) // false

// # indexOf() -> Sucht ab welchem index etwas als erstes kommt

console.log(ourString.indexOf("i"))
console.log(ourString.indexOf("H"))

// # length -> Gibt usn die Länge vom string zurück

console.log(ourString.length)

// # replace() -> Ersetzt ein Teil von einem String und gibt diesen zurück

console.log(ourString.replace("Tag", "Abend"))

// # replaceAll() ->
console.log(ourString.replaceAll("Heute", "Gestern"))

// # slice -> schneidet bis einem bestimmten index aus und gibt uns den Rest
// ! ---------- WICHTIGE Methode -------- !

console.log(ourString.slice(6))

// # substring() ->  Ist genauso wie  slice allerdings gibt es einen kleinen Unterschied: Mit slice kann man mit Minuswerten arbeiten und fängt dann immer von hinten an, bei substring kann man sowas nicht machen
// ! ---------- WICHTIGE Methode -------- !

console.log(ourString.slice(-1))
// console.log(ourString.substring(-1)) // Das funktioniert nicht

// # toLowerCase() -> gibt und alles in Kleinbuchstaben zurück

console.log(ourString.toLowerCase())

// # toUpperCase() -> gibt und alles in Großbuchstaben zurück

console.log(ourString.toUpperCase())

//  * toString() oder String geben uns beide als string zurück
let number3 = 100
console.log(String(number3))
