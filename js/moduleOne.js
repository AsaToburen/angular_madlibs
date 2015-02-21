

angular.module('madLibsMod', ['ngAnimate', 'ngMessages'
  ])

  .controller('mainCtrl', ['$scope', function($scope) {
    
    $scope.hide = false;

    $scope.data = {
      gender : "Female",
      genderSingular : "she",
      genderObjective : "her",
      genderPossessive : "her"
    };

    $scope.gender = function() {
      if($scope.data.genderSingular === "she") {
        $scope.data.gender = "Male";
        $scope.data.genderSingular = 'he';
        $scope.data.genderObjective = 'him';
        $scope.data.genderPossessive = 'his';
      } else {
        $scope.data.gender = "Female";
        $scope.data.genderSingular = 'she';
        $scope.data.genderObjective = 'her';
        $scope.data.genderPossessive = 'her';
      }
      };
      
    $scope.checkValid = function() {
      if($scope.myForm.$submitted && $scope.myForm.$valid && !($scope.myForm.$pristine)) {
        $scope.hide = true;
        return true;
      }
    };

   $scope.resetForm = function() {
    $scope.hide = false;
      $scope.data = {
        gender : "Female",
        genderSingular : "she",
        genderObjective : "her",
        genderPossessive : "her"
      };
      $scope.myForm.$setPristine();
    };
}]);
