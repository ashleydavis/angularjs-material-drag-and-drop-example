
angular.module( 'YourApp', [ 'ngMaterial', 'ngMdIcons' ] )
    .controller("YourController", function ($scope, $mdSidenav) {
        $scope.yo = 'wddw!';

        $scope.closeLeftSideNav = function () {
            $mdSidenav('left').close();
        };

        $scope.toggleLeftSideNav = function () {
            $mdSidenav('left').toggle();
        };

    });

