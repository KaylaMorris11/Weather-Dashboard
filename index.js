var searchCity = $("#searchCity");
var searchEl = $("#search").val();
var cityLocation = "";

searchCity.click(function () {
  cityLocation = $("#search").val();
  getWeather1();
  get5DayForecast();
});

function getWeather1() {
  console.log("starting");
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityLocation +
    "&units=imperial&appid=ff27d0fb5cd91d7cb860b0e68030b800";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //inspired from project 1
      $("#currentCityName").text(cityLocation);
      $("#currentDayDate").text(moment(data).format("MMM/D/YYYY"));
      $("#currentDayHumidity").text("Humidity: " + data.main.humidity + "%");
      $("#currentDayTemp").text("Temperature: " + data.main.temp + " F");
      $("#currentDayWind").text("Wind: " + data.wind.speed + " MPH");
    });
}

function get5DayForecast() {
  console.log("starting");
  var url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityLocation +
    "&units=imperial&appid=ff27d0fb5cd91d7cb860b0e68030b800";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var day = 1;
      console.log($("#dayDate"+day))
      for(let i = 4; i < data.list.length; i+= 8){
        $("#dayDate"+day).text(moment(data.list[i].dt_txt).format("MM/D/YYYY"))
        $("#dayTemp"+day).text("Temp: "+ data.list[i].main.temp + " F")
        $("#dayWind"+day).text("Wind: "+ data.list[i].wind.speed + " MPH")
        $("#dayHumidity"+day).text("Humidity: "+ data.list[i].main.humidity + "%")
        day++;
      }

      for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
       }

    //   (data.list[i].dt_txt)
    });
}
//possibly uv index
