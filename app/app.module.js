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
                templateUrl: 'views/about.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            })
            ;

        console.debug('routes loaded.');
    }

})();
