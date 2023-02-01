async function getWeather() {
    try{
        //fetch data for Portland
    const theURL = 'https://api.openweathermap.org/data/2.5/weather?q=Portland,us&APPID=db3042e2b3f071ad96934f9cfe021850';
    const data = await fetch(theURL, {mode: 'cors'});
    console.log(data);
    //interpret data
    const processedData = await data.json(); 
    //log data  
    console.log(processedData); 
    const feelsLike = processedData.main.feels_like;
    const wind = processedData.wind.speed;
    console.log(wind);
    console.log(toCelsius(feelsLike));
    console.log(toFarenheit(feelsLike));
    }catch{
        console.log('sorry, Im broke');
    }
}

function toFarenheit(K) {
    return ((K-273.15)*(9/5)+32).toFixed(2);
}

function toCelsius(K) {
    return (K-273.15).toFixed(2);
}

getWeather();