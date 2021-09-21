<?php
$user = 'root';
$password = 'root';
$db = 'databasetest';
$host = 'localhost';
$port = 8889;

$link = mysqli_init();
$success = mysqli_real_connect(
   $link, 
   $host, 
   $user, 
   $password, 
   $db,
   $port
);
   if(!$success){
      echo 'Error';
   }
   if(!empty($_GET["button"])){
    $temp = $_GET["button"];
    $query = "INSERT INTO `arduino` (`Id_arduino`, `Value`) VALUES (NULL, b'$buttonState')";  
    mysql_query($query);
    }
    ?>
