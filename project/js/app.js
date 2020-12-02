
const url = "https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955/by-cities.json";


const httpGetCities=(url) => {
    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.overrideMimeType("application/json");
       
        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
                showCities(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });
}

const showCities = doc => {
    let data = JSON.parse(doc);
    let regions = data[0].regions;
    let sel = document.getElementById("cities");
    for (let j=0; j < regions.length;j++){

        let city = regions[j].cities;
        for (let i=0; i<city.length; i++){
            let name = city[i].name;
            let val = city[i].lat;
            let opt = `<option val="${val}">${name}</option>`
            sel.innerHTML += opt;
        }
    }
}

function showWeather(response) {
    console.log(response);
    let tablo = document.getElementById("tablo");
    tablo.classList.add("active");
    let dataString = JSON.stringify(response);
    var now = new Date();
    let h = now.getHours();
    var num = (Math.floor(h / 3));
    //сегодня
    document.getElementById("demo4").innerHTML = response.list[num].dt_txt;
    document.getElementById("demo5").innerHTML = "Температура: " + " " + Math.floor((response.list[num].main["temp"]) - 273, 15) + "°C";
    document.getElementById("demo6").innerHTML = "Скорость ветра: " + " " + response.list[num].wind["speed"] + "м/с";
    var imgURL = "https://openweathermap.org/img/w/" + response.list[num].weather[0].icon + ".png";
    document.getElementById("tmp4").setAttribute("src", imgURL);
    //завтра
    document.getElementById("demo7").innerHTML = response.list[num + 8].dt_txt;
    document.getElementById("demo8").innerHTML = "Температура: " + " " + Math.floor((response.list[num + 8].main["temp"]) - 273, 15) + "°C";
    document.getElementById("demo9").innerHTML = "Скорость ветра: " + " " + response.list[num + 8].wind["speed"] + "м/с";
    var imgURL = "https://openweathermap.org/img/w/" + response.list[num + 8].weather[0].icon + ".png";
    document.getElementById("tmp5").setAttribute("src", imgURL);
    //послезавтра
    document.getElementById("demo10").innerHTML = response.list[num + 16].dt_txt;
    document.getElementById("demo11").innerHTML = "Температура: " + " " + Math.floor((response.list[num + 16].main["temp"]) - 273, 15) + "°C";
    document.getElementById("demo12").innerHTML = "Скорость ветра: " + " " +response.list[num + 16].wind["speed"] + "м/с";
    var imgURL = "https://openweathermap.org/img/w/" + response.list[num + 16].weather[0].icon + ".png";
    document.getElementById("tmp6").setAttribute("src", imgURL);
}

function getWeather(city) {
    let urlCity = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=300b07d359c3f75b13f6e6a6578ad94c`;
    fetch(urlCity)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                return response.json();
            }
        )
        .then(showWeather)
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}


httpGetCities(url);

let cities = document.querySelector("#cities");
cities.addEventListener("change", function () {
    console.log(this.value);
    document.getElementById("nameCity").innerHTML= `Погода в городе ${this.value}`;
    getWeather(this.value);
}); 