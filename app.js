const fs = require("fs")

const buffer = require("buffer")

console.log(buffer.constants.MAX_STRING_LENGTH)



/*
fs.readFile("./pi-billion.txt","utf8",  (err, data)=>{
  if(err){console.log(err)}
  console.log(data)
})
*/


let raw

let stream = fs.createReadStream("./pi-billion.txt", "utf8")

stream.on("data", (data)=>{
    raw += Number(data)
    console.log( Number(data))
})




function searchPi(raw, search){
  for(let i = 0 ; i < raw.length ; i++){  //Recherche dans tous PI si la premier valeur est present
    if(raw.charAt(i) === search.charAt(0)){   //Si oui
      let found = true
      for(let y = 0 ; y < search.lenght ; y++){   //Test les autres valeurs a la suite
        if(raw.charAt(i + y) !== search.charAt(y)){  //si une valeur n'est pas egale il stop
          found = false
          break
        }
      }
      if(found){  //Si a la fin de la boucle il a réussis renvois le résultat
        return i
      }
    }
  }
  return -1
}



//let a = searchPi(raw, 123)

//console.log(a)
