<?php



	include '../../class/clientes.php';
	include '../../class/conmysql.php';

/*--------- Variables --------*/

date_default_timezone_set("America/Argentina/Buenos_Aires");
$time=time();
$fecha=date("Y-m-d",$time);
$hora= date("H:i",$time);
$nombre= $_POST["nombre"];
$email=$_POST["email"];
$mensaje=$_POST["mensaje"];
/*--------------------------------.*/

  $sql="INSERT INTO consultas (con_contacto,con_mensaje,con_fechaenvio,con_horaenvio,status) VALUES ('".$nombre."','".$mensaje."','".$fecha."','".$hora."',1)";
	
$NewConnect = new Consultas();
$NewConnect->Alta($sql);

?>