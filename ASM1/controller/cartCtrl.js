app.controller('cartCtrl',function($scope,$rootScope,$location,$http){
    // $rootScope.tongTien = function(){
    //     return $rootScope.cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
    // }
    $rootScope.tongTien = function(){
       let tong=0;
       if($rootScope.cart){
        $rootScope.cart.forEach(sp=>{
            tong+= sp.price*sp.quantity;
       });
       }
       return tong;
    }
    $scope.xoa = function(index){
       $rootScope.cart.splice(index,1);
       $scope.saveCart();
    }
    $scope.xoahet = function(){
        $rootScope.cart = [];
        $scope.saveCart();
    }
   $scope.saveCart = function(){
    localStorage.setItem('cart',JSON.stringify($rootScope.cart));
   }
   $scope.dsDH = [];
   $http.get('http://localhost:3000/orders').then(
        function(res){
            $scope.dsDH = res.data;
        },
        function(res){
            alert('không tải được dữ liệu')
        }
    )
   $scope.checkout = function(){
    $http.post('http://localhost:3000/orders',{
        name: $scope.name,
        idUser:"-1",
        phone: $scope.phone,
        address:$scope.address,
        products: $scope.cart,
        total: $scope.tongTien(),
        date: new Date().toLocaleString('sv-SE'),
        status:"order",
    }).then(
        function(res){
            $scope.xoahet();
            document.querySelector('.btn-close').click();
            alert('Đặt hàng thành công');
            $location.path('/');
        }
    )
   }
})