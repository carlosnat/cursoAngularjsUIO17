(function(){
    'use strict';

    angular
        .module('oneModule')
        .factory('oneService', oneService)

        oneService.$inject = ['$http'];
    /** @ngInject */
    function oneService($http){

        console.log('$http', $http);

        return {
            fn: fn
        }

        function fn(){
            
        }
    }

}());