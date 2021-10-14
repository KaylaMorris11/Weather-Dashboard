var searchCity = $("searchCity");
var searchEl =  $("#search").val();
var cityLocation = "";

searchCity.addEventListener('click', search);
function searchACity() {
    cityLocation = $("#search").val();
}

var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&units=imperial&appid=e41962a063e9be6787e7150171080faf";
  fetch(requestUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {

   }


