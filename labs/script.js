function doOnLoad() {
	document.getElementById("dynamicDiv").innerHTML = "Hello Dynamic Div!";
	window.divToDelete = document.getElementsByTagName("div")[0];
	console.log(divToDelete);
	//divToDelete.parentNode.removeChild(divToDelete);
	console.log("I am done with my hello world!");
}
doOnLoad();
function alertUser() {
	alert("inside click function");
}
function alertInConsole() {
	console.log("console output");
}
function doSomethingOnclick(action) {
	var innerFunction = action();
	innerFunction();
}
var alertFunction = function() {
	var count = 0;
	return function() {
		console.log("console inside nested function" + count);
		count++;
	}
};