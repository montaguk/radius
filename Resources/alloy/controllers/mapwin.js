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
    function placeAnnotation(loc) {
        Ti.API.info("Placing annotation on map at: " + loc.coords.latitude + ", " + loc.coords.longitude);
        var a = Alloy.Globals.Map.createAnnotation({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            title: "New Message",
            subtitle: "Message text",
            pincolor: Alloy.Globals.Map.ANNOTATION_BLUE,
            myid: 2
        });
        $.mapview.addAnnotation(a);
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.dropMessage = function(media) {
        Titanium.Geolocation.getCurrentPosition(function(loc) {
            Ti.API.info("Location found.");
            placeAnnotation(loc, media);
        });
    };
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
    __defers["$.__views.mapview!click!report"] && $.__views.mapview.on("click", report);
    __defers["$.__views.button!click!markButtonClick"] && $.__views.button.addEventListener("click", markButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;