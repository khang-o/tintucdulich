app.controller('loginCtrl',function($scope,$http,$rootScope,$location,$routeParams){
    $scope.login = function(){
        $http.get(`http://localhost:3000/users?email=${$scope.email}&&password=${$scope.password}`).then(
            function(res){
                if(res.data.length==0){
                    $scope.isError =true ;
                }else{
                    var user = res.data[0];
                if (user.email == 'medium@gmail.com') { 
                    $rootScope.user = user;
                    localStorage.setItem('user', JSON.stringify($rootScope.user));
                    $location.path('/admin'); 
            } else {
                    $rootScope.user = user;
                    localStorage.setItem('user', JSON.stringify($rootScope.user));
                    $location.path('/');
            }
                }
               
            },
            function(res){

            }
        
        )}
       
        $scope.register = function(){
            $http.post('http://localhost:3000/users',{
                name: $scope.name,
                email:$scope.email,
                password:$scope.password
            }).then(
                function(res){
                    alert('Đăng ký thành công');
                    $location.path('/');
                }
            )
           }
        $scope.dsSP = [];
      
        $http.get('http://localhost:3000/products').then(
            function(res){
                $scope.dsSP = res.data;
            },
            function(res){
                alert('không tải được zdữ liệu')
            })
            $scope.addsp = function(){
                $http.post('http://localhost:3000/products',{                  
                    name: $scope.name,
                    price:$scope.price,
                    image:$scope.image
                }).then(
                    function(res){
                       
                        alert('upload thành công');
                        $location.path('/admin');
                    }
                )
               }

            //  $scope.xoaSP = function(){
            //     $http.delete(`http://localhost:3000/products/${$routeParams.id}`).then(
            //     function(res){
                   
            //         alert('xoa thanh công')
            //     },
            //     function(res){
            //         alert('loi du lieu')
            //     }
            //    )
            //  }



});