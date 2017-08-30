(function(){
    'use strict';

    angular
        .module('segundo')
        .controller('segundoController', segundoController)

        segundoController.$inject = ['$routeParams'];
    /** @ngInject */
    function segundoController($routeParams){
        var segundo = this;

        console.log('parametros', $routeParams);

        segundo.msg = "Hola segundo controlador => " + $routeParams.parametro;
        
        init();

        function init(){
        }

    }

}());