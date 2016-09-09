var myApp = {
	APIURL: "https://jsonplaceholder.typicode.com/posts"
};

angular.module("Test", [])
	.controller("TestController1", ["$scope", "$http", function(s, h){
		s.name = "Brian";
		s.objects = {};

		h.get(myApp.APIURL)
			.success(function(data){
				s.objects = data;
			})
			.error(function(err){
				console.log(err);
			});
	}])
	.controller("TestController2", ["$scope", "$http", function(s, h){
		s.surname = "ASD";
	}]);