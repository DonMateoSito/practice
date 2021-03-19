class Weather{
     constructor(){
          this.KeyAPI = "e1a6e64ebed64f25b2f115044211903"
     }
     async sendReques(city){
          const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.KeyAPI}&q=${city}&aqi=no`)
          const value = await data.json()
          console.log(value)
          return value
          
     }
     async getCountries(){
          const data = await fetch('countries.json')
          const values = await data.json()
          return values
     }
     
}
