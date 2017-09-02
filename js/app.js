(function(){
    'use strict';

    angular
        .module('myApp', [
            
        ])
        .controller('myCtrl', function($scope, $timeout){
            $scope.msg = 'hola mundo';

            primer_paso();

            segundo_paso().then(function(res){
                tercer_paso(res);
            });
            
            function primer_paso(){
                console.log('primer paso');
            }

            function segundo_paso(){
                var promesa = new Promise(function(resolve, reject){
                    $timeout(function(){
                        console.log('segundo paso');  
                        resolve('ejecutado con exito');              
                    }, 2500);
                });
                return promesa;
            }

            function tercer_paso(res){
                console.log('tercer paso ' + res);
            }

        });

}());