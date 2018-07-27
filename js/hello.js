
// for the Google map with bouncy geotag ###########################
window.myMap=function () {
var myCenter=new google.maps.LatLng(51.4660543,-9.417561699999965);
var marker;

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:13,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("map"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

}
// window.myMap=function () {
// var mapOptions = {
//     center: new google.maps.LatLng(51.4660543, -9.417561699999965),
//     zoom: 12,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
// }

// ############# scroll to top button ##############################
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
window.topFunction = function topFunction() {
  console.log("topFunction");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// #####################################################################

// Responsive Navigation bar toggle ###################################

var $ = require('jquery');
$(function() { //start
// #####
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

//  ####### SLIDE SHOW ###############################################
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 6000);
}

// ###################################################################
