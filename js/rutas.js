(function(){
    'use strict';

    angular
        .module('myApp')
        .config(myConfig);

        myConfig.$inject = ['$routeProvider'];

        function myConfig($routeProvider){
            $routeProvider
            .when('/', {
                templateUrl: 'js/primer/primer.html',
                controller:'primerController',
                controllerAs:'primer'
            })
            .when('/segundo', {
                templateUrl: 'js/segundo/segundo.html',
                controller: 'segundoController',
                controllerAs: 'segundo'
            })
            .otherwise('/');
        }


}());