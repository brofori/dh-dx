app.controller('mainCtrl',function($rootScope, $scope, dataService, $state, $mdDialog){
    $scope.goTo = function(state){
        $state.go(state)
    }

    dataService.getUsers().then(function(response){
        console.log(response)
        $scope.users = response
    })
    $scope.getUserInitials = function(){
        let user = $scope.users[$scope.userIndex]
        return user.first_name[0] + user.last_name[0];
    }
    $scope.showUserPopup = function(ev){
        $mdDialog.show({
        controller: function(scope, $mdDialog){
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
        first_name:'Tilly',
        last_name:'Rex',
    },{
        first_name:'Red',
        last_name:'Fu',
    },{
        first_name:'K',
        last_name:'Bro',
    }]
});