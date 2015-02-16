


angular.module('firstModule', [])

  .controller('FirstCtrl', ['$scope', function($scope) {
    $scope.job_title = 'job title';
    $scope.tedious_task = 'tedious task';
    $scope.dirty_task = 'dirty task';
    $scope.celebrity =  'celebrity';
    $scope.useless_skill = 'useless skill';
    $scope.obnoxious_celebrity = 'obnoxious celebrity';
    $scope.huge_number = 'huge number';
    $scope.adjective =  'adjective';
    $scope.Name = 'Name';
    $scope.gender = function(){
      if($scope.genderSingular === 'she') {
        $scope.Name = 'Male name';
        $scope.genderSingular = 'he';
        $scope.genderObjective = 'him';
        $scope.genderPossessive = 'his';
      } else {
        $scope.Name = 'Female name';
        $scope.genderSingular = 'she';
        $scope.genderObjective = 'her';
        $scope.genderPossessive = 'her';
      }
      };
}]);
