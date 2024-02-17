const button = document.getElementById('search-btn');
const input = document.getElementById('input')
const name = document.getElementById('city-name');
const time = document.getElementById('city-time');
const temp = document.getElementById('city-temp');
let key =prompt("enter your name")
let value = prompt("enter the purpose of comming")


localStorage.getItem("key","value")
async function getData(cityName){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=0500829439084b558e0112645231705&q=${cityName}&aqi=yes`)
   return await promise.json()
}

button.addEventListener('click', async ()=>{
    const value = input.value;
    const result = await getData(value);
    console.log(result) 
    name.innerText = `${result.location.name} , ${result.location.region} - ${result.location.country}`
    time.innerText = `Localtime & Date - ${result.location.localtime}`
    temp.innerText = `Temprature - ${result.current.temp_c}°C - ${result.current.temp_f}°F`
})

