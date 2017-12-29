(function (){
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.inject = ['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.addItem = ShoppingListCheckOffService.addInitialItem("Chips",10);
  toBuy.addItem = ShoppingListCheckOffService.addInitialItem("Cookies",20);
  toBuy.addItem = ShoppingListCheckOffService.addInitialItem("Veggies",30);

  toBuy.getItems = function(){
    toBuy.error = ShoppingListCheckOffService.checkSize(1);
    return ShoppingListCheckOffService.getItems(1);
  }

  toBuy.moveItem = function(itemIndex, qty, name){
    ShoppingListCheckOffService.moveItem(itemIndex, qty, name);
    ShoppingListCheckOffService.addItem(itemIndex, qty, name);
  }

}

AlreadyBoughtController.inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;

  alreadyBought.getItems = function(){
    alreadyBought.error = ShoppingListCheckOffService.checkSize(2);
    return ShoppingListCheckOffService.getItems(2);
  }
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyitems = [];
  var boughtitems = [];

  service.addInitialItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyitems.push(item);
  };

  service.addItem = function (index, qty, Name) {
    var item = {
      name: Name,
      quantity: qty
    };
    boughtitems.push(item);
  };

  service.getItems = function (typ){
    if (typ==1){
    return toBuyitems;
  }else{
    return boughtitems;
  }
  };

  service.checkSize = function(typ){
    if (typ==1){
    return toBuyitems.length;
  }else{
    return boughtitems.length;
  }
  };


 service.moveItem = function(index, qty, name){
toBuyitems.splice(index,1);
 }

}


})();
