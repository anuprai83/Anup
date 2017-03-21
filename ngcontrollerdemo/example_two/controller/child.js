app.controller("child",child);
child.$inject["$scope"];
function child($scope){
    $scope.child="I can share my data to sub and emit to the parent ";
}