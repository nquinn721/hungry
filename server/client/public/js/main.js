var app = angular.module('app', []);

app.controller('main', ['$http', function ($http) {
    var self = this;

    console.log('getting data');
    $http.get('/users').then(function (data) {
        console.log(data.data);
        self.users = data.data;
    });
}]);