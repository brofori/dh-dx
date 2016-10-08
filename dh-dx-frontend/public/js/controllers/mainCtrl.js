app.controller('mainCtrl',function($rootScope, $scope, dataService, $state, $mdDialog){
    $scope.goTo = function(state){
        $state.go(state)
    }
    $scope.getUserInitials = function(){
        let user = $scope.users[$scope.userIndex]
        return user.firstname[0] + user.lastname[0];
    }
    $scope.showUserPopup = function(ev){
        $mdDialog.show({
        controller: function(scope, $mdDialog){
            scope.username = 'sdsd'
            scope.users = $scope.users;
            scope.userIndex = $scope.userIndex;
            scope.onchange = function(){$mdDialog.hide(scope.userIndex);}
        },
        templateUrl: '/templates/selectUserPopup.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
            $scope.userIndex = answer;
            console.log(answer);
        });
    }
    $scope.userIndex = 0;

    $scope.users = [{
        firstname:'T',
        lastname:'Rex',
    },{
        firstname:'Red',
        lastname:'Fu',
    },{
        firstname:'K',
        lastname:'Bro',
    }]
});