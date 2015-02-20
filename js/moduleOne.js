

angular.module('firstModule', ['ngAnimate', 'ngMessages'
  ])

  .controller('FirstCtrl', ['$scope', function($scope) {
    
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
        return true;
      }
    };

   $scope.resetForm = function() {
    $scope.hideText = true;
      $scope.data = {
        gender : "Female",
        genderSingular : "she",
        genderObjective : "her",
        genderPossessive : "her"
      };
      $scope.myForm.$setPristine();
    };
}]);
