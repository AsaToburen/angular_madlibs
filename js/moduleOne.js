

angular.module('firstModule', [
  'ngMessages'
  ])

  .controller('FirstCtrl', ['$scope', function($scope) {
    $scope.data = {
      job_title : 'job title',
      tedious_task : 'tedious task',
      dirty_task : 'dirty task',
      celebrity :  'celebrity',
      useless_skill : 'useless skill',
      obnoxious_celebrity : 'obnoxious celebrity',
      number : 'huge number',
      adjective :  'adjective',
      Name : 'Name'
    };

    
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
    $scope.submit = function() {
        // if statements to check and identify individual form values

      
    $scope.checkValid = function(reset) {
      if($scope.myForm.$submitted && $scope.myForm.$valid && !($scope.myForm.$pristine)) {
        return true;
      } else if (reset) {
        return false; 
      }
    };
      console.log($scope.myForm.$valid);
      console.log($scope.myForm.$pristine);
    };

   $scope.resetForm = function() {
      //hide textarea and show form
      // I might need to add ng-click or function on the reset button to cause ng-show/hide
        //to evaluate to true;
      $scope.data = {};
    };

}]);
