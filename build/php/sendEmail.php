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

  $html=filegetcontents("contact.html");
  echo($html);

?>
