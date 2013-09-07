function report(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
}

// Called when camera has a picture or video
function captureComplete(media) {
	//Titanium.Media.hideCamera();	// iOS only
	var controller = Alloy.createController("newmessagewin");
	controller.OpenMainWindow($.maptab);
	controller.SetupWindow(media);
}

function markButtonClick(evt) {
	Ti.API.info("Mark button clicked");
	
	// Create the camera overlay
	//var overlayImage = Titanium.UI.createImageView({});
	var captureButton = Titanium.UI.createButton({
		title: 'Hello',
   		top: 900,	// KGM - Don't hardcode
   		width: 400,
   		height: 100
	});
	
	var myOverlay = Titanium.UI.createView();
	myOverlay.add(captureButton);
	
	Titanium.Media.showCamera({
		// KGM - Disable overlay to speed development
		//overlay:myOverlay,
		success:captureComplete
	});
    
	
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

// Callback function that places annotations on the map
function placeAnnotation(loc, message_data) {
	
	// Image must be stored to disk before it can be used in
	// a map annotation.  For now, we'll store the images
	// in the users applicaiton cache
	var cache_dir = Titanium.Filesystem.getApplicationCacheDirectory();
	var im_file = Titanium.Filesystem.getFile('image.jpg');
	if (im_file.write(message_data.image.media) ) {
		Ti.API.info("Saved image to user cache " + im_file.nativePath);
	} else {
		Ti.API.info("Failed to save image to " + im_file.nativePath);
	}
	
	// Create a view for the annotation
	var view = Ti.UI.createView({
		width:Ti.UI.SIZE,
		height:Ti.UI.SIZE
	});
	var imgView = Ti.UI.createImageView({
		height:300,
		image:message_data.image
	});	
	view.add(imgView);
	
	// API calls to the map module need to use the Alloy.Globals.Map reference
	Ti.API.info("Placing annotation on map at: " + loc.coords.latitude + ', ' + loc.coords.longitude);
	a = Alloy.Globals.Map.createAnnotation({
    	latitude:loc.coords.latitude,
    	longitude:loc.coords.longitude,
    	//title:"New Message",
   	 	subtitle:message_data.text,
   	 	leftView:view,
    	pincolor:Alloy.Globals.Map.ANNOTATION_BLUE,
	});
	
	$.mapview.addAnnotation(a);
}

// Exported function to drop messages on the map
// media should be a Blob
function dropMessage(message_data) {
	// Get the current location, and call into the
	// map placement function when done.
	Titanium.Geolocation.getCurrentPosition(function(loc) {
		Ti.API.info("Location found.");
		placeAnnotation(loc, message_data);
	});
};

// Point the map at the users current location
Titanium.Geolocation.getCurrentPosition(function(loc) {
	Ti.API.info("Map centered on user location");
	$.mapview.region = {latitude:loc.coords.latitude, longitude:loc.coords.longitude,
					latitudeDelta:6, longitudeDelta:6,
					animate:true, regionFit:false};
});

// create event Listener to add annotation to map at given location
Ti.App.addEventListener('mapview.drop_message', function(message_data) {
	Ti.API.info("maview got event");
	dropMessage(message_data);
});


