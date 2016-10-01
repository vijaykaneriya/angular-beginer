(function(){
	var app = angular.module('RepeatApp', [] );
	app.controller('RepeatCtr', function() {
		this.person = information;
	});

	var information = [
		{
			"name" : "vijay",
			"lastname" : "patel",
			"village" : "baroda",
			"classname" : "info1"
		},
		{
			"name" : "Samir",
			"lastname" : "patel",
			"village" : "Surat",
			"classname" : "info2"
		},
		{
			"name" : "Dipen",
			"lastname" : "patel",
			"village" : "Ahmedabad",
			"classname" : "info3"
		}
	]

}) ();
