const ui = new UI;
const weather = new Weather;
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')




btn.addEventListener('click',async function(e){
     e.preventDefault()
     const show = async () =>{
          const city = await ui.getData(input)
          if (city == "" || city == " "){
               ui.sendAlert('Input can\'t be empty')
          } else{
          const requestWeather = await weather.sendReques(city)
          const showWeather = await ui.showWeather(requestWeather)
          return showWeather
          }
          
     }   
     show().catch(err =>{
          ui.sendAlert('City couldn\'t be reached')
          err.value = ""
     })
     input.value = ""
})

