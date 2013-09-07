function Controller() {
    function report(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    }
    function captureComplete(media) {
        var controller = Alloy.createController("newmessagewin");
        controller.OpenMainWindow($.maptab);
        controller.SetupWindow(media);
    }
    function markButtonClick() {
        Ti.API.info("Mark button clicked");
        var captureButton = Titanium.UI.createButton({
            title: "Hello",
            top: 900,
            width: 400,
            height: 100
        });
        var myOverlay = Titanium.UI.createView();
        myOverlay.add(captureButton);
        Titanium.Media.showCamera({
            success: captureComplete
        });
    }
    function placeAnnotation(loc, message_data) {
        Titanium.Filesystem.getApplicationCacheDirectory();
        var im_file = Titanium.Filesystem.getFile("image.jpg");
        im_file.write(message_data.image.media) ? Ti.API.info("Saved image to user cache " + im_file.nativePath) : Ti.API.info("Failed to save image to " + im_file.nativePath);
        var view = Ti.UI.createView({
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE
        });
        var imgView = Ti.UI.createImageView({
            height: 300,
            image: message_data.image
        });
        view.add(imgView);
        Ti.API.info("Placing annotation on map at: " + loc.coords.latitude + ", " + loc.coords.longitude);
        a = Alloy.Globals.Map.createAnnotation({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            subtitle: message_data.text,
            leftView: view,
            pincolor: Alloy.Globals.Map.ANNOTATION_BLUE
        });
        $.mapview.addAnnotation(a);
    }
    function dropMessage(message_data) {
        Titanium.Geolocation.getCurrentPosition(function(loc) {
            Ti.API.info("Location found.");
            placeAnnotation(loc, message_data);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mapwin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mapwin = Ti.UI.createWindow({
        id: "mapwin"
    });
    $.__views.mapview = Alloy.Globals.Map.createView({
        id: "mapview",
        ns: "Alloy.Globals.Map",
        userLocation: "true"
    });
    $.__views.mapwin.add($.__views.mapview);
    report ? $.__views.mapview.on("click", report) : __defers["$.__views.mapview!click!report"] = true;
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Drop Message!",
        top: "90%",
        width: "30%",
        center: "50%",
        height: "10%"
    });
    $.__views.mapwin.add($.__views.button);
    markButtonClick ? $.__views.button.addEventListener("click", markButtonClick) : __defers["$.__views.button!click!markButtonClick"] = true;
    $.__views.maptab = Ti.UI.createTab({
        window: $.__views.mapwin,
        title: "Map",
        id: "maptab"
    });
    $.__views.maptab && $.addTopLevelView($.__views.maptab);
    $.__views.annotationView = Ti.UI.createView({
        id: "annotationView",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    $.__views.annotationView && $.addTopLevelView($.__views.annotationView);
    $.__views.annotationView.imageView = Ti.UI.createImageView({
        id: "annotationView.imageView",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    $.__views.annotationView.add($.__views.annotationView.imageView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.Geolocation.getCurrentPosition(function(loc) {
        Ti.API.info("Map centered on user location");
        $.mapview.region = {
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            latitudeDelta: 6,
            longitudeDelta: 6,
            animate: true,
            regionFit: false
        };
    });
    Ti.App.addEventListener("mapview.drop_message", function(message_data) {
        Ti.API.info("maview got event");
        dropMessage(message_data);
    });
    __defers["$.__views.mapview!click!report"] && $.__views.mapview.on("click", report);
    __defers["$.__views.button!click!markButtonClick"] && $.__views.button.addEventListener("click", markButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;