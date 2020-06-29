const fs = require("fs")



fs.readFile("./pi-billion.txt","utf8",  (err, data)=>{
  console.log(data)
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
