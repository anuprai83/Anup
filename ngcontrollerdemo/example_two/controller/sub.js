app.controller("sub",sub);
sub.$inject["$scope"];
function sub($scope)
{
    $scope.sub="I can emit my data to the parent and child";
}