(function() {
    angular
        .module('app.services', [])
        .service('UserService', UserService)

    UserService.$inject = [];

    function UserService() {
        this.getUser = getUser;

        function getUser() {
            return 'John Doe';
        }
    }

})();
