var app = angular.module('myapp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:"view/home.html",
        controller:"homeCtrl"
    })
    .when('/chitiet/:id',{
        templateUrl:"view/chitiet.html",
        controller:"chitietCtrl",
        
    })
    .when('/cart',{
        templateUrl:"view/cart.html",
        controller:"cartCtrl"
    })
    .when('/login',{
        templateUrl:"view/login.html",
        controller:"loginCtrl"
    })
    .when('/register',{
        templateUrl:"view/register.html",
        controller:"loginCtrl"
    })
    .when('/admin',{
        templateUrl:"view/admin.html",
        controller:"homeCtrl"
    })
    .when('/admin_add',{
        templateUrl:"view/admin_add.html",
        controller:"loginCtrl"
    })
    .when('/aboutus',{
        templateUrl:"view/aboutus.html",
        
    })
    .when('/product',{
        templateUrl:"view/product.html",
        controller:"homeCtrl"
    })
    .when('/donhang',{
        templateUrl:"view/donhang.html",
        controller:"cartCtrl"
    })
    .otherwise({
        template:"khong thay trang"
    }) 
    
  
   
})