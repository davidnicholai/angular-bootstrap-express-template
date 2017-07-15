(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'app.services',
            'app.header',
            'app.main',
            'app.home',
            'app.about'])
        .config(configure)
        .config(routes);

    configure.$inject = ['$httpProvider'];

    function configure($httpProvider) {
        $httpProvider.defaults.headers.common['Accept'] = 'application/json';
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
        console.debug('configure loaded.');
    }

    routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function routes($stateProvider, $urlRouterProvider, $locationProvider) {
        // Block of code below deals with trailing slashes in URL
        $urlRouterProvider.rule(function($injector, $location) {
            var path = $location.path();
            var hasTrailingSlash = path[path.length-1] === '/';

            if(hasTrailingSlash) {
                var newPath = path.substr(0, path.length - 1); 
                return newPath; 
            } 
        });

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.view.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.view.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            })
            ;

        $locationProvider.html5Mode(true);

        console.debug('routes loaded.');
    }

})();
