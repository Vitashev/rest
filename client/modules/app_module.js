(function(){

    'use strict';

    angular.module('restApp', ['ngRoute', 'ngSanitize', 'restApp.map'])

    .config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {


    $routeProvider
        .when('/site/index', {
            templateUrl: 'views/site/index.html'
        })
        .when('/register/register', {
            templateUrl: 'views/register/index.html'
        })
        .when('/site/about', {
            templateUrl: 'views/site/about.html'
        })
        .when('/site/contact', {
            templateUrl: 'views/site/contact.html'
        })
        .when('/register/index', {
            templateUrl: 'views/register/index.html',
            controller: 'index'
        })
        .when('/register/create', {
            templateUrl: 'views/register/create.html',
            controller: 'create',
            resolve: {
                register: function(rest){
                    return rest.getRegisters();
                }
            }
        })
        .when('/register/update/:registerId', {
            templateUrl: 'views/register/update.html',
            controller: 'update',
            resolve: {
                register: function(rest, $route){
                    var registerId = $route.current.params.registerId;
                    return rest.getRegister(registerId);
                }
            }
        })
        .when('/register/delete/:registerId', {
            templateUrl: 'views/register/index.html',
            controller: 'delete'
        })
        .otherwise({
            redirectTo: '/site/index'
        });

        $locationProvider.html5Mode(true).hashPrefix('!');
}]);

})();
