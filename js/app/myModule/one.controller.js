(function(){
    'use strict';

    angular
        .module('oneModule')
        .controller('oneController', oneController)

        oneController.$inject = ['oneService'];
    /** @ngInject */
    function oneController(oneService){
        var one = this;
        one.msg = 'Hola mundo';
        
        init();

        function init(){
            // obtener todos los posts
            oneService.getPosts().then(function(res){
                console.log('respuesta en el Controlador', res);
            });

            //crear un nuevo post
            one.data = {name:'carlos'};
            oneService.newPost(one.data).then(function(res){
                console.log('respuesta crear un post', res);
            });


        }

    }

}());