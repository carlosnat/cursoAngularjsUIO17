(function(){
    'use strict';

    angular
        .module('myApp')
        .controller('segundoController', segundoController)

    /** @ngInject */
    function segundoController(){
        var segundo = this;

        segundo.msg = "Hola segundo controlador";
        
        init();

        function init(){
        }

    }

}());