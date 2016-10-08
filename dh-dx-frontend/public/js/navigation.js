app.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl'
    })
    .state('main.dashboard', {
        url: 'dashboard/',
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
    })
    .state('main.insights', {
        url: 'insights/',
        templateUrl: 'templates/insights.html',
        controller: 'insightsCtrl'
    })
    .state('main.medicalHistory', {
        url: 'medical-history/',
        templateUrl: 'templates/medicalHistory.html',
        controller: 'medicalHistoryCtrl'
    })
    
  

  $urlRouterProvider.otherwise('/');
});
