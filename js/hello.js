
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

 // Activate the drop down manu item from drop down menu on Mobile mode***********
   // var myClass = 'active';
   //
   // var ddEl = document.getElementById('hamburger');
   // var list = document.querySelectorAll("#myTopnav a");
   // for (var i = 0; i < list.length; i++) {
   //   list[i].addEventListener("click", function() {
   //     var curentclas = this.className;
   //     // alert(curentclas);
   //     var clk = document.querySelectorAll("." + myClass);
   //     for (var i = 0; i < clk.length; i++) {
   //       clk[i].className = '';
   //     }
   //    this.className = myClass;
   //     // alert( myClass);
   //   });
   // }

// for the Google map ###########################
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(52.1394923, -10.26537570000005),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// ##############################################




// ##########################################
}); //end
