<?php
class Demos{

	 	public function Alta($sql){
			$con = new ConnectionMySQL();
			$con->CreateConnection();
			$con->AltaSql($sql);
			$con->CloseConnection();
		}
		public function SeleccionarFechaDemo($fecha){
			$sql="SELECT * FROM demos WHERE d_fecha='".$fecha."'";
			$con = new ConnectionMySQL();
			$con->CreateConnection();
			$resultado= $con->AltaSql($sql);
			$numero_filas = $resultado->num_rows;
			return $numero_filas;

		}
		public function DescargarDemo(){
			header("Content-disposition: attachment; filename=ss.zip");
			header("Content-type: application/zip");
			readfile("ss.zip");
		}
		public function SeleccionarFechaCom($fecha){
			$sql="SELECT * FROM completos WHERE c_fecha='".$fecha."'";
			$con = new ConnectionMySQL();
			$con->CreateConnection();
			$resultado= $con->AltaSql($sql);
			$numero_filas = $resultado->num_rows;
			return $numero_filas;

		}
		public function SumarMesDemo($fecha){
			$sql="SELECT * FROM demos WHERE d_fecha LIKE '%".$fecha."'";
			$con = new ConnectionMySQL();
			$con->CreateConnection();
			$resultado= $con->AltaSql($sql);
			$numero_filas = $resultado->num_rows;
			return $numero_filas;
		}
		public function SumarMesCom($fecha){
			$sql="SELECT * FROM completos WHERE c_fecha LIKE '%".$fecha."'";
			$con = new ConnectionMySQL();
			$con->CreateConnection();
			$resultado= $con->AltaSql($sql);
			$numero_filas = $resultado->num_rows;
			return $numero_filas;
		}
		public function Contador($sql){
			$con = new ConnectionMySQL();
			$con->CreateConnection();
			$resultado = $con->AltaSql($sql);
			$numero_filas = $resultado->num_rows;
			return $numero_filas;
		}
		public function VerificarDescargas($sql){

			$con = new ConnectionMySQL();
			$con->CreateConnection();
			$res = $con->AltaSql($sql);
			$fila=mysqli_fetch_assoc($res);
			return $fila["l_descargas"];

		}
	}
	
?>