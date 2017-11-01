var app = angular.module('meanApp', ['ui.router']);
app.config(function ($stateProvider,$urlRouterProvider) {
    // $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/dashboard')
    $stateProvider
        .state('dashboard',{
            url: '/dashboard',
            templateUrl: "views/dashboard.html",
            controller:"getPicsFromGoogle"
        })
        .state('imagesList',{
            url: '/imagesList',
            templateUrl: "views/imagesList.html",
            controller:'getPicsFromDb'
        })


});
