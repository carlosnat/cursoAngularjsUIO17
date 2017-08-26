(function(){
    'use strict';

    angular
        .module('servicios')
        .factory('myService', myService)

        myService.$inject = ['myProvider'];
    /** @ngInject */
    function myService(myProvider){

        console.log('providerInService', myProvider);

        var usuarios = myProvider.usersApp;

        function remove(obj){
            console.log(obj);
            var indice = usuarios.indexOf(obj);
            usuarios.splice(indice, 1);
            console.log('usuarios', usuarios);
        }

        return {
            usuarios: usuarios,
            remove: remove
        }

    }

}());