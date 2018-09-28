//Google Maps
var map;
var arealat;
var arealing;
var turl;
var tkey;
var thetime;
var wkey;
var wurl;
function initMap() {
  var options = {
    center: new google.maps.LatLng(48,95),
    scrollwheel: false,
    zoom: 4
  }
  map = new google.maps.Map(document.getElementById('map'), options);
  var area = document.getElementById('PSearch');
  var searchBox = new google.maps.places.SearchBox(area);
  var autocomplete = new google.maps.places.Autocomplete(area);
}

//Gets Area lat long from input
function geocode() {
  var area = $( "#PSearch" ).val();
  var gkey = 'AIzaSyCg7FRYuZIlQ0Fn7nllBjtcM1YZPxQcFUU';
  axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params:{
      address:area,
      key:gkey
    }
  })
  .then(function(response){
    arealat = response.data.results[0].geometry.location.lat;
    arealing = response.data.results[0].geometry.location.lng;
    map.setCenter(new google.maps.LatLng(arealat,arealing));
    map.setZoom(12);
    axios.get(turl,{
      params:{
        key:tkey,
        format:"json",
        by:"position",
        lat:arealat,
        lng:arealing
      }
    })
    .then(function(response){
      thetime = response.data.formatted;
      ftime = thetime.substring(10,19);
      $("#localtime").text(ftime);
    })
    .catch(function(error){
      console.log(error);
    })
  })
  .catch(function(error){
    console.log(error);
  })
  axios.get(wurl,{
    params:{
      q: area,
      appid: wkey,
      units:"imperial"
    }
  })
  .then(function(response){
    var warea = $("#weather");
    var winfo = response.data;
    warea.html('<h2>'+winfo.name+' Weather'+'</h2>'+'<h3>'+winfo.weather[0].main+'</h3>'+
    '<table id="temp">'+'<tr>'+'<td>'+"Current Temp:"+'</td>'+'<td>'+parseInt(winfo.main.temp)+'&#8457'+'</td>'+'</tr>'+
    '<tr>'+'<td>'+"Max Temp:"+'</td>'+'<td>'+parseInt(winfo.main.temp_max)+'&#8457'+'</td>'+'</tr>'+
    '<tr>'+'<td>'+"Min Temp:"+'</td>'+'<td>'+parseInt(winfo.main.temp_min)+'&#8457'+'</td>'+'</tr>'+
    '<tr>'+'<td>'+"Wind Speed:"+'</td>'+'<td>'+parseInt(winfo.wind.speed)+'m/s'+'</td>'+'</tr>'+

    '</table>');
    console.log(winfo);
  })
  .catch(function(error) {
    console.log(error);
  })
}
$(document).ready(function() {
  //Pause/Play funtion of Background
  $( "#pause" ).click(function() {
    if ($( "#pause img" ).attr("src") == "../IMG/pause.png") {
      $( "#pause img" ).attr("src", "../IMG/play.png");
      $( "#vid" ).get(0).play();
    }
    else {
      $( "#pause img" ).attr("src", "../IMG/pause.png");
      $( "#vid" ).get(0).pause();
    }
    });

  var Locate = function() {
    //Search Value
    var area = $( "#PSearch" ).val();
    $( "#place" ).text(area);

    //NY API Variables
    var nykey = "2952870462684dddb171a8612421ed0d";
    var nyurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+area+"&limit=5&api-key="+nykey;

    //timezonedb Variables
    tkey = "1ZLA5MG2G78R";
    turl = "http://api.timezonedb.com/v2.1/get-time-zone";

    //Weather key
    wkey = "d74895cbc352ffdb395938590bc15b01";
    wurl = "http://api.openweathermap.org/data/2.5/weather";
    //Resets Fields
    $("#theeinfoarea").html("");
    $("#localtime").text("");

    //Calls Geocode function
    geocode();
    //NY Request
    $.ajax({
      url: nyurl,
      method: 'GET',
    })
    .done(function(result){
      $("#theeinfoarea").html('<h1>Local News</h1>');
      var articles = result.response.docs;
      for (var i = 0; i < articles.length && i < 5; i++) {
        var article = articles[i];
        $("#theeinfoarea").append('<h2>'+'<a target="_blank" href="'+article.web_url+'">'+ article.headline.main +'</a>'+'</h2>'+'<p>' + article.snippet + '</p>');
        console.log(article.headline.main);
      }
    })
    .fail(function(err) {
      throw err;
    });
  }

    //If hit Enter, Do:
    $( "#PSearch" ).keypress(function(e) {
      if(e.keyCode===13) {
        Locate();
      }
    });

    //If Search button clicked, Do;
    $( "#Search" ).on("click",function() {
      Locate();
  });
});
