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


  // at the bottom of your controller
  //Check what the featured page should be
    $scope.getFeatured = function ()
    {
        //Get the current week
        var currentWeek = moment().isoWeek();
        //Get Starting date of this week
        var startOfWeek = moment().startOf('isoWeek');
        //Get our pervious month
        //Number of GOGI Tools
        var numTools = 12;


        //If it is a normal year
        //organize the weeks with modulo of gogi tools
        if(currentWeek % numTools == 1)
        {
            //Boss of my brain
            $location.path("app/tool/" + 1);
        }
        else if(currentWeek % numTools == 2)
        {
            //Belly Breathing
            $location.path("app/tool/" + 2);
        }
        else if(currentWeek % numTools == 3)
        {
            //Five Second Lightswitch
            $location.path("app/tool/" + 3);
        }
        else if(currentWeek % numTools == 4)
        {
            //Postive thoughts
            $location.path("app/tool/" + 4);
        }
        else if(currentWeek % numTools == 5)
        {
            //We need to check if the week is a 5th week of the month
            //We check if the start of this weeks month is january, April, July or October
            if(startofWeek.month()  == 0 || startofWeek.month() == 3
            startofWeek.month()  == 6 || startofWeek.month() == 9)
            {
                //If it is, then review
                $location.path("app/summary/" + 1);
            }
            else
            {
                //Else, Positive Words
                $location.path("app/tool/" + 5);
            }
        }
        else if(currentWeek % numTools == 6)
        {
            //Positive Actions
            $location.path("app/tool/" + 6);
        }
        else if(currentWeek % numTools == 7)
        {
            //Claim Responsibility
            $location.path("app/tool/" + 7);
        }
        else if(currentWeek % numTools == 8)
        {
            //Let Go
            $location.path("app/tool/" + 8);
        }
        else if(currentWeek % numTools == 9)
        {
            //For--Give
            $location.path("app/tool/" + 9);
        }
        else if(currentWeek % numTools == 10)
        {
            //What IF
            $location.path("app/tool/" + 10);
        }
        else if(currentWeek % numTools == 11)
        {
            //Reality Check
            $location.path("app/tool/" + 11);
        }
        //Else it is the 12th week zero
        else
        {
            //We need to check if the week is a 5th week of a month
            //We check if the start of this weeks month is March, June, September or December
            if(startofWeek.month()  == 2 || startofWeek.month() == 5
            startofWeek.month()  == 8 || startofWeek.month() == 11)
            {
                //If it is, then review
                $location.path("app/summary/" + 2);
            }
            else
            {
                //Else, Ultimate Freedom
                $location.path("app/tool/" + 12);
            }
        }
        }

    };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
