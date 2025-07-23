const whereIsSusi = "Susi is back from codingschool"
console.log(whereIsSusi.length)

const nurSusi = whereIsSusi.substring(0, 4)

document.querySelector(".nur_susi").innerHTML = nurSusi

const nurIs = whereIsSusi.substring(5, 7)

document.querySelector(".nur_is").innerHTML = nurIs

const nurSchool = whereIsSusi.substring(24, 30)

document.querySelector(".nur_school").innerHTML = nurSchool

document.write(nurSusi + " " + nurIs + " " + nurSchool)
