var f = new Date();

$(document).ready(function() {

    $(".btn-descargar-demo").on("click", function() {
        $.ajax({
            type: "POST",
            url: "scripts/verifico-descargas.php",
            data: {
                email: $("#email").val()
            },
            success: function(result) {
                alert(result);
                if (result < 3) {
                    location.href = "scripts/demo-descarga.php";

                    $.ajax({
                        type: "POST",
                        url: "admin2032/scripts/demo-store.php",
                        data: {
                            fecha: f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
                        },
                        success: function(result) {
                            alert(result)
                            location.href = "index.php";
                        }
                    });
                } else {
                    /*alert("Usted ha llegado al limite de descargas, si tiene alguna inquietud puede comunicarse con el equipo de facturaup")*/
                    $("#modal-advertencia").html("");
                    $("#modal-advertencia").html(result);
                    $("#mensaje-modal").html("Usted ha llegado al limite de descargas, si tiene alguna inquietud puede comunicarse con el equipo de facturaup.");
                    $("#modal-advertencia").modal("show");
                }

            }
        });


    });

    // ------------------------- Mini-Carrito ------------------------------------------ //

    $(".demo-button").on("click", function() {
        $.ajax({
            url: "scripts/user-online.php",
            success: function(result) {
                if (result == "error") {
                    $.ajax({
                        url: "modal/modal-warning.php",
                        success: function(result) {
                            $("#modal-advertencia").html("");
                            // $("#modal-adm").modal("hide");
                            $("#modal-advertencia").html(result);
                            $("#titulo-modal").html("Advertencia");
                            $("#mensaje-modal").html("Usted debe estar haber ingresado para poder descargar el demo o la version premium.");
                            $("#modal-advertencia").modal("show");
                        }
                    });
                    $.ajax({
                        url: "modal/modal-nuevo-clientes.php",
                        success: function(result) {
                            $("#modal-log").html(result);
                            $("#modal-log").modal("show");
                            LogeoRegistro();
                        }
                    });
                } else {
                    location.href = "mini_carrito.php";
                }
            }
        });
    });

    // --------------------------------------------------------------------------------//
    // ------------------------ Descargar Demo --------------------------------------- //

    $(".demo-btn").on("click", function() {
        $.ajax({
            url: "admin2032/scripts/ver-cuenta.php",
            success: function(result) {
                if (result == 1) {
                    $.ajax({
                        type: "POST",
                        url: "admin2032/scripts/link-store.php",
                        data: {
                            fecha: f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
                        },
                        success: function(result) {
                            $.ajax({
                                url: "admin2032/scripts/clientes-email.php",
                                success: function(result) {
                                    /*alert("Se ha enviado un correo con el link de descarga a tu E-mail registrado. Si tiene problemas para descargar contactese con ayuda al cliente");*/

                                    $.ajax({
                                        url: "modal/modal-warning.php",
                                        success: function(result) {
                                            /*alert("Se ha enviado un correo con el link de descarga a tu E-mail registrado. Si tiene problemas para descargar contactese con ayuda al cliente");*/

                                            $("#modal-advertencia").html("");
                                            $("#modal-advertencia").html(result);
                                            $("#mensaje-modal").html("Se ha enviado un correo con el link de descarga a tu E-mail registrado. Si tiene problemas para descargar contactese con ayuda al cliente.");
                                            $("#modal-advertencia").modal("show");
                                        }
                                    });

                                }
                            });

                        }
                    });
                    //Otro Ajax que se ejecuta a continuación, (no anidado).
                    $.ajax({
                        url: "admin2032/scripts/clientes-email.php",
                        success: function(result) {
                            /* alert("Se ha enviado un correo con el link de descarga a tu E-mail registrado. Si tiene problemas para descargar contactese con ayuda al cliente");*/

                            $.ajax({
                                url: "modal/modal-warning.php",
                                success: function(result) {
                                    /*alert("Se ha enviado un correo con el link de descarga a tu E-mail registrado. Si tiene problemas para descargar contactese con ayuda al cliente");*/

                                    $("#modal-advertencia").html("");
                                    $("#modal-advertencia").html(result);
                                    $("#mensaje-modal").html("Se ha enviado un correo con el link de descarga a tu E-mail registrado. Si tiene problemas para descargar contactese con ayuda al cliente.");
                                    $("#modal-advertencia").modal("show");
                                }
                            });


                        }
                    });
                } else {
                    alert(result)
                }
            }
        });



    });
    // ----------------------------------------------------------------------- //
    // -----------------------------EnviarConsultaDesdeFrontEnd---------------------------//

    $(".enviar-formulario").on("click", function() {

        if ($("#cliente").val() == "") {
            /*alert("Ingrese nombre");*/

            $.ajax({
                url: "modal/modal-warning.php",
                success: function(result) {
                    /*alert("Se ha enviado un correo con el link de descarga a tu E-mail registrado. Si tiene problemas para descargar contactese con ayuda al cliente");*/

                    $("#modal-advertencia").html("");
                    $("#modal-advertencia").html(result);
                    $("#mensaje-modal").html("Ingrese nombre.");
                    $("#modal-advertencia").modal("show");
                }
            });


        } else if ($("#info-men").val() == "") {
            /*alert("Ingrese mensaje");*/

            $.ajax({
                url: "modal/modal-warning.php",
                success: function(result) {

                    $("#modal-advertencia").html("");
                    $("#modal-advertencia").html(result);
                    $("#mensaje-modal").html("Ingrese mensaje.");
                    $("#modal-advertencia").modal("show");
                }
            });

        } else if ($("#contact").val() == "") {
            /*alert("Ingrese email");*/

            $.ajax({
                url: "modal/modal-warning.php",
                success: function(result) {

                    $("#modal-advertencia").html("");
                    $("#modal-advertencia").html(result);
                    $("#mensaje-modal").html("Ingrese email.");
                    $("#modal-advertencia").modal("show");
                }
            });
        } else {
            $.ajax({
                type: "POST",
                url: "envioconsulta.php",
                data: {
                    nombre: $("#cliente").val(),
                    mensaje: $("#info-men").val(),
                    email: $("#contact").val()
                },
                success: function() {
                    /*alert("Su consulta fue enviada a la brevedad le responderemos")*/

                    //Start Ajax
                    $.ajax({ 
                        url: "modal/modal-warning.php",
                        success: function(result) {
                            $("#modal-advertencia").html("");
                            $("#modal-advertencia").html(result);
                            $("#mensaje-modal").html("Su consulta fue enviada a la brevedad le responderemos.");
                            $("#modal-advertencia").modal("show");
                        }
                    });
                    //End Ajax
                }

            });
        }
    });



});


(function() {
    function $MPC_load() {
        window.$MPC_loaded !== true && (function() {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = document.location.protocol + "//secure.mlstatic.com/mptools/render.js";
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            window.$MPC_loaded = true;
        })();
    }
    window.$MPC_loaded !== true ? (window.attachEvent ? window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;
})();




// function LogeoRegistro(){
// $(".clientes-nuevo").on("click",function(){

// if($("#nombre").val()=="" || $("#apellido").val()=="" || $("#email").val()=="" || $("#contrasena").val()==""){
//                    $.ajax({
//                             url:"modal/modal-warning.php",
//                             success:function(result){
//                                $("#modal-advertencia").html("");

//                                 $("#modal-advertencia").html(result);
//                                 $("#titulo-modal").html("Error de registro");
//                                 $("#mensaje-modal").html("Revise que los siguientes campos se hayan completado correctamente.");
//                                 $("#modal-advertencia").modal("show");

//                             }
//                         });
//                    /* alert("Ingrese nombre");*/
//                 }
//                  else if($("#contrasena").val()!=$("#contrasena2").val()){
//                     $.ajax({
//                             url:"modal/modal-warning.php",
//                             success:function(result){
//                                 $("#modal-advertencia").html("");
//                                 $("#modal-advertencia").html(result);
//                                 $("#titulo-modal").html("Error de registro");
//                                 $("#mensaje-modal").html("Las contraseñas ingresadas son diferentes");
//                                 $("#modal-advertencia").modal("show");

//                             }
//                         });
//                 }else{
//                     $.ajax({
//                         type:"POST",
//                         url:"scripts/clientes-store.php",
//                         data:{
//                             nombre:$("#nombre").val(),
//                             telefono:$("#telefono").val(),
//                             apellido:$("#apellido").val(),
//                             email:$("#email").val(),
//                             contrasena:$("#contrasena").val()
//                         },
//                         success:function(result){

//                            if(result==0){

//                         $.ajax({
//                             url:"modal/modal-warning.php",
//                             success:function(result){
//                                $("#modal-advertencia").html("");
//                                 $("#modal-adm").modal("hide");
//                                 $("#modal-advertencia").html(result);
//                                 $("#titulo-modal").html("¡Registro exitoso!");
//                                 $("#mensaje-modal").html("Recuerde confirmar su email para poder concretar la descarga de su producto deseado.");
//                                 $("#modal-advertencia").modal("show");

//                             }
//                         });
//                             location.reload();
//                             $("#modal-adm").modal("hide");
//                             $("#modal-adm").html("");


//                            }else{
//                             alert("Este email se encuentra en nuestra base de datos.");
//                         }
//                         }

//                     });
//                 }
//             });


// }