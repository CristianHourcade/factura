<?php
session_start();
?>
<!DOCTYPE html>
<html>
   <head>
      <input type="hidden" id="usuario" value="<?php echo @$_SESSION["cl_email"]?>">
      <title>Factura Up - Facturacion electronica</title>
      <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" type="text/css" href="css/bootstrap-reboot.css">
      <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="css/bootstrap-grid.css">
      <link rel="stylesheet" type="text/css" href="css/custom.css">
      <script type="text/javascript" src="js/bootstrap.min.js"></script>
      <script type="text/javascript" src="jslogin/functions.js"></script>
      <script type="text/javascript" src="js/jquery-3.2.0.min.js"></script>
      <script type="text/javascript" src="js/jquery.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      <script type="text/javascript" src="js/funciones.js"></script>
   </head>
   <body>
      <div class="container-fluid"> <!-- boby wrapper -->
      <div class="row">
         <nav class="navbar navbar-toggleable-md navbar-light fixed-top main-navbar">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="envolto-logo ml-5">
               <a class="navbar-brand" href="index.html">
                  <img src="images/logo2.png" class="mx-auto d-block img-fluid">
               </a>
            </div>
            <div class="collapse navbar-collapse my-auto align-self-start mr-2 justify-content-end" id="navbar-links">
               <ul class="navbar-nav">
                  <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
                  <li class="nav-item"><a class="nav-link" href="#services" data-ancla="services">Características</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">¿Cómo Funciona?</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Planes</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
                  <button class="btn btn-primary btn-nuevo-clientes ml-3" type="button">Registrarse</button>
                  <button class="btn btn-primary btn-log-clientes ml-3" type="button">Ingresar</button>
                  <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-user fa-fw"></i><?php echo @$_SESSION["cl_email"]?></a></li>
                  <li class="nav-item"><a class="nav-link btn-salir" href="#">Salir</a></li>
               </ul>
            </div>
         </nav>
      </div>
      
    
         
         <!-- secciones  -->
         <section class="recuperarc">
            
 <input type="text"  class="form-control"  id="email" name="email"  placeholder="escriba email" required="required"/>
     

   
        <button type="button" id="recuperarcontra" class="btn btn-primary btn-block btn-large bot">recuperar</button>


         </section>
                 
             
            
             <div id="modal-adm" class="modal fade" role="dialog"></div>
            <div id="modal-log" class="modal fade" role="dialog"></div>
            <div id="modal-advertencia" class="modal fade" role="dialog"></div>
         </body>
      </html>