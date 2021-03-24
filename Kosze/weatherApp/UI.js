class UI{
     constructor(){
          this.div = document.getElementById('tbody')
     }
     sendAlert(content){
          const parent = document.querySelector('#parent')
          const toInsert = document.createElement('h5')
          toInsert.className = 'u-full-width'
          toInsert.id = 'alert'
          toInsert.textContent = content
          console.log(parent.appendChild(toInsert)  )
          setTimeout( ()=>toInsert.remove() ,3000)

         
     }
     getData(element){
          const data = element.value;
          return data
     }
     showWeather(data){
          const table = this.div
          const addOn = 'http:'
          const weatherStatus = addOn+data.current.condition.icon
          const getKeyByValue = (object, value)=> Object.keys(object).find(key => object[key] === value)
          
          const getLocation = async ()=>{ //dodaj pierwszą wielką litere
               const conList = await fetch('countries.json')
               const getList = await conList.json()
               const country = await data.location.country
               return getKeyByValue(getList, country)
          }
          getLocation()
               .then(returned =>{
                    table.innerHTML = `
                         <tr>
                              <td class="td-p"><img src='${weatherStatus}' alt='current weather' ><br>${data.current.condition.text}</td>
                              <td class="td-p">${data.location.name} <br><img alt='' src='https://www.countryflagicons.com/FLAT/48/${returned}.png'</td>
                              <td class="td-p">${data.current.temp_c}<span>&deg<span>C,<br> ${data.current.temp_f}<span>&deg<span>F</td>
                              <td class="td-p">${data.current.wind_kph} km/h,<br>${data.current.wind_mph} mp/h</td>
                              <td class="td-p">${data.current.pressure_mb} hPa</td>
                         </tr>
                    `
               })    
     }
}
