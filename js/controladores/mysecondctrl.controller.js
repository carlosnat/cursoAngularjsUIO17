(function(){
    'use strict';

    angular
        .module('controladores')
        .controller('mySecondCtrl', mySecondCtrl)

        mySecondCtrl.$inject = ['myService']
    /** @ngInject */
    function mySecondCtrl(myService){
        var secondCtrl = this;
        
        init();

        function init(){
            secondCtrl.msg = myService.msg;
        }

    }

}());