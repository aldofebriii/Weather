class Store {
    constructor(){
        this.city;
        this.defaultCity = 'Tokyo'
    };


    getLocalData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity
        } else {
            this.city = localStorage.getItem('city')
        }

        return {
            city : this.city
        }
    }
    setLocalData(city){
        localStorage.setItem('city', city)
    }
}

