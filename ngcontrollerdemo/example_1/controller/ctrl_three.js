app.controller ("ctrl_three",ctrl_three);
ctrl_three.$inject=["$scope"];
function ctrl_three($scope) {
    $scope.var_three="I am from controller three";
}