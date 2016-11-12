// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('zing', ['ionic'])

.controller('IndexCtrl', function($scope, $ionicModal) {
  $scope.eintraege = JSON.parse(localStorage.getItem("eintraege"));

  console.log(localStorage.getItem("eintraege"))

  if (localStorage.getItem("eintraege") == null){
  $scope.eintraege = {};
  $scope.eintraege.fach = {
    mo: [],
    di: [],
    mit: [],
    do: [],
    fr: [],
};
  $scope.eintraege.hausaufgaben = {
    mo: [],
    di: [],
    mit: [],
    do: [],
    fr: [],
  };
}
  $scope.zelle = {
    tag: null,
    stunde: null,
    input: null,
  }
  $scope.zeit = new Date().toLocaleString();

  setInterval(function() {
    $scope.$apply(function() {
      $scope.zeit = new Date().toLocaleString();
    })
  }, 500);

  $scope.clicko = function(tag, stunde) {
    $scope.zelle.input_fach = $scope.eintraege.fach[tag][stunde];
    $scope.zelle.input_hausaufgaben = $scope.eintraege.hausaufgaben[tag][stunde];
    $scope.zelle.tag = tag;
    $scope.zelle.stunde = stunde;
    $scope.modal.show();


  }
  $scope.keineahnung = function(tag, stunde) {
    console.log('keineahnung:', $scope.eintraege.hausaufgaben, tag, stunde)
    $scope.ahnung = $scope.eintraege.hausaufgaben[tag][stunde];
  }
  $scope.add = function(input_fach, input_hausaufgaben) {
    console.log('add:', input_fach, input_hausaufgaben);
    $scope.eintraege.fach[$scope.zelle.tag][$scope.zelle.stunde] = input_fach;
    $scope.eintraege.hausaufgaben[$scope.zelle.tag][$scope.zelle.stunde] = input_hausaufgaben;
    $scope.modal.hide();
    localStorage.setItem('eintraege', JSON.stringify($scope.eintraege));
    if (input_hausaufgaben == 0){
      $scope.ahnung=""
    }
  }
  $ionicModal.fromTemplateUrl('templates/add.html', {
    scope: $scope,
    focusFirstInput: true
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
