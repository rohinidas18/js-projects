
const forecast = new Forecast();

// script for DOM manipulation

const cityForm = document.querySelector('form');


cityForm.addEventListener('submit', e=> {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    
    localStorage.setItem('city', city); //update locale storage
    cityForm.reset();

    forecast.updateCity(city)   //  pass the city to func to update the UI
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});

// ------------------------------------------------------------------------

const card = document.querySelector('.card');
const details = document.querySelector('.details');


const updateUI = data => {
    const cdata = data.cityDets.EnglishName;
    const wdata = data.weather.WeatherText;
    const temp = data.weather.Temperature.Metric.Value;
    const img_time = document.querySelector('.time');
    const icon = document.querySelector('.icon img');

    // destructuring
    // const {cityDets, weather} = data;

    details.innerHTML = `
    <h5 class="my-3">${cdata}</h5>
    <div class="my-3">${wdata}</div>
    <div class="display-4 my-4">
    <span>${temp}</span>
    <span>&deg;C</span>
    </div>`;

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    //update image
    let imsrc = data.weather.IsDayTime ? "img/day.svg" : "img/night.svg" ; // ternary operator
    img_time.setAttribute('src', imsrc);

    //update icon
    const iconSrc = `img/icons/${data.weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
};


if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}

// localStorage.clear();