// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngAnimate','ngResource','ngSanitize'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
	if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
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

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
  	url: '/tab',
  	abstract: true,
  	templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.artists', {
  	url: '/artists',
  	views: {
  		'tab-artists': {
  			templateUrl: 'templates/tab-artists.html',
  			controller: 'ArtistsCtrl'
  		}
  	}
  })
  .state('tab.artist-detail', {
  	url: '/artists/:artistId',
  	views: {
  		'tab-artists': {
  			templateUrl: 'templates/artist-detail.html',
  			controller: 'ArtistDetailCtrl'
  		}
  	}
  })

  .state('tab.albums', {
  	url: '/albums',
  	views: {
  		'tab-albums': {
  			templateUrl: 'templates/tab-albums.html',
  			controller: 'AlbumsCtrl'
  		}
  	}
  })
  .state('tab.album-detail', {
  	url: '/albums/:albumId',
  	views: {
  		'tab-albums': {
  			templateUrl: 'templates/album-detail.html',
  			controller: 'AlbumDetailCtrl'
  		}
  	}
  })

  .state('tab.genres', {
  	url: '/genres',
  	views: {
  		'tab-genres': {
  			templateUrl: 'templates/tab-genres.html',
  			controller: 'GenresCtrl'
  		}
  	}
  })
  .state('tab.genre-detail', {
    url: '/genres/:genreId/:genreNom',
    views: {
      'tab-genres': {
        templateUrl: 'templates/genre-detail.html',
        controller: 'GenreDetailCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/artists');

})
.constant("myConfig", {


  "urlApi": "http://julien-binet.fr/music/web/api/",
  "urlWeb": "http://julien-binet.fr/music/web/uploads/"



/*

http://julien-binet.fr/music/web/api/artistes
http://dev.music.com/web/app_dev.php/api/artistes

  "urlApi": "http://julien-binet.fr/music/web/api/",
  "urlWeb": "http://julien-binet.fr/music/web/uploads/"

  "urlApi": "http://dev.music.com/web/app_dev.php/api/",
  "urlWeb": "http://dev.music.com/web/uploads/"


  */


})
.filter("nl2br", function($filter) {
 return function(data) {
   if (!data) return data;
   return data.replace(/\n\r?/g, '<br />');
 };
})

.filter("dateFR", function($filter) {

 return function(data) {
   if (!data) return data;

   result = data.split("T");

   date = result[0].split('-');



   return date[2]+"/"+date[1]+"/"+date[0];

 };


})
;
