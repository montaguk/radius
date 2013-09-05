function report(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
}

function markButtonClick(evt) {
	Ti.API.info("Mark button clicked");
	
    var controller = Alloy.createController("newmessagewin");
    controller.OpenMainWindow($.maptab);
    

	
	//Titanium.Geolocation.getCurrentPosition(function(loc) {
	
	//alert('Dropping a message at ' + loc.coords.latitude + ', ' + loc.coords.longitude);
	// Get message info
	// To
	// Message
	
	//$.messageDialog.show();
	
	
	// // Android specific...
	// annotation = Alloy.Globals.Map.createAnnotation({
		// latitude:loc.coords.latitude,
		// longitude:loc.coords.longitude,
		// title:"Test",
		// subtitle:"Message",
		// pincolor:Alloy.Globals.Map.ANNOTATION_BLUE,
		// myid:2
	// });
// 	
	// $.mapview.addAnnotation(annotation);
	
//});
	// Get location data
	// Show message dialog box
	// Add annotation/pin to map
}

// API calls to the map module need to use the Alloy.Globals.Map reference
var mountainView = Alloy.Globals.Map.createAnnotation({
    latitude:37.390749,
    longitude:-122.081651,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:Alloy.Globals.Map.ANNOTATION_RED,
    myid:1 // Custom property to uniquely identify this annotation.
});

// TODO - Replace starting region with users current location
// Point the map at the users current location
Titanium.Geolocation.getCurrentPosition(function(loc) {
	$.mapview.region = {latitude:loc.coords.latitude, longitude:loc.coords.longitude,
					latitudeDelta:6, longitudeDelta:6,
					animate:true, regionFit:false};
});
                    

$.mapview.addAnnotation(mountainView);