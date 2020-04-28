class Weather {
    constructor(city){
        this.city = city;
        this.apiKey = '48924c814cdc5803837e52035b033085'
    };

    async getWeather(){
        const respondW = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`)
        const dataW = await respondW.json();

        return dataW
    }

    changeLocation(city){
        this.city = city;
    }
}