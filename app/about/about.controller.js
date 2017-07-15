(function() {
    'use strict';

    angular
        .module('app.about', [])
        .controller('AboutController', AboutController);

    AboutController.$inject = ['UserService'];

    function AboutController(UserService) {
        var vm = this;

        // Load your functions to 'vm' so that about.view.html can use it
        vm.loadText = loadText;

        // A pretty useless functoin, but should help you understand
        // how to execute functions from the view (about.view.html)
        function loadText() {
            vm.aboutTitle = 'About';
            vm.aboutDesc = 'Hi! I\'m '
                + UserService.getUser()
                + '. This is the about page.';
        }
    }
})();