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
$scope.color4= '#EBC812'
$scope.color5 = "#0009BB"

$scope.timeSeries=[];
$scope.timeSeries2=[];
$scope.timeSeries3=[];
$scope.timeSeries4 = [];
$scope.timeSeries5 = [];

for(let i=0; i<48; i++){
    $scope.timeSeries4.push({time:$scope.startTime + 1000*60*60*24*i/48 , v: Math.abs(i-31)<13?Math.random()*100:0})
    $scope.timeSeries5.push({time:$scope.startTime + 1000*60*60*24*i/48 , v: Math.abs(i-31)>13?Math.random()>.5?2:1:0})
}
for(let i=0; i< 30; i++){
    $scope.timeSeries.push({time:$scope.startTime + 1000*60*60*24*i/30 , v: i==0?0:80+Math.random()*20})
    $scope.timeSeries2.push({time:$scope.startTime + 1000*60*60*24*i/30, v: i==0?0:70+Math.random()*30})
    $scope.timeSeries3.push({time:$scope.startTime + 1000*60*60*24*i/30, v: Math.abs(i-70) <30?40+Math.random()*20:Math.random()*1})
}

$scope.timesOfDay=[];
for(let i=0; i<24; i++){
    $scope.timesOfDay.push(i)
}
$scope.events= [
    {left: 57},
    {left: 107},
];



//
    $scope.events = []
    dataService.getActivities('57f930bfbaa9648d75e175f5').then(function(response){
        for(let i=0; i< response.length; i++){
            let ev = response[i]
            ev.type= 'med',
            ev.icon="local_hospital"
            ev.left = Math.random()*900
            $scope.events.push(ev)
        }
    })

});