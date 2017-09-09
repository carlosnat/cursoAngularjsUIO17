(function () {
    'use strict';

    angular
        .module ('app.book')
        .directive ('formPedido', formPedido);

        formPedido.$inject = [];
    /** @ngInject */
    function formPedido() {

        return {
            restrict: 'AE',
            templateUrl:'/book/formPedido/formPedido.html' 
        }
    }

} ());