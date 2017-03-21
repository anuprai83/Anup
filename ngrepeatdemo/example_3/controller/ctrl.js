(function () {
    "use strict";
    app.controller("ctrl", ctrl);
    ctrl.$inject = ["$scope"];
    function ctrl($scope) {
        $scope.data = [{ id: 1, name: 'Abhishek', age: 20 ,salary:10000 },
            { id: 2, name: 'Anup', age: 22 ,salary:250000 },
            { id: 3, name: 'Ashish', age: 24,salary:66500 },
            { id: 4, name: 'Deepak', age: 26,salary:10524 },
            { id: 5, name: 'RAjesh', age: 28,salary:1200 }
        ];
    }
})();