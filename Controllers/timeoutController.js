(function() {

	function TimeoutController($timeout) {
		const vm = this;
		$timeout(function() {
			vm.message = "Hey!! This is a timeout function!";
		}, 3000);
	}

	TimeoutController.$inject = ["$timeout"];

	angular
		.module("app")
		.controller("TimeoutController", TimeoutController);
})();