let datos_json = '{ "product" : "civillight" , "init" : "2020031312" , "dataseries" : [ { "date" : 20200313, "weather" : "cloudy", "temp2m" : { "max" : 24, "min" : 21 }, "wind10m_max" : 2 }, { "date" : 20200314, "weather" : "pcloudy", "temp2m" : { "max" : 35, "min" : 21 }, "wind10m_max" : 2 }, { "date" : 20200315, "weather" : "cloudy", "temp2m" : { "max" : 35, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200316, "weather" : "lightrain", "temp2m" : { "max" : 29, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200317, "weather" : "cloudy", "temp2m" : { "max" : 31, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200318, "weather" : "cloudy", "temp2m" : { "max" : 35, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200319, "weather" : "cloudy", "temp2m" : { "max" : 30, "min" : 22 }, "wind10m_max" : 2 } ] }'
const datos = JSON.parse(datos_json);
let clima7 = document.querySelector("#clima7");

let request = new XMLHttpRequest();
request.addEventListener("load", (e) => {
    console.log(e);
    console.log(this);

    const datos = JSON.parse(request.responseText);
    for (let i = 0; i < datos.dataseries.length; i++) {
        let date = datos.dataseries[i].date;
        let weather = datos.dataseries[i].weather;
        let min = datos.dataseries[i].temp2m.min;
        let max = datos.dataseries[i].temp2m.max;
        let clima = document.createElement('div');
        clima.innerHTML = `<div class="date">${date} 
                        </div><div class="weather">${weather} </div><div class="min">${min} </div><div class="max">${max} </div>`;
        clima7.appendChild(clima);
    }

});

request.open("GET", "http://www.7timer.info/bin/civillight.php?lon=22.233105&lat=-97.861099&unit=metric&output=json&tzshift=0");
request.send();