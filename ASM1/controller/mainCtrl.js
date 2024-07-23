app.controller('mainCtrl',function($scope,$rootScope,$location,){
if(localStorage.getItem('user')){
    $rootScope.user = JSON.parse(localStorage.getItem('user'));
}
 $scope.logout = function(){
    localStorage.removeItem('user');
     delete $rootScope.user ;
     $location.path('/login');
 }
 if(localStorage.getItem('cart')){
    $rootScope.cart= JSON.parse(localStorage.getItem('cart'))
}else{
    $rootScope.cart=[];
}
})
.filter('search',function(){
    return function(input,keyword,attr){
        let kq= [];
        if(keyword){
            keyword = keyword.toLowerCase();
            attr.forEach(thuoctinh =>{
               let tmp = input.filter(item=>{
                return item[thuoctinh].toString().toLowerCase().indexOf(keyword)>=0
                });
               kq.push(...tmp);
            });
        }else{ kq = input}
       
        return kq;
    }
})