<?php
  if (isset($_POST['submit'])) {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $telephone = $_POST['Telephone'];
    $about = $_POST['About'];
    $message = $_POST['Message'];

    $mailTo = "jmjles@gmail.com";
    $header = "From: ".$about;
    $txt = "Name: ".$name."./n".$email."./n".$telephone."./n/n".$message;
    mail($mailTo, $about, $txt, $header);
    header("Location: ../index.html?mailsend")
  }
?>
