const ui = new UI;
const weather = new Weather;
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click',async function(e){
     e.preventDefault()
     const show = async () =>{
          const city = await ui.getData(input)
          const requestWeather = await weather.sendReques(city)
          const showWeather = await ui.showWeather(requestWeather)
          return showWeather
     }   
     show()
     input.value = ""
})
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


const test = async (country)=>{ //dodaj pierwszą wielką litere
     let returnData
     const values = await weather.getCountries()
     const data = await getKeyByValue(values, country)
     return data
}
console.log(test("Poland").then(data=>console.log(data)))
