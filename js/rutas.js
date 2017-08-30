(function(){
    'use strict';

    angular
        .module('myApp')
        .config(myConfig);

        myConfig.$inject = ['$routeProvider'];

        function myConfig($routeProvider){
            $routeProvider.otherwise('/');
        }
        
}());