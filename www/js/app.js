// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])

//Crio uma constante para inserir aqui as urls utilizadas nos meus services
  .constant("apiUrl",(function() {
    var resource = 'http://www.ticarpa.com.br/demo/imoveis/';
    return {
      //Note que desta vez inseri o filtro na aplicacao
      RETORNA_IMOVEIS: resource + "api/imovels?filter=:filtro",
      RETORNA_IMOVEL: resource + "api/imovel/:id"
    }
  })())

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

    .state('app.imoveis', {
      url: '/imoveis',
      views: {
        'menuContent': {
          templateUrl: 'templates/imoveis.html',
          controller: 'ImoveisCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/imovel/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/imovel.html',
        controller: 'ImovelCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
