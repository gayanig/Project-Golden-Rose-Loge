// COOKIES STARTS******************

  document.addEventListener("DOMContentLoaded", function() {

    // Create cookie function
    function createCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name+"="+value+expires+"; path=/";
    }

    // Reading cookies function
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1,c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length,c.length);
            }
        }
        return null;
    }

    // Selectors
    var cookiePolicy      = document.querySelector('.cookiePolicy');
    var closeCookiePolicy = cookiePolicy.querySelector('.cookiePolicy__close');
    var hasCookie         = readCookie("visited");

    // If the 'visited' cookie isn't set, show the popunder after 2 seconds
    if (!hasCookie) {
      setTimeout(function(){
        cookiePolicy.classList.add('is-active');
      }, 2000);
    } else {
      cookiePolicy.parentNode.removeChild(cookiePolicy);
    }

    // On clicking the popunder, hide it and set the cookie so we don't show it until 365 days
    cookiePolicy.addEventListener('click', function(e){
      e.preventDefault();
      cookiePolicy.classList.remove('is-active');
      cookiePolicy.parentNode.removeChild(cookiePolicy);
      createCookie("visited", true, 365);
    });
  });


// END OF COOKIES ******************

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
