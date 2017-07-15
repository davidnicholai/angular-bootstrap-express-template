(function() {
    'use strict';

    angular
        .module('app.main', ['ui.router'])
        .controller('MainController', MainController);

    MainController.$inject = [];

    function MainController() {
        var vm = this;
    }

})();
