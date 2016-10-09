app.controller('medicalHistoryCtrl',function($rootScope, $scope, dataService, $state){

$scope.mode = 'all';
    $scope.history = [];

    dataService.getMedicalHistory($rootScope.userId).then(function (response) {
       $scope.history = response.data;
        for(var i = 0; i <$scope.history.length; i+2) {
            $scope.leftArray.push($scope.history[i])
            if(i%2==0){
                $scope.rightArray.push($scope.history[i-1])
            }
        }
    });

// $scope.leftArray = [{title:'Passout'},{title:'Koma'}]
// $scope.rightArray = [{title:'Passout'},{title:'Koma'},{title:'Passout'},{title:'Koma'},{title:'Passout'},{title:'Koma'},{title:'Passout'},{title:'Koma'}]

});