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
          table.innerHTML = `
               <tr>
                    <td><img src='${weatherStatus}' alt='current weather' ><br>${data.current.condition.text}</td>
                    <td>${data.location.name} <br><img src='https://www.countryflagicons.com/FLAT/24/DE.png'</td>
                    <td>${data.current.temp_c}<span>&deg<span>C,<br> ${data.current.temp_f}<span>&deg<span>F</td>
                    <td>${data.current.wind_kph} km/h,<br>${data.current.wind_mph} mp/h</td>
                    <td>${data.current.pressure_mb} hPa</td>
               </tr>
          `
     }
     
}