(function(){
    'use strict';

    angular
        .module('oneModule')
        .controller('oneController', oneController)

        oneController.$inject = ['oneService'];
    /** @ngInject */
    function oneController(oneService){
        var one = this;
        one.msg = 'Hola mundo';
        
        init();

        function init(){
        }

    }

}());