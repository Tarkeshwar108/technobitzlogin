<?php
 
//Define your host here.
$HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "shricarg_technobitz";
 
//Define your database username here.
$HostUser = "shricarg_technobitz";
 
//Define your database password here.
$HostPass = "Demodone12345";

// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName );

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";
 
?>