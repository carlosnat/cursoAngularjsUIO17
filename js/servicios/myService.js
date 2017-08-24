(function(){
    'use strict';

    angular
        .module('servicios')
        .factory('myService', myService)

    /** @ngInject */
    function myService(){

        var refresco = [
            {id:2 , name:'carlos'},
            {id:3 , name:'pepe'}
        ];

        function remove(obj){
            console.log(obj);
            var indice = refresco.indexOf(obj);
            refresco.splice(indice, 1);
            console.log('refresco', refresco);
        }

        return {
            msg: refresco,
            remove: remove
        }

    }

}());