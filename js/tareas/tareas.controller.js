(function(){
    'use strict';

    angular
        .module('tareas.module')
        .controller('tareasController', tareasController)

        tareasController.$inject = ['tareaService'];
    /** @ngInject */
    function tareasController(tareaService){
        var tareas = this;
        tareas.crearNueva = crearNueva;
        tareas.editar = editar;
        tareas.check = check;
        tareas.borrar = borrar;
        tareas.aceptarEdicion = aceptarEdicion;
        tareas.cancelarEdicion = cancelarEdicion;
     
        init();

        function init(){
            tareas.allTask = tareaService.getAll();
        }

        function crearNueva(){
            
            var data = {
                id:tareas.allTask.length, 
                descripcion: tareas.nueva, 
                check:false
            };

            tareaService.create(data);
            tareas.nueva = '';
        }

        function editar(tarea){
            tareas.editando = true;
            tareas.taskSelected = tareaService.read(tarea);
            tareas.nueva = tareas.taskSelected.descripcion;
        }

        function check(tarea){
            tareaService.check(tarea);
        }

        function borrar(tarea){
            tareaService.remove(tarea);
        }

        function aceptarEdicion(){
            tareas.taskSelected.descripcion = tareas.nueva;
            
            var data = {
                id: tareas.taskSelected.id, 
                descripcion:tareas.taskSelected.descripcion
            };
            
            tareaService.update(tareas.taskSelected.indice, data);
            cancelarEdicion();
        }

        function cancelarEdicion(){
            tareas.editando = false;
            tareas.nueva = '',
            tareas.taskSelected = null;
        }

    }

}());