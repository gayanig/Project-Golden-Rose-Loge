
var $ = require('jquery');
$(function() { //start
// ##########################################
var x = document.getElementById("myTopnav");
 x.addEventListener('click',function(){
   if (this.className === "topnav") {
       this.className += " responsive";
       // alert('responsive');
   } else {
       this.className = "topnav";
   }
 },false)

// for the Google map ###########################






}); //end
// for the Google map ###########################
window.myMap=function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(52.1394923, -10.26537570000005),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// ##############################################
