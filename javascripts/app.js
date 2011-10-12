function Randomize (a, b) {
  return Math.random() - Math.random();
}

function openTwitterLinksInNewWindow () {
  $('a[href^=http]').each(function(){
      var href = $(this).attr('href');
      if(href.match("/twitter.com/")){
          $(this).attr('target','_blank');
      }
  });
}

function rotateLogos() {
  var ruby_sponsor = {
     "blau": "www.blaumobilfunk.de"	
  }

  for (var key in ruby_sponsor)
  {
    $("#logos").append("<li class='sponsor'>Ruby Sponsor</li><li><a class='single' href='http://"+ruby_sponsor[key]+"' target='_blank'><img src='images/logos/" + key + ".png'></a></li>");	
  }

  var rails_night_sponsor = {
     "xing3": "www.xing.com"	
  }
  
  for (var key in rails_night_sponsor)
  {
    $("#logos").append("<li class='sponsor'>Rails Night Sponsor</li><li><a class='single' href='http://"+rails_night_sponsor[key]+"' target='_blank'><img src='images/logos/" + key + ".png'></a></li>");	
  }

  var sponsors = {
    //"9flats": "9flats.com",
    "akra2": "akra.de",
    "wlw2": "www.wlw.de/DE/ueber_wlw/de_DE/jobs/index.html",
    "thoughtworks": "www.thoughtworks.com"
  };
  
  var sponsors_small_pairs = [];
  sponsors_small_pairs = { 
	  "railslove_small":"railslove.com", 
	  "mm": "mindmatters.de",
	  "flinclogo": "flinc.org/de/pages/jobs"
  };
  
  var keys = [];
  for (var key in sponsors)
  {
    keys.push(key);
  }
  keys.sort(Randomize);

  if (keys.length > 0)
  {
    $("#logos").append("<li class='sponsor'>Our Sponsors & Friends</li>");  	
  }
    
  for (var i = 0; i < keys.length; i++)
  {
    $("#logos").append("<li><a class='single' href='http://"+sponsors[keys[i]]+"' target='_blank'><img src='images/logos/" + keys[i] + ".png'></a></li>");
  } 

  var keys = [];
  for (var key in sponsors_small_pairs)
  {
    keys.push(key);
  }
  keys.sort(Randomize);

  if (keys.length > 0)
  {
    $("#logos").append("<li class='sponsor'>Our Supporters & Gems</li>");  	
  }

  for (var i = 0; i < keys.length; i++)
  {
	$("#logos").append("<li><a class='small' href='http://"+sponsors_small_pairs[keys[i]]+"' target='_blank'><img src='images/logos/" + keys[i] + ".png'></a></li>")
  };

  
  
  
}
function initializeMap() {
  var latlng = new google.maps.LatLng(53.556898, 9.923186);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: 'WERKHEIM Hamburg'
  });
  var c = '<strong><a href="http://www.werkheim-hamburg.de">WERKHEIM Hamburg</a></strong><br/>Planckstraße 13, 22765 Hamburg';
  var infoWindow = new google.maps.InfoWindow({content: c});
  infoWindow.open(map, marker);
}

$(function() {
  rotateLogos();
  initializeMap();
  openTwitterLinksInNewWindow();
});
