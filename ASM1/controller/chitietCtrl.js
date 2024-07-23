app.controller('chitietCtrl',function($scope, $routeParams, $http,$rootScope){
   $scope.tintuc = {};
   $http.get(`http://localhost:3000/chitiet/${$routeParams.id}`).then(
    function(res){
        $scope.tintuc = res.data;
        $scope.tintuc.views++;
        $http.patch(`http://localhost:3000/chitiet/${$routeParams.id}`,
        {
            views: $scope.tintuc.views
        })
    },
    function(res){
        alert('loi du lieu')
    }
   )
   $scope.Date = function(ngay){
        return new Date(ngay)
   }

    $scope.react = function(type){
        $scope.tintuc[type]++;
        $http.patch(`http://localhost:3000/chitiet/${$routeParams.id}`,
        {
            [type]: $scope.tintuc[type]
        })
    }
    $scope.dsSP = [];
    $http.get('http://localhost:3000/products').then(
        function(res){
            $scope.dsSP = res.data;
        },
        function(res){
            alert('không tải được dữ liệu')
        }
    )
    $scope.comment = function(){
        $http.post('http://localhost:3000/comments',{
            idChitiet: $routeParams.id,
            idUser: $rootScope.user.id,
            name: $rootScope.user.name,
            content: $scope.content,
            date: new Date().toLocaleString('sv-SE'), //yyyy- mm dd
            }).then(
          function(res){
            $scope.content = '';
            $scope.LoadComment();
          }
           
        )
    }
    $scope.dsBL = [];
    $scope.LoadComment = function(){
        $http.get(`http://localhost:3000/comments?idChitiet=${$routeParams.id}`).then(
            function(res){
                $scope.dsBL = res.data;
            }
        )
    }
    $scope.LoadComment();

    
})