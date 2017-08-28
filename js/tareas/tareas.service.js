(function(){
    'use strict';

    angular
        .module('tareas.module')
        .factory('tareaService', tareaService)

        tareaService.$inject = [];
    /** @ngInject */
    function tareaService(){

        var tareas = [];

        return {
            getAll: getAll,
            create: create,
            read: read,
            update: update,
            remove: remove,
            check: check
        }

        function getAll(){
            return tareas;
        }

        function create(tarea){
            tareas.unshift(tarea);
        }

        function read(tarea){
            var indice = tareas.indexOf(tarea);
            var data = tareas[indice];
            data.indice =  indice;
            return data;
        }

        function update(index, tarea){
            tareas[index] = tarea;
        }

        function remove(tarea){
            tareas.splice(tareas.indexOf(tarea), 1);
        }

        function check(tarea){
            tarea.check = !tarea.check;
        }
    }

}());