<%-- 
    Document   : perfil2.jsp
    Created on : Oct 8, 2021, 7:00:29 PM
    Author     : jack
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap"
            rel="stylesheet"
            />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/nav.css">
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <title>Document</title>
        <style>
            :root {
                --white: #ffffff;
                --black: #000000;
                --dark: #232830;
                --very-light-pink: #c7c7c7;
                --text-input-field: #f7f7f7;
                --hospital-green: #acd9b2;
                --sm: 14px;
                --md: 16px;
                --lg: 18px;
            }
            body {
                margin: 0;
                font-family: "Quicksand", sans-serif;
            }


            .login {
                width: 100%;
                padding-top: 20px;
                /*height: 100vh;*/
                display: grid;
                place-items: center;

            }
            .form-container {

                justify-self: center;
                display: grid;
                border-radius: 20px;
                grid-template-rows: auto 1fr auto;
                width:400px;
                background-color: lightsteelblue;
                justify-items: center;

            }

            .title {
                margin-top: 10px;
                margin-left: 20px;
                font-size: 20px;
                margin-bottom: 12px;
                text-align: left;
                font-weight: bold;
            }

            .email-image {

                width: 152px;
                height: 152px;
                border-radius: 10%;
                background-color: var(--text-input-field);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 24px;
            }
            .email-image img {
                width: 136px;
            }
            .subtitle {


                color: var(--black);
                font-size: var(--lg);
                font-weight: bold;
                margin-top: 0;
                margin-bottom: 32px;
                text-align: center;
            }


            .form {
                display: flex;
                flex-direction: column;


            }
            .label {
                justify-self: left;
                text-align: left;
                margin-left: 44px;
                font-size: var(--sm);
                font-weight: bold;
                margin-bottom: 4px;

            }
            .input {

                width: 80%;
                background-color: var(--text-input-field);
                border: none;
                border-radius: 8px;
                height: 32px;
                font-size: var(--md);
                padding: 8px;
                margin-bottom: 12px;

            }
            .primary-button {

                background-color: #09beaf;
                border-radius: 8px;
                border: none;
                color: var(--white);
                width: 80%;
                ;
                cursor: pointer;
                font-size: var(--md);
                font-weight: bold;
                height: 52px;
            }
            .login-button {
                margin-top: 12px;
                margin-bottom: 32px;
            }
            @media (max-width: 640px) {
                .logo{
                    display: block;
                }
            }
        </style>
    </head>

    <body style="background-image: url('assets/index/background_profile.jpeg');">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #3cb9aa;">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="assets/logo2.png".class="img-fluid" width="258px" height="48px" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.jsp">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="perfil.jsp">Mi perfil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Agenda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="listener.jsp">Listar Medicos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact_us.jsp">Contáctanos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><img src="assets/pngegg.png".class="img-fluid" width="40px" height="40px" alt="" ></a>
                        </li>
                    </ul>
                    <!--
                       <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    -->

                </div>
            </div>
        </nav>
        <div class="login">
            <div class="form-container">


                <h1 class="title">Mi Perfil</h1>
                <div class="email-image">
                    <img src="./assets/noimage.png" alt="email" />
                </div
                <form action="" class="form">
                    <p class="subtitle">Informacion de la Cuenta</p>
                    <label for="password" class="label">Primer nombre</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Primer Nombre"
                        class="input input-password"
                        />

                    <label for="new-password" class="label">Segundo Nombre</label>
                    <input
                        type="text"
                        id="segndo-nombre"
                        placeholder="Segundo Nombre"
                        class="input input-password"
                        />
                    <label for="password" class="label">Primer Apellido</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="Primer Nombre"
                        class="input input-password"
                        />
                    <label for="password" class="label">Segundo Apellido</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="Primer Nombre"
                        class="input input-password"
                        />

                    <label for="password" class="label">Firma</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="Primer Nombre"
                        class="input input-password"
                        />

                    <label for="password" class="label">ID Medico</label>
                    <input
                        type="number"
                        id="password"
                        placeholder="Id medico"
                        class="input input-password"
                        />


                    <input
                        type="submit"
                        value="Actualizar Datos"
                        class="primary-button login-button"
                        />
                </form>
            </div>
        </div>
        <script>
            var app = angular.module('ConsultorioApp', []);
            app.controller('medicosController', ['$http', controladorMedico]);

            function controladorMedico($http) {
                var mc = this;
                mc.eliminarMedico = function () {
                    var params = {
                        proceso: "eliminarMedico",
                        idMedico: mc.idMedico
                    };
                    if (params.idMedico === '' || params.idMedico === undefined) {
                        Swal.fire('Ups!', 'Por favor coloca el identificador del médico!', 'error');
                    } else {
                        Swal.fire({
                            title: 'Estás seguro?',
                            text: "Eliminarás tu cuenta!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Sí, quiero eliminarla'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                $http({
                                    method: 'POST',
                                    url: 'peticiones.jsp',
                                    params: params
                                }).then(function (res) {
                                    if (res.data.ok === true) {
                                        if (res.data[params.proceso] === true) {
                                            Swal.fire('Lo sentimos!', 'Tu cuenta ha sido eliminada, serás dirigido al loggin!', 'error');
                                            setTimeout(function () {
                                                location.href = 'index.jsp';
                                            }, 3000);
                                        } else {
                                            Swal.fire('Ups!', 'No se ha podido eliminar tu cuenta. ' + res.data.registro + '!', 'warning');
                                        }
                                    } else {
                                        Swal.fire('Ups!', res.data.errorMsg, 'warning');
                                    }
                                    mc.idMedico = '';
                                });
                            }
                        });
                    }
                };

                mc.actualizarMedico = function () {
                    var params = {
                        proceso: "actualizarMedico",
                        idMedico: mc.idMedico,
                        primerNombre: mc.primerNombre,
                        segundoNombre: mc.segundoNombre,
                        primerApellido: mc.primerApellido,
                        segundoApellido: mc.segundoApellido,
                        usuario: mc.usuario,
                        contrasena: mc.contrasena,
                        firma: mc.firma
                    };
                    if (mc.idMedico === undefined || mc.primerNombre === undefined ||
                            mc.segundoNombre === undefined || mc.primerApellido === undefined ||
                            mc.segundoApellido === undefined || mc.usuario === undefined ||
                            mc.contrasena === undefined || mc.firma === undefined || mc.idMedico === '' || mc.primerNombre === '' ||
                            mc.segundoNombre === '' || mc.primerApellido === '' ||
                            mc.segundoApellido === '' || mc.usuario === '' ||
                            mc.contrasena === '' || mc.firma === '') {

                        Swal.fire('Ups!', 'Todos los campos son obligatorios!', 'error');
                    } else {
                        console.log(params);
                        $http({
                            method: 'POST',
                            url: 'peticiones.jsp',
                            params: params
                        }).then(function (res) {
                            console.log(res);
                            if (res.data.ok === true) {
                                if (res.data[params.proceso] === true) {
                                    Swal.fire('Excelente!', 'Tu perfil ha sido actualizado!', 'success');
                                } else {
                                    Swal.fire('Ups!', 'No se ha podido actualizar tu perfil. ' + res.data.registro + '!', 'error');
                                }
                            } else {
                                Swal.fire('Ups!', res.data.errorMsg, 'error');
                            }
                        });
                    }
                };
            }
            ;

        </script>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
            crossorigin="anonymous"
        ></script>
    </body>  



</html>
