var searchCity = $("#searchCity");
var searchHistoryEl = $("#searchHistory0");
var searchEl = $("#search").val();

searchCity.click(function () {
  var cityLocation = $("#search")
  .val()
  .split(" ")
  .map(word => {
    var firstLetter = word[0].toUpperCase()
    var wordBody = word.substring(1)
    return firstLetter + wordBody;
  })
  .join(" ");

  getWeather1(cityLocation);
  
});

searchHistoryEl.click(function (event){
  var cityName = event.target.innerText
  getWeather1(cityName);
})

function updateSearchHistory(cityLocation) {
  var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  // if(!searchHistory){
  //   searchHistory = [];
  // }

  //first check if city already exists in SearchHistory

  searchHistory.push(cityLocation);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

  console.log(searchHistory)
  //add button to search history
  searchHistoryEl.empty();
  for(let i = 0; i < searchHistory.length; i++){
    searchHistoryEl.append(`
    <button id="citybutton">${searchHistory[i]}</button>
    `)
    
  }
 
}



function getWeather1(cityLocation) {
  console.log("starting");

updateSearchHistory(cityLocation);

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
      $("#currentDayWeather").text("Conditions: " + data.weather[0].description);

      get5DayForecast(cityLocation);
  
    });
}

function get5DayForecast(cityLocation) {
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
       

    });
}
//possibly uv index