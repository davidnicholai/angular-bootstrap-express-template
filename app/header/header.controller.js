(function() {
    'use strict';
    
    angular
        .module('app.header', ['ui.router'])
        .controller('HeaderController', HeaderController);
    
    HeaderController.$inject = [];

    function HeaderController() {
        var vm = this;
    }

})();
