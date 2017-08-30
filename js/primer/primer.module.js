(function(){
    'use strict';

    angular
        .module('primer', [])

        .config(myConfig);
        
        myConfig.$inject = ['$routeProvider'];

        function myConfig($routeProvider){
            $routeProvider
            .when('/', {
                templateUrl: 'js/primer/primer.html',
                controller:'primerController',
                controllerAs:'primer'
            });
        }

}());