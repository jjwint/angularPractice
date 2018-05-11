(function() {

	function TestController() {
		var vm = this;
		vm.message = "You just built a controller!";
		vm.sayHi = function() {
			console.log("Hi!!!!!!");
		}
	}

	angular
		.module("app")
		.controller("TestController", TestController);
})();