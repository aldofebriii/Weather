const ui = new UI
const store = new Store
const changeBtn = document.querySelector('#w-change-btn')
store.getLocalData()
const weather = new Weather(store.city)

//Event Listener
store.getLocalData()
document.addEventListener('DOMContentLoaded',getWeather)
changeBtn.addEventListener('click', changeLocation)

//function
function getWeather(){
weather.getWeather()
.then((weather)=> {ui.paint(weather)
})
.catch((err) => console.log(err))
}

function changeLocation() {
    const newCity = document.querySelector('#new-city').value;
    weather.changeLocation(newCity);
    getWeather();
    $('#locModal').modal('hide');
    store.setLocalData(newCity);
    ui.clearFields();
    ui.loadingScreen()
}
