async function getData(filesToFatch){
     let filesFatched = [];
     for(let i = 0; i< filesToFatch.length;i++){
          const doLoop = async ()=>{
               file = await fetch(filesToFatch[i])
               fileAfter = await file.json()
               filesFatched.push(fileAfter)
          } 
          await doLoop()
     } return filesFatched
}

let toFatch = ['1.json', '2.json', '3.json']
getData(toFatch).then(data =>{
     data.forEach(object =>{
          console.log(object)
     })
     })




     
