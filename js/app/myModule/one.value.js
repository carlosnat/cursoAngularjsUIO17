(function(){
    'use strict';

    angular
        .module('oneModule')
        .constant('API',
        {
            URL:'https://api.themoviedb.org/3/',
            KEY: '49421463b3e51d8123484c884de009e3'
        } 
            
    );

}());