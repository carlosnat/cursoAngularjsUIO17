(function(){
    'use strict';

    angular
        .module('myApp', [])
        .controller('myCtrl', function($scope, $timeout){
            $scope.msg = 'hola mundo';

            primer_paso()
            .then(function(res){
                console.log('todas resueltas', res);
            })
            .catch(function(err){
                console.log(err);
            })

            
            function primer_paso(){
                return Promise.race([segundo_paso(), tercer_paso()]);
            }

            function segundo_paso(){
                var promesa = new Promise(function(resolve, reject){

                    var numero = Math.floor((Math.random() * 2000) + 1000);

                    $timeout(function(){
                        
                        console.log('segundo paso', numero);
                        if( numero > 10)
                            resolve(numero); 
                        else
                            reject('no vale el valor');             
                    }, numero);
                });
                return promesa;
            }

            function tercer_paso(res){
                var promesa = new Promise(function(resolve, reject){
                    var numero = Math.floor((Math.random() * 2000) + 1000);
                    $timeout(function(){
                        console.log('tercer paso');  
                        resolve(5);              
                    }, numero);
                });
                return promesa;
            }

           

        });

}());