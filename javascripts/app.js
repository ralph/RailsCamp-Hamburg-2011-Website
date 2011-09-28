function Randomize (a, b) {
  return Math.random() - Math.random();
}
function rotateLogos() {
  var sponsors = {
    "9flats": "9flats.com",
    "akra": "akra.de",
    "railslove": "railslove.com" 
  };
  
  var keys = [];
  for (var key in sponsors)
  {
    keys.push(key);
  }
  keys.sort(Randomize);
      
  for (var i = 0; i < keys.length; i++)
  {
    $("#logos").append("<li><a href='http://"+sponsors[keys[i]]+"'><img src='images/logos/" + keys[i] + ".png'></a></li>")
  }
  
}
function initializeMap() {
  var latlng = new google.maps.LatLng(53.556898, 9.923186);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
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
});
