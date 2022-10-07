//
const apiKey = 'c08395e04178ea519f6860b0b51c65cb'
const countryApi = 'https://countryflagsapi.com/png/'


const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector('#search')
const cityElement =document.querySelector('#city')
const tempElement =document.querySelector('#temperature span')
const descElement =document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement =document.querySelector('#country')
const humidityElement =document.querySelector('#umidity span')
const windElement =document.querySelector('#wind span')


// Funções
const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherUrl)
    const data = await res.json()

    return data
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city)

    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute('src',countryApi + data.sys.country)
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText =  `${data.wind.speed}km/h`


}







//
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault() //Não permite que o formulário envie os dados

    const city = cityInput.value

    showWeatherData(city)
    
})

