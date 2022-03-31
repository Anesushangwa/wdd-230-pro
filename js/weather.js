const Aplurl = "https://api.openweathermap.org/data/2.5/onecall?lat=40.016&lon=-81.073&exclude=hourly&appid=761705f2fff2232362c92545f641006c";
fetch(Aplurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = Math.round(jsObject.current.temp - 273.15 );

    // let degree = (jsObject.currently.temp_max - 32) *5/9;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
const desc = jsObject.current.weather[0].description;

// document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('#speed').textContent = jsObject.current.wind_speed;
document.querySelector('figcaption').textContent = desc;
document.querySelector('#humiditys').textContent = jsObject.current.humidity;


const t = Math.round(jsObject.current.temp - 273.15 );
const s =  jsObject.current.wind_speed;

if(t <= 50 && s > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
}
else {
    document.querySelector("#windchill").innerHTML = "N/A"
}
  });