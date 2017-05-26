var app = angular.module('calcApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'static/partials/calculator.html',
        controller: 'calculatorController'
    })
})
