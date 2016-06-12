// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('zing', ['ionic'])

.controller('IndexCtrl', function($scope, $ionicModal) {
  $scope.eintraege = {
    mo: [],
    di: [],
    mit: [],
    do: [],
    fr: [],
  };
  $scope.fach = {
    tag:null,
    stunde:null,
    input:null,
  };
  $scope.clicko = function(tag, stunde) {
    $scope.fach.tag = tag;
    $scope.fach.stunde = stunde;
    $scope.modal.show();
  };
  $scope.zeit = new Date().toLocaleString();
  $scope.add = function(input) {
    alert("friedrich ist dumm")
   $scope.eintraege[$scope.fach.tag][$scope.fach.stunde] = input;
   $scope.modal.hide();
  }
  $ionicModal.fromTemplateUrl('templates/add.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  })
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
