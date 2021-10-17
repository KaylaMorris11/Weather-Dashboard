var searchCity = $("#searchCity");
var searchEl =  $("#search").val();

searchCity.click(function(){
    cityLocation =  $("#search").val();
    getWeather();
})

var cityLocation = "";


function getWeather() {
    console.log("starting")
var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&units=imperial&appid=ff27d0fb5cd91d7cb860b0e68030b800";
  fetch(url)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
       console.log(data);
    

       
     })
    };
