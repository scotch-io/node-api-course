(function() {
  'use strict';

  var app = angular.module('contactsApp', []);

  app.controller('contactsController', function($scope, $http) {

    $http.get('http://localhost:3000/api/contacts')
      .then(function(response) {
        $scope.contacts = response.data;
      });
    
    $scope.saveContact = function() {
      $http.post('http://localhost:3000/api/contacts', $scope.contact)
        .then(function(response) {
          $scope.contacts.push(response.data);
      });
    };

  });
})();