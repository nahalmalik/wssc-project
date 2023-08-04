<?php
header ('Content-Type: application/json');
header ('Acess-Control-Allow-Origin: *');
header ('Access-Control-Allow-Methods: POST');
header ('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include('../links/conn.php');
$data = json_decode(file_get_contents ("php://input"), true);
$Img=$_FILES['img'];
print_r($Img);


?>