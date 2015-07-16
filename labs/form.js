function submitForm(form) {
	var loc = form["location"].value;
	var t = form["tag"].value;
	
	var obj = {
		location: loc,
		tag: t,
		toString : function() {
			return this.location + ":" + this.tag;
		}
	};

	console.log(obj.location);
	console.log(obj.tag);
	console.log(obj.toString());
	console.log(typeof obj);
	locationStore.addLocation(obj);

}

function LocationStore() {
	var locations = new Array();
	this.addLocation = function (loc) {
		locations.push(loc);
	}
	this.printLocations = function() {
		for(var l in locations) {
			console.log(l.toString());
		}
	}
}
window.locationStore = new LocationStore();
