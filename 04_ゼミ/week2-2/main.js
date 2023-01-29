const toMorseCode = function (text) {
  var mojiretuData = 0
  var mojiretu = []
  for (let i = 0; i < text.length; i++) {
    var nowText = text.substring(i, i + 1)
    if (nowText !== "-") {
      mojiretuData += nowText
    } else if (nowText == "-") {
      mojiretu.push(Number(mojiretuData))
      mojiretuData = 0
    }
  }
  mojiretu.push(Number(mojiretuData))
  //console.dir(mojiretu)

  var n = 0
  for (let index = 0; index < mojiretu.length; index++) {
    n += mojiretu[index]
    //console.log(n)
  }

  //console.log(n)

  return n
}

console.log(toMorseCode("112-1-1"))
