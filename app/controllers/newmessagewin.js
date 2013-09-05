function closeWin(evt) {
	$.newmessagewin.close();
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


