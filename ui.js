class UI {
    constructor(){
        this.location = document.getElementById('location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.time = document.getElementById('w-time');
        this.feelslike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather){
        this.location.textContent = weather.request.query
        this.desc.textContent = weather.current.weather_descriptions;
        this.string.textContent = `${weather.current.temperature} C`
        switch(weather.current.weather_code){
            case 113: //sunny
                this.icon.setAttribute('src','view/sun.png')
            break
            case 116 || 119 : //cloudly
                this.icon.setAttribute('src','view/cloud.png')
            break
            case 122 : //Overcast
                this.icon.setAttribute('src','view/over.png')
            break
            case 143 : //mist
                this.icon.setAttribute('src','view/misr.png')
            break
            case 176 || 263 || 266 || 293 || 296 || 299 || 302 || 305 || 308 || 353    : //rain
                this.icon.setAttribute('src','view/rain.png')
            break
            case 200 || 386 : //thunder
                this.icon.setAttribute('src','view/thunder.png')
            break
        }
        this.humidity.textContent = `Humidity : ${weather.current.humidity}`
        const date = new Date(weather.location.localtime)
        this.time.textContent = `${date.getHours()}:${date.getUTCMinutes()}`
        this.feelslike.textContent = `It feels like ${weather.current.feelslike} C`;
        this.wind.textContent = `Wind Speed : ${weather.current.wind_speed} km/hour`
    }
    loadingScreen() {
        document.body.style.backgroundImage = "url(view/loading.gif)"
        document.querySelector('.container').style.display = 'none'
        document.querySelector('footer').style.display = 'none'

        setTimeout(()=>{
            document.body.style.backgroundImage = "url(view/wallpaper1.jpg";
            document.querySelector('.container').style.display = "block"
            document.querySelector('footer').style.display = 'block'
        },1900)
    }
    clearFields(){
        document.querySelector('#new-city').value = ''
    }
}