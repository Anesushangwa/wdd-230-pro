const aplurl = "https://api.openweathermap.org/data/2.5/onecall?lat=40.016&lon=-81.073&exclude=hourly&appid=761705f2fff2232362c92545f641006c";
fetch(aplurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp1').textContent = Math.round(jsObject.daily[0].temp.day - 273.15 );
    // let degree = (jsObject.currently.temp_max - 32) *5/9;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.daily[0].weather[0].icon}.png`;
const desc = jsObject.daily[0].weather[0].description;
// document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon1').setAttribute('src', iconsrc);
document.querySelector('#weathericon1').setAttribute('alt', desc);
document.querySelector('#speed1').textContent = jsObject.daily[0].wind_speed;
document.querySelector('#weatherdsc').textContent = desc;
document.querySelector('#humidit2').textContent = jsObject.daily[0].humidity;


const t = Math.round(jsObject.daily[0].temp.day- 273.15 );
const s =  jsObject.daily[0].wind_speed;

if(t <= 50 && s > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
    document.querySelector("#windchill1").innerHTML = `${Math.round(windchill)}&#176;`;
}
else {
    document.querySelector("#windchill1").innerHTML = "N/A"
}
  });


  // second day


  const pplurl = "https://api.openweathermap.org/data/2.5/onecall?lat=40.016&lon=-81.073&exclude=hourly&appid=761705f2fff2232362c92545f641006c";
fetch(pplurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp2').textContent = Math.round(jsObject.daily[1].temp.day - 273.15 );
    // let degree = (jsObject.currently.temp_max - 32) *5/9;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
const desc = jsObject.daily[0].weather[0].description;
// document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon2').setAttribute('src', iconsrc);
document.querySelector('#weathericon2').setAttribute('alt', desc);
document.querySelector('#speed2').textContent = jsObject.daily[1].wind_speed;
document.querySelector('#weatherdsc2').textContent = desc;
document.querySelector('#humidit3').textContent = jsObject.daily[1].humidity;


const t = Math.round(jsObject.daily[1].temp.day- 273.15 );
const s =  jsObject.daily[1].wind_speed;

if(t <= 50 && s > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
    document.querySelector("#windchill2").innerHTML = `${Math.round(windchill)}&#176;`;
}
else {
    document.querySelector("#windchill2").innerHTML = "N/A"
}
  });


// Third day


const splurl = "https://api.openweathermap.org/data/2.5/onecall?lat=40.016&lon=-81.073&exclude=hourly&appid=761705f2fff2232362c92545f641006c";
fetch(splurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp3').textContent = Math.round(jsObject.daily[2].temp.day - 273.15 );
    // let degree = (jsObject.currently.temp_max - 32) *5/9;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;
const desc = jsObject.daily[2].weather[0].description;
// document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon3').setAttribute('src', iconsrc);
document.querySelector('#weathericon3').setAttribute('alt', desc);
document.querySelector('#speed3').textContent = jsObject.daily[2].wind_speed;
document.querySelector('#weatherdsc3').textContent = desc;
document.querySelector('#humidit4').textContent = jsObject.daily[1].humidity;


const t = Math.round(jsObject.daily[2].temp.day- 273.15 );
const s =  jsObject.daily[2].wind_speed;

if(t <= 50 && s > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
    document.querySelector("#windchill3").innerHTML = `${Math.round(windchill)}&#176;`;
}
else {
    document.querySelector("#windchill3").innerHTML = "N/A"
}
  });
