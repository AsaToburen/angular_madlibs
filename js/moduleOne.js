

angular.module('firstModule', ['ngAnimate', 'ngMessages'
  ])

  .controller('FirstCtrl', ['$scope', function($scope) {
    
    $scope.gender = function() {
      if($scope.genderSingular === 'she') {
        $scope.data.Name = 'Male name';
        $scope.genderSingular = 'he';
        $scope.genderObjective = 'him';
        $scope.genderPossessive = 'his';
      } else {
        $scope.data.Name = 'Female name';
        $scope.genderSingular = 'she';
        $scope.genderObjective = 'her';
        $scope.genderPossessive = 'her';
      }
      };
      
    $scope.checkValid = function() {
      if($scope.myForm.$submitted && $scope.myForm.$valid && !($scope.myForm.$pristine)) {
        return true;
      }
    };

   $scope.resetForm = function() {
        $scope.data = {};
        $scope.myForm.$setPristine();
    };
}]);
