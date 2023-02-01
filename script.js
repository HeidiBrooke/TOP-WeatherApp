async function getWeather() {
    console.log(`I'm running!`)
    try{
    //fetch data 
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const theURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&APPID=db3042e2b3f071ad96934f9cfe021850`;
    const data = await fetch(theURL, {mode: 'cors'});
    console.log(data);
    //interpret data
    const processedData = await data.json(); 
    //log data  
    console.log(processedData); 
    const feelsLike = processedData.main.feels_like;
    const wind = processedData.wind.speed;
    const main = processedData.weather[0].main;
    const description = processedData.weather[0].description;
    const display = document.getElementById('display');
    if(units.textContent === 'Celsius'){
        display.textContent = `It's ${toCelsius(feelsLike)} degrees Celsius and ${main} with ${description} in ${processedData.name}.`;
    }
    else{
        display.textContent = `It's ${toFarenheit(feelsLike)} degrees Farenheit and ${main} with ${description}  in ${processedData.name}.`;
    }
    
    console.log(wind);
    console.log(toCelsius(feelsLike));
    console.log(toFarenheit(feelsLike));
    }catch{
        display.textContent = `The temperature in ${processedData.name} Please try again.`;
    }
}

function toFarenheit(K) {
    return ((K-273.15)*(9/5)+32).toFixed(2);
}

function toCelsius(K) {
    return (K-273.15).toFixed(2);
}

const units = document.getElementById('units');

function toggleUnits(e) {
    console.log(`I'm clicked!`)
    console.log(e.target.checked);
    if(e.target.checked === true){
        units.textContent = 'Farenheit';
    }
    else{
        units.textContent = 'Celsius';
    }
}

const button = document.getElementById('button');
button.addEventListener('click', getWeather);

const slider = document.getElementById('checkbox');
slider.addEventListener('click', toggleUnits);
