angular.module('hello', []).controller('home', function($http) {
	var vm = this;
	
	$http.get('/resource').then(function(response){
		vm.greeting = response.data;
	});
})