(function(){
    'use strict';

    angular
        .module('myApp')
        .controller('mycontroller', mycontroller)

    /** @ngInject */
    function mycontroller(){
        var ctrl = this;
        
        init();

        function init(){
        }

    }

}());