var app = angular.module('app', ['ngRoute']);
console.log("Built by Luca Junghans, sup");
app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/home', {
            templateUrl: './partials/home.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: './partials/about.html'
        })
        .when('/blog', {
            templateUrl: './partials/blog.html',
            controller : 'blogPostController'
        })
        .when('/blog/:id', {
            templateUrl: './partials/showBlog.html',
            controller: 'blogPostController'
        })
        .when('/contact', {
            templateUrl: './partials/contact.html'
        })
        .when('/create', {
            templateUrl: './partials/create.html',
            controller: 'adminController'
        })
        .when('/admin', {
            templateUrl: '/partials/admin.html',
            controller: 'loginController'
        })
        .when('/booking', {
            templateUrl: '/partials/booking.html',
            controller: 'bookingController'
        })
        .otherwise('/home', {
            redirectTo: '/home'
        });
});