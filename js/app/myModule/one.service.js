(function(){
    'use strict';

    angular
        .module('oneModule')
        .factory('oneService', oneService)

        oneService.$inject = ['$http', 'API_URL'];
    /** @ngInject */
    function oneService($http, API_URL){

        var base_url = API_URL;

        return {
            getPosts: getPosts,
            newPost: newPost
        }

        function getPosts(){
            var url = base_url + 'comments';
            return $http.get(url);
        }

        function newPost(data){
            var url = base_url + 'comments';
            return $http.post(url, data);
        }

    }

}());