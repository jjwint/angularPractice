(function() {

	function FamilyController() {
		var vm = this;
		vm.message = "Here is a list of my family members:";
		vm.familyMembers = [
			{
			name: "John",
			relation: "Dad",
			age: 53
			},
			{
			name: "Jane",
			relation: "Mom",
			age: 54
			},
			{
			name: "Sarah",
			relation: "Sister",
			age: 24
			}
		]
	}

	angular
		.module("app")
		.controller("FamilyController", FamilyController);
})();