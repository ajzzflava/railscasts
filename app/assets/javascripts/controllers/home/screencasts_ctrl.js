App.controller('ScreencastsCtrl', function($scope, Screencast) {
  $scope.selectedScreencast = null;
  $scope.selectedRow = null;

  $scope.screencasts = Screencast.query(function() {;
    $scope.selectedScreencast = $scope.screencasts[0];
    $scope.selectedRow = 0;
  });

  $scope.showScreencast = function(screencast, row) {
    $scope.selectedScreencast = screencast;
    return $scope.selectedRow = row;
  }
});
