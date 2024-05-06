var app = angular.module('rootModule',[]);

app.service('ShoppingListCheckoffService', function() {
    var service = this;

    var toBuyItems = [
        {name: 'coockies', quantity: 10},
        {name: 'apples', quantity: 5},
        {name: 'milk', quantity: 2},
        {name: 'bread', quantity: 1},
        {name: 'eggs', quantity: 12},
    ];
    var boughtItems = [];
    
    service.getToBuyItems = function() {
        return toBuyItems;
    };

    service.getBoughtItems = function() {
        return boughtItems;
    };

    service.buyItem = function(index) {
        var item = toBuyItems[index];
        toBuyItems.splice(index, 1);
        boughtItems.push(item);
    };

});

app.controller('toBuyController', ['$scope', 'ShoppingListCheckoffService', function($scope, ShoppingListCheckoffService) {
    $scope.toBuyItems = ShoppingListCheckoffService.getToBuyItems();

    $scope.buyItem = function(index) {
        ShoppingListCheckoffService.buyItem(index);
    };
}]);

app.controller('alreadyBoughtController', ['$scope', 'ShoppingListCheckoffService', function($scope, ShoppingListCheckoffService) {
    $scope.boughtItems = ShoppingListCheckoffService.getBoughtItems();
}]);

app.controller('helloController', ['$scope', function($scope) {
    $scope.message = 'Hello World';
}]);
