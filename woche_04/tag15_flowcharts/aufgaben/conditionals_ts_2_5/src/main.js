function check() {
  const inputBundesland = document.getElementById("bundeslandInfo").value
  const outputInfo = document.getElementById("bundeslandInfoErgebnis")

  switch (inputBundesland) {
    case "Baden-Württemberg":
      outputInfo.innerHTML = "<p>Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt</p>"
      break
    case "Bayern":
      outputInfo.innerHTML = "<p>Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt</p>"
      break
    case "Berlin":
      outputInfo.innerHTML = "<p>Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt</p>"
      break
    case "Brandenburg":
      outputInfo.innerHTML = "<p>Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt</p>"
      break
    case "Bremen":
      outputInfo.innerHTML = "<p>Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstad</p>"
      break
    case "Hamburg":
      outputInfo.innerHTML = "<p>Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt</p>"
      break
    case "Hessen":
      outputInfo.innerHTML = "<p>Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptsta</p>"
      break
    case "Mecklenburg-Vorpommern":
      outputInfo.innerHTML = "<p>Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstad</p>"
      break
    case "Niedersachsen":
      outputInfo.innerHTML = "<p>Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt</p>"
      break
    case "Nordrhein-Westfalen":
      outputInfo.innerHTML = "<p>Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt</p>"
      break
    case "Rheinland-Pfalz":
      outputInfo.innerHTML = "<p>Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt</p>"
      break
    case "Saarland":
      outputInfo.innerHTML = "<p>Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt</p>"
      break
    case "Sachsen":
      outputInfo.innerHTML = "<p>Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt</p>"
      break
    case "Sachsen-Anhalt":
      outputInfo.innerHTML = "<p>Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt</p>"
      break
    case "Schleswig-Holstein":
      outputInfo.innerHTML = "<p>Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt</p>"
      break
    case "Thüringen":
      outputInfo.innerHTML = "<p>Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt</p>"
      break
    default:
      outputInfo.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht."
  }
}
