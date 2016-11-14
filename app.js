
angular.module( 'YourApp', [ 'ngMaterial', 'ngMdIcons', 'as.sortable', ] )
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

        $scope.sortableOptions = {
            containment: '#sortable-container',
            allowDuplicates: true,
            longTouch: true,
        };

        $scope.sortableCloneOptions = {
            containment: '#sortable-container',
            clone: true,
            longTouch: true,
        };        

    });

