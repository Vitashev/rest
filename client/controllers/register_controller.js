(function(){
    'use strict';
    
    angular.module('restApp').controller('index', ['$scope', '$http', 'rest',
        function($scope, $http, rest) {

            rest.getRegisters().then(function(data){
                $scope.registers = data.data;
            });

            $scope.deleteRegister = function(registerID) {
                if(confirm("Are you sure to delete register number: " + registerID) == true && registerID >0){
                    rest.deleteRegister(registerID);
                    $route.reload();
                }
            };
        }])

        .controller('create', ['$scope', '$http', 'rest',
            function($scope, $http, rest) {
                $scope.createRegister = function(register) {
                    var results = rest.createRegister(register);
                }
            }])

        .controller('update', ['$scope', '$http', '$routeParams', 'rest', '$location', 'register',
            function($scope, $http, $routeParams, rest, $location, register) {
                var original = register.data;
                $scope.register = angular.copy(original);
                $scope.isClean = function() {
                    return angular.equals(original, $scope.register);
                };
                $scope.updateRegister = function(register) {
                    var results = rest.updateRegister(register);
                }
            }]);

})();
