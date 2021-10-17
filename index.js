var searchCity = $("#searchCity");
var searchEl = $("#search").val();

searchCity.click(function(){
    cityLocation =  $("#search").val();
    getWeather1();
    // getWeather();
})

var cityLocation = "";

function getWeather1() {
    console.log("starting")
var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&appid=ff27d0fb5cd91d7cb860b0e68030b800";
  fetch(url)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
       //based from project 1
    $("#currentCityName").text(cityLocation);
    $("#currentDayDate").text(moment(data.dt).format("MMM/ D/ YYYY"));
    $("#currentDayTemp").text("Temperature: " +data.main.temp +" F");
    $("currentDayHumidity").text("Humidity: " +data.main.humidity + "%");
    $("#currentDayWind").text("Wind: " +data.wind.speed + " MPH");
     })
    };

// function getWeather() {
//     console.log("starting")
// var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&units=imperial&appid=ff27d0fb5cd91d7cb860b0e68030b800";
//   fetch(url)
//    .then(function (response) {
//      return response.json();
//    })
//    .then(function (data) {
//        console.log(data);

//      })
//     };
