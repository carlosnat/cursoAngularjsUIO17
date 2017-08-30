(function(){
    'use strict';

    angular
        .module('primer')
        .controller('primerController', primerController)

    /** @ngInject */
    function primerController(){
        var primer = this;

        primer.msg = "Hola primer controlador";
        
        init();

        function init(){
        }

    }

}());