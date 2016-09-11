var myApp = angular.module('myApp', []);
//Inside the brackets we pass the modules that our angular application is going to use.
//When using a controller, we can pass services that angular is going to pass automatly
//He is going to search services $scope and $log, and pass them as the first and second
//arguments respectibly to the function, so $scope and $log can be changed to any name.
myApp.controller('mainController', ['$scope', '$log','$timeout' function($scope, $log) {

    console.log($scope);

    //Watches the changed made to the model variable handle
    $scope.$watch('handle',function(newValue,oldValue){
            console.info('Changed!');
            console.log('Old: '+ oldValue);
            console.log('New: '+newValue);
    });

    $timeout(function(){
        $scope.handle  = 'newtwitterhandle';
        console.log('Scope  changed!');
    },3000);

}]);
