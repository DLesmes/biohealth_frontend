<%-- 
    Document   : index
    Created on : 1/10/2021, 1:46:51 a. m.
    Author     : Nicolás Rojas
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Perfil Médico</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </head>

    <body>
        <div class="container-fluid" ng-app="ConsultorioApp" ng-controller="medicosController as mc">
            <div class="row">
                <center>
                    <br>
                    <h1> Tu Perfíl </h1>
                    <br>
                </center>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <center>
                            <img src="assets/noimage.png" width="100%">
                        </center>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Primer nombre:</label>
                                <input type="text" class="form-control" ng-model="mc.primerNombre">
                            </div>
                            <div class="col-md-6">
                                <label>Segundo nombre:</label>
                                <input type="text" class="form-control" ng-model="mc.segundoNombre">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Primer apellido:</label>
                                <input type="text" class="form-control" ng-model="mc.primerApellido">
                            </div>
                            <div class="col-md-6">
                                <label>Segundo apellido:</label>
                                <input type="text" class="form-control" ng-model="mc.segundoApellido">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Nombre de usuario:</label>
                                <input type="text" class="form-control" ng-model="mc.usuario">
                            </div>
                            <div class="col-md-6">
                                <label>Contraseña:</label>
                                <input type="password" class="form-control" ng-model="mc.contrasena">
                            </div>
                        </div>
                        <div class="row">
                            <center>
                                <div class="col-md-6">
                                    <br>
                                    <label>Firma:</label>
                                    <input type="text" class="form-control" ng-model="mc.firma">
                                </div>
                            </center>
                        </div>
                        <div class="row">
                            <center>
                                <div class="col-md-6">
                                    <br>
                                    <label>Id Médico:</label>
                                    <input type="text" class="form-control" ng-model="mc.idMedico">
                                </div>
                            </center>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <center>
                                    <br>
                                    <button type="button" class="btn btn-success" ng-click="mc.actualizarMedico()">Actualizar datos</button>
                                </center>
                            </div>
                            <div class="col-md-6">
                                <center>
                                    <br>                                    
                                    <button type="button" class="btn btn-danger" ng-click="mc.eliminarMedico()">Eliminar cuenta</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

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
                                        Swal.fire('Lo sentimos!', 'Tu cuenta ha sido eliminada!', 'error');
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

</html>
