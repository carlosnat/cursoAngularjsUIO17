(function(){
    'use strict';

    angular
        .module('segundo', [])

        .config(myConfig);
        
                myConfig.$inject = ['$routeProvider'];
        
                function myConfig($routeProvider){
                    $routeProvider
                    .when('/segundo/:parametro', {
                        templateUrl: 'js/segundo/segundo.html',
                        controller: 'segundoController',
                        controllerAs: 'segundo'
                    });
                }

}());