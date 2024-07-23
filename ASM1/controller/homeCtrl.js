app.controller('homeCtrl',function($scope,$http,$rootScope,$routeParams){
   
    $scope.dsTT = [];
    $http.get('http://localhost:3000/chitiet').then(
        function(res){
            $scope.dsTT = res.data;
        },
        function(res){
            alert('không tải được dữ liệu')
        }
    )
    $scope.dsSP = [];
    $http.get('http://localhost:3000/products').then(
        function(res){
            $scope.dsSP = res.data;
        },
        function(res){
            alert('không tải được zdữ liệu')
        }
    )
    $scope.limit = 6;
    $scope.page = 1;
    $scope.begin = ($scope.page-1)* $scope.limit;
    $scope.chuyenTrang = function(trang){
        $scope.page = trang;
        $scope.begin = ($scope.page-1)*$scope.limit;
    }
$scope.totalPage = function(){
    return Math.ceil($scope.dsSP.length/$scope.limit);
}
$scope.pageList = function(){
    let arr = [];
    for(let i = 1; i<=$scope.totalPage();i++){
        arr.push(i);
    }
    return arr;
}
    $scope.modal = {};
    $scope.showTinTuc = function(tt){
        $scope.modal = tt;
    }
  
    $rootScope.cart=[];
    $rootScope.addToCart = function(sp){
        inCart = false;
       $rootScope.cart.forEach( pr =>{
        if(pr.id ==sp.id){
            inCart =true;
            pr.quantity++;
        }
       });
       if(!inCart){
        sp.quantity = 1;
        $rootScope.cart.push(sp);
       }
       console.log($rootScope.cart)
       localStorage.setItem('cart',JSON.stringify($rootScope.cart));
    }
   
})