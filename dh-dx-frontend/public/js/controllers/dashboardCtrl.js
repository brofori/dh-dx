app.controller('dashboardCtrl',function($rootScope, $scope, dataService, $state, moment){
$scope.startTime = moment('08-10-2016').valueOf();
$scope.endTime = $scope.startTime + 1000*60*60*24 -1;
$scope.showStats = false;
setTimeout(()=>{
    $scope.showStats = true;
    $scope.$apply();
},200)
$scope.today = moment();
$scope.color = 'green';
$scope.color2 = 'red'
$scope.color3 = 'blue'

$scope.timeSeries=[];
$scope.timeSeries2=[];
$scope.timeSeries3=[];
$scope.timeSeries4 = [];

for(let i=0; i<48; i++){
    $scope.timeSeries4.push({time:$scope.startTime + 1000*60*60*24*i/48 , v: Math.random()*100})
}
for(let i=0; i< 100; i++){
    $scope.timeSeries.push({time:$scope.startTime + 100*60*60*24*i , v: Math.random()*100})
    $scope.timeSeries2.push({time:$scope.startTime + 100*60*60*24*i, v: Math.random()*60})
    $scope.timeSeries3.push({time:$scope.startTime + 100*60*60*24*i, v: Math.abs(i-50) <20?40+Math.random()*20:Math.random()*1})
}
$scope.timesOfDay=[];
for(let i=0; i<24; i++){
    $scope.timesOfDay.push(i)
}
$scope.events= [
    {left: 57},
    {left: 107},
]

});