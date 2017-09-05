(function(){
    'use strict';

    angular
        .module('oneModule')
        .factory('oneService', oneService)

        oneService.$inject = ['$http', 'API'];
    /** @ngInject */
    function oneService($http, API){

        var base_url = API.url;

        return {
            getWeather: getWeather
        }

        function getWeather(){
            var url = base_url + 'discover/movie';
            var config = {
                params: {api_key: API.key}
            };
            return $http.get(url, config);
        }

    }

}());