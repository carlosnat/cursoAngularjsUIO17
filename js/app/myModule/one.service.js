(function(){
    'use strict';

    angular
        .module('oneModule')
        .factory('oneService', oneService)

        oneService.$inject = ['$http'];
    /** @ngInject */
    function oneService($http){

        //console.log('$http', $http);

        return {
            getPosts: getPosts,
            newPost: newPost
        }

        function getPosts(){
            var promise = $http({
                method:'GET',
                url:'https://jsonplaceholder.typicode.com/posts'
            })
            .then(function(respuesta){
                console.log('toda la respuesta', respuesta);
                console.log('respuesta data', respuesta.data);
                console.log('respuesta status', respuesta.status);
                //return modelUser.armarUrlavatar(respuesta.data);
                return respuesta;
            });

            return promise;
        }

        function newPost(){
            return $http({
                method:'POST',
                url:'https://jsonplaceholder.typicode.com/posts',
                data:{name:'carlos'}
            });
        }

    }

}());