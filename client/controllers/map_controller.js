(function(){

    angular.module('restApp.map').controller("MapCtrl", [ "$scope", function($scope) {
        angular.extend($scope, {
            ukraine: {
                lat: 49.58222,
                lng: 30.16845,
                zoom: 6
            }
        });
    }]);

})();
