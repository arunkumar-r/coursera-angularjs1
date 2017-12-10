(function (){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.lunchmenu ="";
  $scope.message = "";

  $scope.displayMessage = function (){
    var resultMsg =finalMessage($scope.lunchmenu);
    $scope.message = resultMsg;
  };

  function finalMessage(inpString){
    var itemsCount = 0;
    if (inpString ==""){
      return "Please enter data first";
    }
    var menuItems = inpString.split(",");
    if (menuItems.length > 3){
      return "Too much!";
    }else {
      return "Enjoy!";
    }
  }
}
})();
