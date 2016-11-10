//
// https://parkji.co.uk/2013/08/11/native-drag-and-drop-in-angularjs.html
//
angular.module( 'drag-and-drop', [] )
    .directive('draggable', function () {        
        return {
            scope: {
                startDrag: '&',
            },
            link: function (scope, element) {
                // this gives us the native JS object
                var el = element[0];

                el.draggable = true;

                el.addEventListener(
                    'dragstart',
                    function (e) {
                        e.dataTransfer.effectAllowed = 'move';
                        this.classList.add('drag');
                        scope.$apply('startDrag()');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragend',
                    function (e) {
                        this.classList.remove('drag');
                        return false;
                    },
                    false
                );
            }, 
        };
    })
    .directive('droppable', function () {
        return {
            scope: {
                drop: '&' // parent
            },
            link: function(scope, element) {

                // again we need the native object
                var el = element[0];

                el.addEventListener(
                    'dragover',
                    function (e) {
                        e.dataTransfer.dropEffect = 'move';
                        // allows us to drop
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                        this.classList.add('over');
                        return false;
                    },
                    false
                );      

                el.addEventListener(
                    'dragenter',
                    function (e) {
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragleave',
                    function (e) {
                        this.classList.remove('over');
                        return false;
                    },
                    false
                );           

                el.addEventListener(
                    'drop',
                    function (e) {
                             // Stops some browsers from redirecting.
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }

                        this.classList.remove('over');

                        scope.$apply('drop()');

                        return false;
                    },
                    false
                );                               
            },            
        };
    })
    ;
