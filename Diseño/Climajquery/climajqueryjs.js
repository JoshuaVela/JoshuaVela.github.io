let datos_json = '{ "product" : "civillight" , "init" : "2020031312" , "dataseries" : [ { "date" : 20200313, "weather" : "cloudy", "temp2m" : { "max" : 24, "min" : 21 }, "wind10m_max" : 2 }, { "date" : 20200314, "weather" : "pcloudy", "temp2m" : { "max" : 35, "min" : 21 }, "wind10m_max" : 2 }, { "date" : 20200315, "weather" : "cloudy", "temp2m" : { "max" : 35, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200316, "weather" : "lightrain", "temp2m" : { "max" : 29, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200317, "weather" : "cloudy", "temp2m" : { "max" : 31, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200318, "weather" : "cloudy", "temp2m" : { "max" : 35, "min" : 22 }, "wind10m_max" : 2 }, { "date" : 20200319, "weather" : "cloudy", "temp2m" : { "max" : 30, "min" : 22 }, "wind10m_max" : 2 } ] }'
const datos = JSON.parse(datos_json);
let clima7 = document.querySelector("#clima7");

// for (let i = 0; i < datos.dataseries.length; i++)
// {
//     let date = datos.dataseries[i].date;
//     let weather = datos.dataseries[i].weather;
//     let min = datos.dataseries[i].temp2m.min;
//     let max = datos.dataseries[i].temp2m.max;
//     let pronostico = document.createElement("div");
//     pronostico.innerHTML = "<span class = 'date'>"+date+"</span> <span class = 'weather'>"+weather+"</span> <span class = 'min'>"+min+"</span> <span class = 'max'>"+max+"</span>";
//     clima7.appendChild(pronostico);
// }

// let request = new XMLHttpRequest();
// request.addEventListener("load", (e) => {
//     console.log(e);
//     console.log(this);

//     const datos = JSON.parse(request.responseText);
//     for (let i = 0; i < datos.dataseries.length; i++) {
//         let date = datos.dataseries[i].date;
//         let weather = datos.dataseries[i].weather;
//         let min = datos.dataseries[i].temp2m.min;
//         let max = datos.dataseries[i].temp2m.max;
//         let clima = document.createElement('div');
//         clima.innerHTML = `<div class="date">${date} 
//                         </div><div class="weather">${weather} </div><div class="min">${min} </div><div class="max">${max} </div>`;
//         clima7.appendChild(clima);
//     }

$(document).ready((e) => {
    $.get({
        url: "http://www.7timer.info/bin/civillight.php?lon=22.233105&lat=-97.861099&unit=metric&output=json&tzshift=0",
        success: function(result) {
            const datos = JSON.parse(result);
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
        }
    })
})

// var estadodeltiempo = function()
// {
//     var fecha = new Date(),
//         diaSemana = fecha.getDay(),
//         dia = fecha.getDate(),

//     var semana = [ 'Domingo' , 'Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado'];
//     pDiaSemana.textContent = semana[diaSemana];

//     pDia.textContent = dia;
// }

//     estadodeltiempo();
//     var intervalo = setInterval(estadodeltiempo);
// });

// request.open("GET", "http://www.7timer.info/bin/civillight.php?lon=22.233105&lat=-97.861099&unit=metric&output=json&tzshift=0");
// request.send();