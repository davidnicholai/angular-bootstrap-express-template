(function() {

var app = angular.module('angularBootstrapExpressTemplate', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutController',
            controllerAs: 'vm'
        })
        ;

    $locationProvider.html5Mode(true);
})

.controller('MainController', function () {

})

.controller('HeaderController', function () {
    var vm = this;
})

.controller('HomeController', function () {
    var vm = this;
})

.controller('AboutController', function () {
    var vm = this;

    // Load your functions to `vm` so that about.html can use it
    vm.loadText = loadText;

    // A pretty useless function, but should help you understand
    // how to execute functions from the view (about.html)
    function loadText() {
        vm.aboutTitle = 'About';
        vm.aboutDesc = 'This is the about page.';
    }

})

})();
