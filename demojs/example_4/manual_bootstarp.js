var my_div = document.getElementById("my_div");
angular.element(my_div).ready(function (response) {
    angular.bootstrap(my_div, ["app"]);
});
