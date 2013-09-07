function closeWin(evt) {
	$.newmessagewin.close();
}

function sendMsg(evt) {
	// User wants to send this message
	Ti.API.info("Sending message to map");
	
	// Grab the image from the imageview
	var image = $.imagePreview.getImage();
	
	$.newmessagewin.close();
	
	// Send blob to mapview via an event
	Ti.App.fireEvent('mapview.drop_message', image);
}

// Opens the camera and sets up the callback function
exports.OpenMainWindow = function(_tab) {
	// Show contact window
	_tab.open($.newmessagewin);
};

// Accepts the captured media and sets up the new message view
exports.SetupWindow = function(media) {	
	// Use the camera blob to set the image	
	Ti.API.info('Captured ' + media.mediaType + ' with error ' + media.error);
	$.imagePreview.setImage(media.media);
};


