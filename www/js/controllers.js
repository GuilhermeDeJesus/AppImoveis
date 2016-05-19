angular.module('starter.controllers', [])


// controller padrao do app
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

//Controle para lista de imoveis
.controller('ImoveisCtrl', function($rootScope, $stateParams, $scope, ImoveisService) {
    //Campo de busca de imoveis
    $scope.textoBusca = "";
 
    //Realizo a limpeza do campo e busco de novo
    $scope.limparBusca = function () {
      $scope.textoBusca = "";
      $scope.imoveis = ImoveisService.query();
    }
 
    //Realizo a busca passando o texto da busca
    $scope.buscar = function () {
      $scope.imoveis = ImoveisService.query({filtro: $scope.textoBusca});
    }
 
    //Caso nao seja selecionado a busca este sera o metodo padrao de busca
    $scope.imoveis = ImoveisService.query();
})

//Controle referente ao detalhe do imovel
.controller('ImovelCtrl', function($scope, $stateParams, ImovelService) {
 
    //Metodo da busca de imovel padrao
    $scope.imovel = ImovelService.show({id: $stateParams.id});
});
 

