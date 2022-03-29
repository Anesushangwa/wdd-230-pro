const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Bethesda,GB&APPID=6359c49dc3f6452175a11a317071ce5d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = Math.round(jsObject.main.temp_max - 273.15 );

    // let degree = (jsObject.main.temp_max - 32) *5/9;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
// document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('#speed').textContent = jsObject.wind.speed;
document.querySelector('figcaption').textContent = desc;


const t = Math.round(jsObject.main.temp_max - 273.15 );
const s =  jsObject.wind.speed;

if(t <= 50 && s > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
}
else {
    document.querySelector("#windchill").innerHTML = "N/A"
}
  });