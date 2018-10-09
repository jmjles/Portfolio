<?php
  if (isset($_POST['Submit'])) {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $telephone = $_POST['Telephone'];
    $about = $_POST['About'];
    $message = $_POST['Message'];

    $mailTo = "jmjles@gmail.com";
    $header = "From: ".$about;
    $txt = "Name: ".$name."./n".$email."./n".$telephone."./n/n".$message;
    mail($mailTo, $header, $txt);
    header("Location: jesusmj.com?mailsend")
  }
?>
