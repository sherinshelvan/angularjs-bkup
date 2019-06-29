var app = angular.module("app", ["ngRoute", "ngSanitize"]);

app.run(['$rootScope', '$location','$http',
function ($rootScope, $location, $http) {
    $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
        // console.log(event, next, current);
		$('.sidenav').sidenav({
		  edge: 'left',
		 // closeOnClick: true,
		});	
    });
}]);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
            controller: "HomeCtrl",
            activetab: 'home',
        })

        .when("/about", {
            templateUrl: "pages/about.html",
            controller: "AboutCtrl",
            activetab: 'about',

        })
		
        .when("/gallery", {
            templateUrl: "pages/gallery.html",
            controller: "GalleryCtrl",
            activetab: 'gallery',
        })
		
        .when("/contact", {
            templateUrl: "pages/contact.html",
            controller: "ContactCtrl",
            activetab: 'contact',
        })
		
		
		
        .when("/404", {
            templateUrl: "pages/404.html",
        })
        .otherwise({ redirectTo: '/404' });
    // $locationProvider.html5Mode(true);

});



app.service('MetaService', function() {
    var title = 'View Point';
    var metaDescription = '';
    var metaKeywords = '';
    return {
        set: function(newTitle, newMetaDescription, newKeywords) {
            metaKeywords = newKeywords;
            metaDescription = newMetaDescription;
            title = newTitle;
        },
        metaTitle: function() {
            return title;
        },
        metaDescription: function() {
            return metaDescription;
        },
        metaKeywords: function() {
            return metaKeywords;
        }
    }
});

app.factory('loginService', function($http){
    return {
        validateUser: function(email,password) {
            return true;
           //return $http.post('api/employees.php', {'type':'login_check','email':email,'password':password});
        }
    };
});

app.directive("pageLoader", ['$http', function($http) {
  return {
    template : '<div class="page-loader"></div>', //
    link: function(scope, elm, attrs) {
      scope.isLoading = function() {
        return $http.pendingRequests.length > 0;
      };
      scope.$watch(scope.isLoading, function(v) {
          if (v) {
              elm.show();
              $('body,html').stop().animate({ scrollTop: 0 }, 200);
          } else {
              elm.hide();
          }
      });
    }
  };
}]);
