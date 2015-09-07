(function(){

    'use strict';

    angular.module('restApp').factory('rest', ['$http','$location','$route',

        function($http, $location, $route) {
            var serviceBase = 'http://server/';
            var obj = {};

            obj.getRegisters = function(){
                return $http.get(serviceBase + 'registers');
            };

            obj.createRegister = function (register) {
                return $http.post(serviceBase + 'registers', register)
                    .then(successHandler)
                    .catch(errorHandler);
                function successHandler(result) {
                    $location.path('/register/index');
                }
                function errorHandler(result){
                    alert("Error data");
                    $location.path('/register/create')
                }
            };
            obj.getRegister = function(registerID){
                return $http.get(serviceBase + 'registers/' + registerID);
            };

            obj.updateRegister = function (register) {
                return $http.put(serviceBase + 'registers/' + register.id, register )
                    .then( successHandler )
                    .catch( errorHandler );
                function successHandler() {
                    $location.path('/register/index');
                }
                function errorHandler(){
                    alert("Error data");
                    $location.path('/register/update/' + register.id)
                }
            };
            obj.deleteRegister = function (registerID) {
                return $http.delete(serviceBase + 'registers/' + registerID)
                    .then( successHandler )
                    .catch( errorHandler );
                function successHandler( result ) {
                    $route.reload();
                }
                function errorHandler( result ){
                    alert("Error data");
                    $route.reload();
                }
            };
            return obj;
        }]);
})();