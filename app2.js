//node --max_old_space_size=4096 app.js



const fs = require("fs")


function searchPi(fichier , search){
  let stream = fs.createReadStream(fichier, "utf8")

  let id = -1

  let length = 0


  stream.on("data", (data)=>{
    for(let i = 0 ; i < data.length ; i++){
      if(data.charAt(i) === search.charAt(0)){
        let found = true
        for(let y = 0 ; y < search.length ; y++){
          if(data.charAt(i + y) !== search.charAt(y)){
            found = false
            break
          }
        }
        if(found){
          id =  length + i
          console.log(id)
          break
        }
      }
    }
    length += data.length
  })

  stream.on("end", ()=>{
    console.log(length)
  })

  return "Votre numéros est: "
}

 console.log(searchPi("./pi-billion.txt", "07212001"))
