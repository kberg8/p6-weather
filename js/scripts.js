// Run Foundation
$(document).foundation();

//Scripts

  $('button').on('click', function() {
  

  var zipcode = $('#getWeather').val();
  

  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      

      var temp = weather.temp;

      var city = weather.city;

      var currently = weather.currently;
      var code = '<img src=' + weather.image + '>';
      var temp = weather.temp + '&deg;' + weather.units.temp;

      var wind = weather.wind.speed + ' mph'; 
      var direction = '<i class="wi-windy"></i> ' + weather.wind.direction;

      var low = '<i class="wi-down"></i> ' + weather.low + '&deg' + weather.units.temp;
      var high = '<i class="wi-up"></i> ' + weather.high + '&deg' + weather.units.temp;

      var sunrise = '<i class="wi-horizon-alt"></i> ' + weather.sunrise;
      var sunset = '<i class="wi-horizon"></i> ' + weather.sunset; 

      var link = weather.link;

      // Output to hooks in HTML
      $('.code').html(code);
      $('.temp').html(temp);
      $('.city').html(city);
      $('.currently').html(currently);
      $('.wind').html(wind);
      $('.direction').html(direction);
      $('.low').html(low);
      $('.high').html(high);
      $('.sunrise').html(sunrise);
      $('.sunset').html(sunset);
      $('link').html(link);



      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  $('#getWeather').val('');
  
});




