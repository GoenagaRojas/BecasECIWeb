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
            $http.get('rest/becasECI/estudiante?idEst='+$scope.est).
            success(function (data, status, headers, config) {
                $scope.postulado=data;
            }).
            error(function (data, status, headers, config) {
            });
    
            $http.get('rest/becasECI/'+$scope.becaSeleccionada).
            success(function (data, status, headers, config) {
                $scope.becaDeInteres=data;
            }).
            error(function (data, status, headers, config) {
            });
    
            $scope.postulacion={
                id : null,
                fechaPostulacion : null,
                estado : false,
                aBeca : $scope.becaDeInteres,
                postulado : $scope.postulado
            };
            console.info($scope.postulacion);
            $http.post('http://localhost:8084/BecasECIWeb/rest/becasECI/postulacion', $scope.postulacion)
            .success(function (data, status, headers, config) {
            })
            .error(function (data, status, header, config) {
                console.info(data);
            });
            /**
            $http({
                method : 'POST',
                url: 'http://localhost:8084/BecasECIWeb/rest/becasECI/postulacion',
                data : $scope.postulacion
            }).success(function (data){
               console.log(data);
            });
            */            
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
        $http.get('rest/becasECI/opiniones').
        success(function (data, status, headers, config) {
            $scope.opiniones=data;
        }).
        error(function (data, status, headers, config) {
        });
        $scope.setOpinionSeleccionada = function(idOpinion){
            $scope.opinionSeleccionada=idOpinion;
        };
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
        $scope.setProyectoSeleccionado = function(idProyecto){
            $scope.proyectoSeleccionado=idProyecto;
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
        $http.get('rest/becasECI/proyecto/'+$scope.proyectoSeleccionado).
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
        $scope.datosProyectoValidos = function (){
            if($scope.idProyecto!==null){
                $scope.datosValidos=true;
                $http.get('rest/becasECI/proyecto/'+$scope.idProyecto).
                success(function (data, status, headers, config) {
                    $scope.proyectoDeInteres=data;
                }).
                error(function (data, status, headers, config) {
                });
                console.info($scope.datosValidos && $scope.proyectoDeInteres === null);
                $scope.datosValidos=$scope.datosValidos && $scope.proyectoDeInteres === null;
                $scope.datosValidos=$scope.datosValidos && $scope.nombreProyecto !== null;
                $scope.datosValidos=$scope.datosValidos && $scope.fechaInicioProyecto !== null && $scope.fechaFinProyecto !== null;
                $scope.datosValidos=$scope.datosValidos && $scope.temaProyecto !== null;
                $scope.datosValidos=$scope.datosValidos && $scope.objetivoProyecto !== null;
            }
        };
    };
}]);