
// for the Google map ###########################
window.myMap=function () {
var mapOptions = {
    center: new google.maps.LatLng(51.4660543, -9.417561699999965),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// console.log('from script');
}
// ##############################################



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

}); //end
