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
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityLocation + "&units=imperial&appid=ff27d0fb5cd91d7cb860b0e68030b800";
  fetch(url)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
       console.log(data)
       //based from project 1
    $("#currentCityName").text(cityLocation);
    $("#currentDayDate").text(moment(data).format("MMM/D/ YYYY"));
    $("#currentDayHumidity").text("Humidity: " +data.main.humidity+ "%");
    $("#currentDayTemp").text("Temperature: " +data.main.temp +" F");
    $("#currentDayWind").text("Wind: " +data.wind.speed + " MPH");

    function pastCities() {
        var cityEl = document.createElement("p");
        var cities = $("#search").val();
        cityEl.textContent(cities);
        console.log(cities)
        // cityEl.setAttribute()
    }
    pastCities();
    //There is no UV info because it retired
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
