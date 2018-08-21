




(function(){
    'use strict';
    var MyApp = angular.module('MyApp',[]);

    console.log( 'MyApp ',MyApp);
   
    MyApp.controller('ToDoCtrl',function ($scope) {
        
        // Scope variables
        $scope.total =5;

        console.log( 'scope ',$scope);    
        
    });

}());



