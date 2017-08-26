(function(){
    'use strict';

    angular
        .module('controladores')
        .controller('myController', myController)

        myController.$inject = ['myService']
    /** @ngInject */
    function myController(myService){
        var myCtrl = this;
        myCtrl.borrar = borrar;
        
        init();

        function init(){
            myCtrl.usuarios = myService.usuarios;
        }

        function borrar(obj){
            console.log(obj);
            myService.remove(obj);
        }

    }

}());