(function(){
    'use strict';

    angular
        .module('providers')
        .provider('myProvider', function(){
            
            var usersapp;
            
            this.setUsersApp = function (value) {
                usersapp = value; 
            }
            this.$get = function () {
                
                return {
                    usersApp: usersapp
                };
            }
        });


}());