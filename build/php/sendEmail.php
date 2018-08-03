<?php
//3 lines of code to retrieve the form data sent via the "post" method
  $name=$_POST['name'];
  $tel=$_POST['contactNo'];
  $email=$_POST['email'];
  $comment=$_POST['message'];
  $rez='';
/*creation of the $msg variable and
supplementally adding more details to it.*/
  $msg="EMAIL SENT FROM WEBSITE:\r\n " ;
  $msg.="Senders Name: $name \r\n ";
  $msg.="Senders Phone: $contactNo \r\n ";
  $msg.="Senders E-mail: $email\r\n ";
  $msg.="Inquiery:    $message ";

  $to="gayanimaheshi@gmail.com";   //where is the email to be sent
  $subject="Inquiery ";   //what subject should the email display
  $mailheaders="From: $email\r\n";  //what email  will display for the sender



  $formsent=mail($to, $subject, $msg, $mailheaders); //send the email

  if ($formsent)
   {
    // echo "<p> From sent successfully!</p>";
    // $html=file_get_contents("./contact.html",true);
    // $a=file_get_contents("https://www.webcetb.com/gayanig/SilverStrand/contact.html");
    // echo $a;
    // echo file_get_contents('http://google.com');

     // header('Location: contact.html');
    // $html=file_get_contents("./ThankYou.html",FILE_USE_INCLUDE_PATH);

    // echo $html;




   }
   else
   {
    echo "<p> There is a problem. The form has not been sent !</p>";
   }

?>
<!DOCTYPE html>
<html>
<head>
<title>Silver Strand - Thank You</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/normalize.css" type = "text/css">
<link rel="stylesheet" href="../css/boxSizing-borderbox.css" "text/css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css?family=Buenard" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Italianno" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Vollkorn+SC" rel="stylesheet">
<link rel="stylesheet" href="../css/style.min.css" type = "text/css">
<link rel="icon" href="../images/Favicon.png" type="image/png" sizes="16x16">

</head>
<body>

  <div class="topwrapperCon">
            <header class="headclass">
                <div class="headwrap">
                    <a href="index.html"><img src= "../images/SilverStrandLogo.png" alt="SilverStrandLogo"></a>
                <div>

                <div class="topnav" id="myTopnav">
                  <a href="../index.html" class="active" id="home">HOME</a>
                  <a href="../stay.html" id="Stay">ACCOMODATION</a>
                  <a href="../dining.html" id="Dining">DINING</a>
                  <a href="../location.html" id="location">GETTING HERE</a>
                  <a href="../contact.html" id="Contact">CONTACT US</a>

                  <a id="hamburger" href="javascript:void(0);" class="icon hide">
                    <i class="fa fa-bars"></i>
                  </a>
                  <a class="bookingButton" id="accebtButton" href="contact.html">BOOK NOW</a>
                </div>
            </header>
</div><!--End of top wrapper  -->
<section class="ThankNote">
  <h1>Thank you for Emailing us, We'll get back to you shortly !</h1>
<br/><br/>
    <footer id="ThankYouFoo">
          <div class="contactDetails contactLoc">
              <p>Silver Strand Guesthouse, Sherkin Island, Dingle, Co.Cork, Ireland   |   Tel: +353 (0)28 23116 | Email: info@silverstrand.ie</p>
          </div>
         <div class="socialIcons">
           <a href=""><img class="fb" src= "../images/socialIcons/fb.png" alt="FacebookIcon"></a>
           <a href=""><img class="insta" src= "../images/socialIcons/insta.png" alt="InstagramIcon"></a>
           <a href=""><img class="twitt" src= "../images/socialIcons/twitter.png" alt="TwitterIcon"></a>
           <a href=""><img class="email" src= "../images/socialIcons/email.png" alt="emailIcon"></a>
          </div>
          <div id="ThankYouFooter" class="copyright">&copy; 2018 Silver Strand Guesthouse. GG web design - All right reserved.</div>
      </footer>
</section>

  <!-- ***************************************************** -->
<script src ="../js/script.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAP2sP0vwlIRtqlvKjcqTv13J910szbYG8&callback=myMap"></script>
<button onclick="topFunction()" id="myBtn" title="Go to top">^</button>
</body>

</html>
