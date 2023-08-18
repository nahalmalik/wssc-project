<?php
header ('Content-Type: application/json');
header ('Acess-Control-Allow-Origin: *');
header ('Access-Control-Allow-Methods: POST');
header ('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include('../links/conn.php');
$data = json_decode(file_get_contents ("php://input"), true);
// $file=$_FILES['img'];
$addres=$data['addres'];
$detale=$data['detal'];
$filename=$_FILES['img']['name'];
$filepath=$_FILES['img']['tmp_name'];
$fileerror=$_FILES['img']['error'];
if($fileerror==0){
$destfile = "../assets/img/".$filename;
move_uploaded_file($filepath,$destfile);
}
// print_r($addres);
$insert = mysqli_query($conn,"INSERT INTO `clintcomp`( `Image`, `Address`, `Detale`, `Type`) VALUES ('$filename','$addres','$detale','Drainage')");
if ($insert){
    echo json_encode(array('message' => 'Student Record Inserted.', 'status' => true));
}else{
    echo json_encode(array('message' => 'Student Record Not Inserted.', 'status' => false));
}


?>