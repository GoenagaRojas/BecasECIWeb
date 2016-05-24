var app = angular.module('modone', []);

app.controller('AppController', ['$scope','$http' , function($scope,$http) {
    //Variables iniciales
    
   
    $scope.mostrarSeleccionUsuario = true; 
    $scope.mostrarServiciosEstudiante = false;
    $scope.mostrarServiciosOrganizacion= false;
    $scope.mostrarServiciosCoordinador= false;
    $scope.mostrarBecasDisponiblesEstudiante= false;
    $scope.mostrarBecasDisponiblesCoordinador= false;
    $scope.mostrarRegistrarBecaCoordinador= false;
    $scope.mostrarBecaEstudiante= false;
    $scope.mostrarBecaCoordinador= false;
    $scope.mostrarOpinionesEstudiante= false;
    $scope.mostrarRegistrarOpinionEstudiante= false;
    $scope.mostrarProyectosEstudiantes= false;
    $scope.mostrarProyectosOrganizacion= false;
    $scope.mostrarProyectosOrganizacionEstudiantes= false;
    $scope.mostrarProyectoOrganizacion= false;
    $scope.mostrarProyectoEstudiantes= false;
    $scope.mostrarRegistrarProyectoOrganizacion= false;
    $scope.irASeleccionUsuario = function(){
        $scope.mostrarSeleccionUsuario = true;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
    };
    $scope.irAServiciosEstudiante = function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = true;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
    };
    $scope.irAServiciosOrganizacion = function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= true;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $scope.org=null;
        $scope.idOrgValido=false;
        $scope.validarIdOrg= function (){
            if($scope.org!==null){
                $http.get('rest/becasECI/organizacion/'+$scope.org).
                success(function (data, status, headers, config) {
                    $scope.idOrgValido=data;
                }).
                error(function (data, status, headers, config) {
                });
            }
        };
    };
    $scope.irAServiciosCoordinador = function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= true;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
    };
    $scope.irABecasDisponiblesEstudiante = function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= true;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $http.get('rest/becasECI').
        success(function (data, status, headers, config) {
            $scope.becas=data;
        }).
        error(function (data, status, headers, config) {
        });
        $scope.setBecaSeleccionada = function(idBeca){
            $scope.becaSeleccionada=idBeca;
        };
    };
    $scope.irABecasDisponiblesCoordinador= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= true;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $http.get('rest/becasECI').
        success(function (data, status, headers, config) {
            $scope.becasCoor=data;
        }).
        error(function (data, status, headers, config) {
        });
        $scope.setBecaSeleccionadaCoor = function(idBeca){
            $scope.becaSeleccionadaCoor=idBeca;
        };
    };
    $scope.irARegistrarBecaCoordinador= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= true;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $scope.estadoRegistroBeca='Incompleto';
        $scope.nombreBeca=null;
        $scope.duracionSemestres=null;
        $scope.registrarBeca=function (){
            $scope.nuevaBeca={
                id: null,
                nombre: $scope.nombreBeca,
                duracionSemestres: $scope.duracionSemestres,
                otorgadaPara: [],
                beneficios: [],
                opciones: [],
                condiciones: [],
                otorgadaA: []
            };
            $scope.nuevaBeca=JSON.stringify($scope.nuevaBeca);
            $http.post('rest/becasECI?beca='+$scope.nuevaBeca)
            .success(function (data, status, headers, config) {
                $scope.estadoRegistroBeca='Completo';
            })
            .error(function (data, status, header, config) {
            });
        };
        $scope.datosBecaValidos=function (){
            return $scope.nombreBeca!==null && $scope.duracionSemestres!==null && $scope.duracionSemestres>0 && $scope.duracionSemestres<11;
        };
    };
    $scope.irABecaEstudiante= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= true;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $scope.aplicar=false;
        $scope.estadoAplicacion="Incompleto";
        $http.get('rest/becasECI/'+$scope.becaSeleccionada).
        success(function (data, status, headers, config) {
            $scope.becaDeInteres=data;
        }).
        error(function (data, status, headers, config) {
        });
        $http.get('rest/becasECI/opinion?idBeca='+$scope.becaSeleccionada).
        success(function (data, status, headers, config) {
            $scope.opinionesDeBeca=data;
        }).
        error(function (data, status, headers, config) {
        });
        $scope.est=null;
        $scope.idValido=null;
        $scope.validarId= function (){
            if($scope.est!==null){
                $http.get('rest/becasECI/estudiante/'+$scope.est).
                success(function (data, status, headers, config) {
                    $scope.idValido=data;
                }).
                error(function (data, status, headers, config) {
                });
            }
        };
        $scope.guardarPostulacion= function (){
            $http.post('http://localhost:8084/BecasECIWeb/rest/becasECI/postulacion?idEst='+$scope.est+'&idBeca='+$scope.becaSeleccionada)
            .success(function (data, status, headers, config) {
                $scope.estadoAplicacion="Completo";
            })
            .error(function (data, status, header, config) {
            });           
        };
    };
    $scope.irABecaCoordinador= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= true;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $http.get('rest/becasECI/'+$scope.becaSeleccionadaCoor).
        success(function (data, status, headers, config) {
            $scope.becaDeInteresCoor=data;
        }).
        error(function (data, status, headers, config) {
        });
        $http.get('rest/becasECI/opinion?idBeca='+$scope.becaSeleccionadaCoor).
        success(function (data, status, headers, config) {
            $scope.opinionesDeBecaCoor=data;
        }).
        error(function (data, status, headers, config) {
        });
        $http.get('rest/becasECI/postulacion?idBeca='+$scope.becaSeleccionadaCoor).
        success(function (data, status, headers, config) {
            $scope.postulacionesDeBecaCoor=data;
        }).
        error(function (data, status, headers, config) {
        });
        $scope.condicion=null;
        $scope.opcion=null;
        $scope.beneficio=null;
        $scope.registrarCondicion=function (){
            $http.post('rest/becasECI/condicion?idBeca='+$scope.becaSeleccionadaCoor+'&condicion='+$scope.condicion)
            .success(function (data, status, headers, config) {
                $http.get('rest/becasECI/'+$scope.becaSeleccionadaCoor).
                success(function (data, status, headers, config) {
                    $scope.becaDeInteresCoor=data;
                }).
                error(function (data, status, headers, config) {
                });
            })
            .error(function (data, status, header, config) {
            });
        };
        $scope.registrarBeneficio=function (){
            $http.post('rest/becasECI/beneficio?idBeca='+$scope.becaSeleccionadaCoor+'&beneficio='+$scope.beneficio)
            .success(function (data, status, headers, config) {
                $http.get('rest/becasECI/'+$scope.becaSeleccionadaCoor).
                success(function (data, status, headers, config) {
                    $scope.becaDeInteresCoor=data;
                }).
                error(function (data, status, headers, config) {
                });
            })
            .error(function (data, status, header, config) {
            });
        };
        $scope.registrarOpcion=function (){
            $http.post('rest/becasECI/opcion?idBeca='+$scope.becaSeleccionadaCoor+'&opcion='+$scope.opcion)
            .success(function (data, status, headers, config) {
                $http.get('rest/becasECI/'+$scope.becaSeleccionadaCoor).
                success(function (data, status, headers, config) {
                    $scope.becaDeInteresCoor=data;
                }).
                error(function (data, status, headers, config) {
                });
            })
            .error(function (data, status, header, config) {
            });
        };
    };
    $scope.irAOpinionesEstudiante= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= true;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $scope.refresh=function (){
            $http.get('rest/becasECI/opiniones').
            success(function (data, status, headers, config) {
                $scope.opiniones=data;
            }).
            error(function (data, status, headers, config) {
            });
        };
        $scope.refresh();
    };
    $scope.irARegistrarOpinionEstudiante= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= true;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $scope.tituloOpinion=null;
        $scope.cuerpoOpinion=null;
        $scope.idEstOpinion=null;
        $scope.idBecaOpinion=null;
        $scope.datosOpinionValidos=false;
        $scope.validarOpinion=function (){
            $scope.datosOpinionValidos=true;
            $scope.datosOpinionValidos=$scope.datosOpinionValidos&&$scope.tituloOpinion!==null;
            $scope.datosOpinionValidos=$scope.datosOpinionValidos&&$scope.cuerpoOpinion!==null;
            $scope.validarIdBeca();
            $scope.validarIdEst();
        };
        $scope.guardarOpinion=function (){
            if($scope.datosOpinionValidos){
                $http.post('rest/becasECI/opinion?titulo='+$scope.tituloOpinion+'&cuerpo='+$scope.cuerpoOpinion+'&idEst='+$scope.idEstOpinion+'&idBeca='+$scope.idBecaOpinion)
                .success(function (data, status, headers, config) {
                    $scope.irAOpinionesEstudiante();
                })
                .error(function (data, status, header, config) {
                });
            }
        };
        $scope.validarIdBeca=function (){
            $http.get('rest/becasECI/'+$scope.idBecaOpinion).
            success(function (data, status, headers, config) {
                $scope.datosOpinionValidos=$scope.datosOpinionValidos&&(data !==null);
            }).
            error(function (data, status, headers, config) {
            });
        };
        $scope.validarIdEst= function (){
            if($scope.est!==null){
                $http.get('rest/becasECI/estudiante/'+$scope.idEstOpinion).
                success(function (data, status, headers, config) {
                    $scope.datosOpinionValidos=$scope.datosOpinionValidos&&data;
                }).
                error(function (data, status, headers, config) {
                });
            }
        };
    };
    $scope.irAProyectosEstudiantes= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= true;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $http.get('rest/becasECI/proyecto?idOrg='+$scope.organizacionSeleccionada).
        success(function (data, status, headers, config) {
            $scope.proyectosDeOrganizacion=data;
        }).
        error(function (data, status, headers, config) {
        });
        $scope.setProyectoSeleccionado = function(idProyecto){
            $scope.proyectoSeleccionado=idProyecto;
        };
    };
    $scope.irAProyectosOrganizacion= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= true;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $http.get('rest/becasECI/proyecto?idOrg='+$scope.org).
        success(function (data, status, headers, config) {
            $scope.proyectosDeOrganizacion=data;
        }).
        error(function (data, status, headers, config) {
        });
        $scope.setProyectoSeleccionadoOrg = function(idProyecto){
            $scope.proyectoSeleccionadoOrg=idProyecto;
        };
    };
    $scope.irAProyectosOrganizacionEstudiantes= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= true;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $http.get('rest/becasECI/organizaciones').
        success(function (data, status, headers, config) {
            $scope.organizaciones=data;
        }).
        error(function (data, status, headers, config) {
        });
        $scope.setOrganizacionSeleccionada = function(idOrganizacion){
            $scope.organizacionSeleccionada=idOrganizacion;
        };
    };
    $scope.irAProyectoOrganizacion= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= true;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $http.get('rest/becasECI/proyecto/'+$scope.proyectoSeleccionadoOrg).
        success(function (data, status, headers, config) {
            $scope.proyectoDeInteres=data;
        }).
        error(function (data, status, headers, config) {
        });
    };
    $scope.irAProyectoEstudiantes= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= true;
        $scope.mostrarRegistrarProyectoOrganizacion= false;
        $http.get('rest/becasECI/proyecto/'+$scope.proyectoSeleccionado).
        success(function (data, status, headers, config) {
            $scope.proyectoDeInteres=data;
        }).
        error(function (data, status, headers, config) {
        });
        $scope.validarIdPar= function (){
            if($scope.est!==null){
                $http.get('rest/becasECI/estudiante/'+$scope.est).
                success(function (data, status, headers, config) {
                    $scope.idValido=data;
                }).
                error(function (data, status, headers, config) {
                });
            }
        };
        $scope.guardarPostulacionProyecto= function (){
            $http.post('http://localhost:8084/BecasECIWeb/rest/becasECI/aplicacion?idEst='+$scope.est+'&idProyecto='+$scope.proyectoSeleccionado)
            .success(function (data, status, headers, config) {
                $http.get('rest/becasECI/proyecto/'+$scope.proyectoSeleccionado).
                success(function (data, status, headers, config) {
                    $scope.proyectoDeInteres=data;
                }).
                error(function (data, status, headers, config) {
                });
            })
            .error(function (data, status, header, config) {
            });
        };
    };
    $scope.irARegistrarProyectoOrganizacion= function(){
        $scope.mostrarSeleccionUsuario = false;
        $scope.mostrarServiciosEstudiante = false;
        $scope.mostrarServiciosOrganizacion= false;
        $scope.mostrarServiciosCoordinador= false;
        $scope.mostrarBecasDisponiblesEstudiante= false;
        $scope.mostrarBecasDisponiblesCoordinador= false;
        $scope.mostrarRegistrarBecaCoordinador= false;
        $scope.mostrarBecaEstudiante= false;
        $scope.mostrarBecaCoordinador= false;
        $scope.mostrarOpinionesEstudiante= false;
        $scope.mostrarRegistrarOpinionEstudiante= false;
        $scope.mostrarProyectosEstudiantes= false;
        $scope.mostrarProyectosOrganizacion= false;
        $scope.mostrarProyectosOrganizacionEstudiantes= false;
        $scope.mostrarProyectoOrganizacion= false;
        $scope.mostrarProyectoEstudiantes= false;
        $scope.mostrarRegistrarProyectoOrganizacion= true;
        $scope.idProyecto = null;
        $scope.nombreProyecto = null;
        $scope.fechaInicioProyecto = null;
        $scope.fechaFinProyecto = null;
        $scope.temaProyecto = null;
        $scope.objetivoProyecto = null;
        $scope.datosValidos=false;
        $scope.estadoRegistro='Incompleto';
        $scope.datosProyectoValidos = function (){
            $scope.datosValidos=true;
            $scope.datosValidos=$scope.datosValidos && $scope.nombreProyecto !== null;
            $scope.datosValidos=$scope.datosValidos && $scope.fechaInicioProyecto !== null && $scope.fechaFinProyecto !== null;
            $scope.datosValidos=$scope.datosValidos && $scope.temaProyecto !== null;
            $scope.datosValidos=$scope.datosValidos && $scope.objetivoProyecto !== null;
            if($scope.datosValidos){
                $scope.nuevoProyecto={
                    codigo: null,
                    nombre: $scope.nombreProyecto,
                    fechaInicio: $scope.fechaInicioProyecto,
                    fechaFin: $scope.fechaFinProyecto,
                    tema: $scope.temaProyecto,
                    areaDeConocimiento: [],
                    objetivo: $scope.objetivoProyecto,
                    participan: []
                };
                $scope.nuevoProyecto=JSON.stringify($scope.nuevoProyecto);
            }
        };
        $scope.guardarProyecto = function(){
            $http.post('rest/becasECI/proyecto?newP='+$scope.nuevoProyecto+'&idOrg='+$scope.org)
            .success(function (data, status, headers, config) {
                $scope.estadoRegistro='Completo';
                $scope.idProyecto = null;
                $scope.nombreProyecto = null;
                $scope.fechaInicioProyecto = null;
                $scope.fechaFinProyecto = null;
                $scope.temaProyecto = null;
                $scope.objetivoProyecto = null;
                $scope.datosValidos=false;
            })
            .error(function (data, status, header, config) {
            });
        };
    };
}]);