angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Listing an array of sidebar items
  $scope.contentItems = [
    {
      title: 'Boss Of My Brain',
      id: 1,
      content: "Smart Part, Emotional Part, Old Habit Part. Which one is in charge?" },
    {
      title: 'Belly Breathing',
      id: 2,
      content: "Hand on stomach, Hand on chest. Which one is moving?" },
    {
      title: 'Five Second Lightswitch',
      id: 3,
      content: "Old thought? I have a new action. By the count of five, I get to my new action" },
    {
      title: 'Positive Thoughts',
      id: 4,
      content: "Is it Powerful? Productive? Positive" },
    {
      title: 'Positive Words',
      id: 5,
      content: "Is it Powerful? Productive? Positive" },
    {
      title: 'Positive Actions',
      id: 6,
      content: "Is it Powerful? Productive? Positive" },
    {
      title: 'Claim Responsibility',
      id: 7,
      content: "I own today. I ask myself, \"Am I proud of this Choice?\"" },
    {
      title: 'Let Go',
      id: 8,
      content: "hand / squash / toss" },
    {
      title: 'For-give',
      id: 9,
      content: "For me to give I must be safe from harm." },
    {
      title: 'What If',
      id: 10,
      content: "What if I am not my past?" },
    {
      title: 'Reality Check',
      id: 11,
      content: "Ten steps forward and two steps back is still eight steps ahead." },
    {
      title: 'Ultimate Freedom',
      id: 12,
      content: "Being free is up to me." }
  ];

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
})

.controller('ToolCtrl', function($scope, $stateParams) {
  $scope.tool = getByID($scope.contentItems, parseInt($stateParams.toolId));

  function getByID(arr, id){
    for (var d = 0, len = arr.length; d < len; d += 1) {
      if (arr[d].id === id){
        return arr[d];
      }
    }
  }
})

.controller('SummaryCtrl', function($scope, $stateParams) {
  $scope.toolSummaries = [
    { summary: [
        { title: 'BOSS OF MY BRAIN', id: 1, urlId: 1 },
        { title: 'BELLY BREATHING', id: 2, urlId: 2 },
        { title: 'FIVE SECOND LIGHTSWITCH', id: 3, urlId: 3 },
        { title: 'POSITIVE THOUGHTS', id: 4, urlId: 4 }
      ], id: 1 },
    { summary: [
        { title: 'FOR--GIVE', id: 1, urlId: 9 },
        { title: 'WHAT IF', id: 2, urlId: 10 },
        { title: 'REALITY CHECK', id: 3, urlId: 11 },
        { title: 'ULTIMATE FREEDOM', id: 4, urlId: 12 }
    ], id: 2 }
  ];
  $scope.summary = getByID($scope.toolSummaries, parseInt($stateParams.summaryId));
    function getByID(arr, id){
      for (var d = 0, len = arr.length; d < len; d += 1) {
        if (arr[d].id === id){
          return arr[d].summary;
        }
      }
    }
});
