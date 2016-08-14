// app.js

angular.module('app', []).controller('MainController', ['$scope', function($scope) {
    $scope.content = {'title': 'foo'};

    $scope.month = 0;
}]);