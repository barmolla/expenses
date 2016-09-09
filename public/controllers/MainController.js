var myApp = {
	APIURL: "https://jsonplaceholder.typicode.com/posts"
};

angular.module("Expenses", [])
	.controller("MainController", ["$scope", "$http", function(s, h){
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
