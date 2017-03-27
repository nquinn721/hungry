var socket = io();
var app = angular.module('app', []);

app.controller('main', ['$http', '$scope', function ($http, $scope) {
    var self = this;

    console.log('getting data');
    $http.get('/users').then(function (data) {
        console.log(data.data);
        self.users = data.data;
    });

    socket.on('login', function (id) {
        console.log(id);
        var user = getUserByID(id);
        console.log(user);
        user.connected = true;

        console.log(self.users);

        $scope.$apply();

    });

    function getUserByID(id){
        for(var i = 0; i < self.users.length; i++)
            if(self.users[i].id === id)return self.users[i];
    }
}]);