angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $location) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

    //Check what the featured page should be
    $scope.getFeatured = function ()
    {
      //$location.path("app/summary/" + 1);
      //$location.path("app/tool/" + 5);
        //Get the current week
        var currentWeek = moment().isoWeek();
        //Get Starting date of this week
        var startOfWeek = moment().startOf('isoWeek');
        //Get our pervious month
        //The Gogi Tool we are currently testing
        var currentTool = 1;

        //The current gogi tool of the month
        var monthTool = 1;

        //Loop through and simulate the tools for the year
        for(int i = 1; i < moment().isoWeek() + 1; ++i)
        {
            //Get the week
            var week = moment().isoWeek(i);

            //check if it is our current week
            if(week == currentWeek)
            {
                //Check if it is a review week
                if(montTool == 5)
                {
                        //figure out if we should go to review one or two
                        //We check if the start of this weeks month is january, April, July or October
                      if(startofWeek.month()  == 0 || startofWeek.month() == 3 ||
                      startofWeek.month()  == 6 || startofWeek.month() == 9)
                      {
                          //then it is review one
                          $location.path("app/summary/" + 1);
                      }
                      //else this weeks month is March, June, September or December
                      else
                      {
                          //it is review 2
                          $location.path("app/summary/" + 1); 
                      }
                }
                else
                {
                    //go to our tool page
                    $location.path("app/tool/" + currentTool);
                }
                //And break
                break;
            }

            //Check if the monthly tool is 4
            if(monthTool == 4)
            {
                //Check next week and see if it is a review week
                //if next week's starting date's month, is the same as this week's startin day month
                if(moment().isoWeek(i + 1).startOf('isoWeek').month() == week.startOf('isoWeek').month())
                {
                    //this is a 5th review month
                    //increase month tool but not current tool
                    ++monthTool;
                }
                //It is a new month with a new set of tools
                else
                {
                    if(currentTool >= 12)
                    {
                        currentTool = 0;
                    }
                    else
                    {
                        ++currentTool;
                    }
                    monthTool = 0;
                }
            }
            //Also need to check if it is a review week
            else if(monthTool == 5)
            {
                //reset month tool, and now increase current tool
                if(currentTool >= 12)
                {
                    currentTool = 0;
                }
                else
                {
                    ++currentTool;
                }
                monthTool = 0;
            }
            //If it is not greater than 3 or 4 then just continue like usual
            else
            {
                if(currentTool >= 12)
                {
                    currentTool = 0;
                }
                else
                {
                    ++currentTool;
                }
                ++monthTool;
            }
        }
    };

    $scope.getFeatured();

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
