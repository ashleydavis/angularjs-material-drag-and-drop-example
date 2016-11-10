
angular.module( 'YourApp', [ 'ngMaterial', 'ngMdIcons', 'drag-and-drop' ] )
    .controller("YourController", function ($scope) {

        $scope.palette = [
            {
                name: 'yo1',
            },
            {
                name: 'yo2',
            },
            {
                name: 'yo3',
            },
            {
                name: 'yo4',
            },
            {
                name: 'yo5',
            },
        ];

        $scope.dropped = [];

        var dragging = null;

        $scope.startDrag = function (item) {
            dragging = item;
        };

        $scope.handleDrop = function() {
            if (dragging) {
                $scope.dropped.push(angular.extend({}, dragging));
                dragging = null;
            }
        };   

        $scope.dropItem = function (item, index) {
            if (dragging) {
                $scope.dropped.splice(index, 0, angular.extend({}, dragging));
                dragging = null;
            }
        };  

    });

