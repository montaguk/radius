function closeWin(evt) {
	$.newmessagewin.close();
}

// Opens this window inside the tab that was passed
exports.OpenMainWindow = function(_tab) {
	_tab.open($.newmessagewin);
	
	// Create the camera overlay
	var overlayImage = Titanium.UI.createImageView({
    	width: 100,
    	height: 100
	});
	
	var myOverlay = Titanium.UI.createView();
	myOverlay.add(overlayImage);
	
	Titanium.Media.showCamera({
		overlay:myOverlay,
	});
};


