(function() {

	function BeatlesController() {
		var vm = this;
		vm.bandMembers = ["John", "Paul", "George", "Ringo"];
	}

	angular
		.module("app")
		.controller("BeatlesController", BeatlesController);
})();