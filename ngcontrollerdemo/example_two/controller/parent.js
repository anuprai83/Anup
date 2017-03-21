app.controller("parent",parent);
parent.$inject["$scope"];
function parent ($scope) {
    $scope.parent="I can share my data to the child and sub";
}