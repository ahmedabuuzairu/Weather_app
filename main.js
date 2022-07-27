 
 let button = document.getElementById('btn')
 btn.onclick = function(){

  
  
}


let key = "5a9a13dcf72bd9abdd5ce647ea9ab515"
let city = "Tamale" 
let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
   
fetch(api)
   .then((Response)=>Response.json())
   .then((data)=>{
      console.log(data)
      let city = document.getElementById('city')
      city.innerHTML = data.name
      let countryname =document.getElementById("country")
      countryname.innerHTML =data.sys.country 
      let temp = document.getElementById("temperature")
      temp.innerHTML = data.main.temp
      let feels_like = document.getElementById("feels")
      feels_like.innerHTML = data.weather[0].description
      let humidity = document.getElementById("humidity")
      humidity.innerHTML = data.main.humidity
      let windspeed = document.getElementById("windspeed")
      windspeed.innerHTML = data.wind.speed
      let max_temp = document.getElementById("max")
      max_temp.innerHTML = data.main.temp_max
      let pressure = document.getElementById("pressure")
      pressure.innerHTML = data.main.pressure

   })

   .catch((error)=>console.log(error))
 
 
