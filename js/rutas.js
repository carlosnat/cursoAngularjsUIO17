(function(){
    'use strict';

    angular
        .module('myApp')
        .config(myConfig);

        myConfig.$inject = ['$routeProvider'];

        function myConfig($routeProvider){
            $routeProvider
            .when('/', {
                template: '<h2>Hola clase</h2>'
            })
            .when('/segundo', {
                template: '<h2>Hola mundo</h2>'
            });
        }


}());