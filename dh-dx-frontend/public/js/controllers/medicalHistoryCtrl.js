app.controller('medicalHistoryCtrl', function ($rootScope, $scope, dataService, $state,$mdDialog) {
    // $scope.user = null;
    // $scope.goTo = function(state){
    //     $state.go(state)
    // }
    // $scope.users =[]
    //
    // dataService.getUsers().then(function(response){
    //     console.log(response)
    //     $scope.users = response
    //     $scope.user = $scope.users[0]
    // })
    // $scope.getUserInitials = function(){
    //     let user = $scope.users[$scope.userIndex]
    //     return user.first_name[0] + user.last_name[0];
    // }
    // $scope.showUserPopup = function(ev){
    //     $mdDialog.show({
    //     controller: function(scope, $mdDialog){
    //         scope.users = $scope.users;
    //         scope.userIndex = $scope.userIndex;
    //         scope.onchange = function(){$mdDialog.hide(scope.userIndex);}
    //     },
    //     templateUrl: '/templates/selectUserPopup.html',
    //     parent: angular.element(document.body),
    //     targetEvent: ev,
    //     clickOutsideToClose:true,
    //     fullscreen: false // Only for -xs, -sm breakpoints.
    //     })
    //     .then(function(answer) {
    //         $scope.userIndex = answer;
    //         console.log(answer);
    //     });
    // }
    //
    // $scope.userIndex = 0;
    // $scope.$watch('userIndex',function () {
    //     if($scope.userIndex) {
    //         $scope.user = $scope.users[$scope.userIndex]
    //         console.log($scope.user)
    //     }
    // })


    $scope.mode = 'all';
    $scope.history = [];
    $scope.leftArray = [];
    $scope.rightArray = [];

    $scope.$watch('user', function () {
        dataService.getMedicalHistory($rootScope.user.id).then(function (response) {
            $scope.history = response;
            sortHist()
        });

    })

    dataService.getDrugs().then(function (response) {
            $scope.drugs = response;
        });

    function sortHist() {
        $scope.leftArray = [];
        $scope.rightArray = [];

        for (var i = 0; i < $scope.history.length; i++) {
            if (i % 2 == 0) {
                $scope.leftArray.push($scope.history[i])
            } else {
                $scope.rightArray.push($scope.history[i])
            }
        }
    }


    $scope.myFilter = function (item) {
        if ($scope.mode == 'yellow' && item.type == 'Vaccination') {
            return true
        }
        if ($scope.mode == 'red' && item.type == 'Desease') {
            return true
        }
        if ($scope.mode == 'all') {
            return true
        }
        return false
    };

    $scope.showDrugPopup = function (ev) {
        $mdDialog.show({
            controller: function (scope, $mdDialog) {
                scope.drugs = $scope.drugs;
                scope.userIndex = $scope.userIndex;
                scope.onchange = function () {
                    console.log(scope.userIndex)
                    $mdDialog.hide(scope.userIndex);
                }
            },
            templateUrl: '/templates/selectIllPopup.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false // Only for -xs, -sm breakpoints.
        })
            .then(function (answer) {
                $scope.userIndex = answer;
                console.log(answer);
            });
    }
    $scope.showTextPopup = function (ev) {
        $mdDialog.show({
            controller: function (scope, $mdDialog) {
                scope.response = $scope.response;

            },
            templateUrl: '/templates/selectTextPopup.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false // Only for -xs, -sm breakpoints.
        })
            .then(function (answer) {
                console.log(answer);
            });
    }
    $scope.userIndex = 0
    $scope.$watch('userIndex',function () {
        dataService.addIllness($scope.drugs[$scope.userIndex].id,$rootScope.user.id).then(function(response ) {
                $scope.response = response
                $scope.showTextPopup()
            }
        )
    })
// $scope.leftArray = [{title:'Passout'},{title:'Koma'}]
// $scope.rightArray = [{title:'Passout'},{title:'Koma'},{title:'Passout'},{title:'Koma'},{title:'Passout'},{title:'Koma'},{title:'Passout'},{title:'Koma'}]

});