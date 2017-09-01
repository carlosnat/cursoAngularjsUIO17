(function(){
    'use strict';

    angular
        .module('myApp', [
            
        ])
        .controller('myCtrl', function($scope, $timeout, $q){
            $scope.msg = 'hola mundo';

            primer_paso();

            /*segundo_paso()
            .then(function(){
                tercer_paso();
            })
            .catch(function(err){
                console.log('hubo un error  ' +err);
            })
            .finally(function(callback, msg){
                console.log(msg);
            })*/

            /*segundo_paso().then(
                function(succ){
                    console.log('promse succ', succ);
                },
                function(err){
                    console.log('promise err', err);
                },
                function(final){
                    console.log('finally', final);
                }
            );*/

            
            
            function primer_paso(){
                console.log('primer paso');
            }

            function segundo_paso(){

                var promesa = $q.defer();
                
                promesa.notify('promesa calculando numero');

                $timeout(function(){
                    console.log('segundo paso');
                    var numero = obtener_numero_random();
                    console.log('numero', numero);
                    if(numero > 5)
                        promesa.resolve();
                    else
                        promesa.reject('numero menor a 5');              
                }, 2500);

                return promesa.promise;
            }

            function tercer_paso(){
                console.log('tercer paso');
            }

            function obtener_numero_random(){
                //entre 1 y 10:
                return Math.floor((Math.random() * 10) + 1);
            }

        });

}());