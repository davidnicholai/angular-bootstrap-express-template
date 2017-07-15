(function() {
    'use strict';

    angular
        .module('app.home', ['ui.router'])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService'];

    function HomeController(UserService) {
        var vm = this;
    }

})();
