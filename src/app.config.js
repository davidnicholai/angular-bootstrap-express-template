(function() {
    'use strict';

    angular
        .module('app')
        .config(configure);

    configure.$inject = ['$httpProvider'];

    function configure($httpProvider) {
        $httpProvider.defaults.headers.common['Accept'] = 'application/json';
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
        console.debug('configure loaded.');
    }

})();
