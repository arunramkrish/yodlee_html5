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
			console.log(locations[l].toString());
		}
	}
}
//window.locationStore = new LocationStore();
window.locationStore = new LocalStore();

function LocalStore() {

	this.addLocation = function (loc) {
		var locations;
		if (localStorage.getItem('locations')) {
			locations = JSON.parse(localStorage.getItem('locations'));
		} else {
			locations = new Array();
		}
		locations.push(loc);
		var locationsAsString = JSON.stringify(locations);
		localStorage.setItem('locations', locationsAsString);
	}
	this.printLocations = function() {
		var output = "";
		if (window.localStorage) {
    		if ((localStorage.length) && (localStorage.getItem('locations'))) {
    			var locations = JSON.parse(localStorage.getItem('locations'));
    			for(var l in locations) {
					output += "\n" + locations[l].location + ":" + locations[l].tag;
				}

    		} else {
       			output += 'There is no data stored for this domain.';
    		}
		} else {
    		output += 'Your browser does not support local storage.'
		}
		console.log(output);
	}

}