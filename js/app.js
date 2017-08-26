(function(){
    'use strict';

    angular
        .module('myApp', [
            'controladores',
            'servicios',
            'providers',
            'constantes'
        ])
        .config(function(myProviderProvider, USUARIOS){
            console.log('provider', myProviderProvider);
             myProviderProvider.setUsersApp(USUARIOS);
        })

}());