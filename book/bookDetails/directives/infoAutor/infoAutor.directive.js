(function () {
    'use strict';

    angular
        .module ('app.book')
        .directive ('infoAutor', infoAutor);

        infoAutor.$inject = [];
    /** @ngInject */
    function infoAutor() {

        return {
            restrict: 'AE',
            templateUrl:'/book/bookDetails/directives/infoAutor/infoAutor.html' 
        }
    }

} ());