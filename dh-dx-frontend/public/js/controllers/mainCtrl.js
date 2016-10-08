app.controller('mainCtrl',function($rootScope, $scope, dataService, $state){
    $scope.goTo = function(state){
        $state.go(state)
    }
});