'use strict';
/**
 * @file main.js
 * controller file that handles services -> model -> view control
 * @author Albert Stepanyan
 * @date 27.08.2014
 */

app.controllers.controller('MainCtrl', ['$scope', 'Request', '$log', 'Grid',
   function ($scope, Request, $log, Grid) {

   $scope.gridData = [];

   /**
    * @method getGridData
    * gets the data from Backend
    */
   $scope.getGridData = function() {
     Grid.getDataArray().then(function(data) {
       $scope.gridData = data;
       console.log(data);
     });
   };

   /**
    * @method ._init_ bootstraps controller
    */
   $scope._init_ = function() {
     $scope.getGridData();
   };

}]);