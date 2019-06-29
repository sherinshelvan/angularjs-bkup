var base_url = window.location.origin+'/';
app.controller('bodyCtrl', function($scope, $http, $rootScope, MetaService, $location) {
	var vm          = this;
});
app.controller('HomeCtrl', function($scope, $http, $rootScope, MetaService, $location) {
	$rootScope.metaservice = MetaService;
	$rootScope.metaservice.set("Home | View Points", "", "");
});

app.controller('AboutCtrl', function($scope, $http, $rootScope, MetaService, $location) {
	var vm                 = this;
	$rootScope.metaservice = MetaService;
	$rootScope.metaservice.set("About | View Points", "", "");	
	vm.pageHeadding = "About Page";
});

app.controller('GalleryCtrl', function($scope, $http, $rootScope, MetaService, $location) {
	var vm                 = this;
	$rootScope.metaservice = MetaService;
	$rootScope.metaservice.set("Gallery | View Points", "", "");
	//vm.pageHeadding = "Gallery Page";
	
	$http.get("data/gallery.json")
    .then(function(response) {
        console.log(response);
		vm.gallery=response.data;
    });
	

});

app.controller('ContactCtrl', function($scope, $http, $rootScope, MetaService, $location) {
	var vm                 = this;
	$rootScope.metaservice = MetaService;
	$rootScope.metaservice.set("Contacts | View Points", "", "");
	vm.pageHeadding = "Contact Page";
	
});


