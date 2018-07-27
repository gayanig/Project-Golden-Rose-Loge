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

    $html=file_get_contents("./contact.html",FILE_USE_INCLUDE_PATH);

    echo $html;
   }
   else
   {
    echo "<p> There is a problem. The form has not been sent !</p>";
   }

?>
