(function(){
    'use strict';

    angular
        .module('myApp', [
            
        ])
        .controller('myCtrl', function($scope, $timeout){
            $scope.msg = 'hola mundo';

            primer_paso();
            segundo_paso();
            tercer_paso();


            function primer_paso(){
                console.log('primer paso');
            }

            function segundo_paso(){
                $timeout(function(){
                    console.log('segundo paso');                
                }, 2500);

            }

            function tercer_paso(){
                console.log('tercer paso');
            }

        });

}());