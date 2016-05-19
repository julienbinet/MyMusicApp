angular.module('starter.controllers', [])

.controller('ArtistsCtrl', function ($scope, myConfig, $http, $ionicHistory) {

	$scope.loading = true;

	$ionicHistory.nextViewOptions({
		disableBack: true
	});

	$http.get(myConfig.urlApi+'artistes')
	.then(function(resp) {

		$scope.artists = resp.data.artistes;
		$scope.urlWeb = myConfig.urlWeb;

	}, function(err) {
		console.error('ERR', err);
	})
	.then(function() {
		$scope.loading = false;

	})
})
.controller('ArtistDetailCtrl', function($scope, myConfig, $http, $stateParams) {
	$scope.loading = true;
	$http.get(myConfig.urlApi+'artistes/' + $stateParams.artistId)
	.then(function(resp) {

		$scope.artist = resp.data;
		$scope.urlWeb = myConfig.urlWeb;

	}, function(err) {
		console.error('ERR', err);
	})
	.then(function() {
		$scope.loading = false;

	})
})
.controller('AlbumsCtrl', function($scope, myConfig, $http, $ionicHistory) {
	$scope.loading = true;
	$ionicHistory.nextViewOptions({
		disableBack: true
	});

	$http.get(myConfig.urlApi+'albums')
	.then(function(resp) {

		$scope.albums = resp.data.albums;
		$scope.urlWeb = myConfig.urlWeb;

	}, function(err) {
		console.error('ERR', err);
	})
	.then(function() {
		$scope.loading = false;

	})
})

.controller('AlbumDetailCtrl', function($scope, myConfig, $http, $stateParams) {
	$scope.loading = true;
	$http.get(myConfig.urlApi+'albums/' + $stateParams.albumId)
	.then(function(resp) {

		$scope.album = resp.data;
		$scope.urlWeb = myConfig.urlWeb;

	}, function(err) {
		console.error('ERR', err);
	})
	.then(function() {
		$scope.loading = false;

	})
})
.controller('GenresCtrl', function($scope, myConfig, $http, $ionicHistory) {
	$scope.loading = true;
	$ionicHistory.nextViewOptions({
		disableBack: true
	});

	$http.get(myConfig.urlApi+'tags')
	.then(function(resp) {

		$scope.genres = resp.data.tags;
		$scope.urlWeb = myConfig.urlWeb;


	}, function(err) {
		console.error('ERR', err);
	})
	.then(function() {
		$scope.loading = false;
	})
})

.controller('GenreDetailCtrl', function($scope, myConfig, $http, $stateParams) {
	$scope.loading = true;
	
	$http.get(myConfig.urlApi+'tags/' + $stateParams.genreId)
	.then(function(resp) {

		$scope.artists = resp.data;
		$scope.genre = $stateParams.genreNom;

		$scope.urlWeb = myConfig.urlWeb;

	}, function(err) {
		console.error('ERR', err);
	})
	.then(function() {
		$scope.loading = false;

	})
})


;
