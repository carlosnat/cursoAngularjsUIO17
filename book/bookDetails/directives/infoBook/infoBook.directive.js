(function () {
    'use strict';

    angular
        .module ('app.book')
        .directive ('infoBook', infoBook);

        infoBook.$inject = [];
    /** @ngInject */
    function infoBook() {

        return {
            restrict: 'AE',
            templateUrl:'/book/bookDetails/directives/infoBook/infoBook.html' 
        }
    }

} ());