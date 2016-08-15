// app.js

angular.module('app', []).controller('MainController', ['$scope', function($scope) {
    $scope.content = {'title': 'foo'};

    $scope.month = 0;

    $scope.goTop = function() {
        //window.scrollTo(0, 0);
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}]);
