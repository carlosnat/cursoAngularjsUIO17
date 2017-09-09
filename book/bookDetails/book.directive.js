(function () {
    'use strict';

    angular
        .module ('app.book')
        .directive ('book', book);


    /** @ngInject */
    function book() {



        return {
            restrict: 'E',
            template:"<info-book></info-book><info-autor></info-autor><form-pedido></form-pedido>"
        }
    }

} ());