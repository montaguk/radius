function Controller() {
    function report(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    }
    function markButtonClick() {
        Ti.API.info("Mark button clicked");
        var controller = Alloy.createController("newmessagewin");
        controller.OpenMainWindow($.maptab);
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
        top: "10",
        width: "400",
        height: "100"
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
    var mountainView = Alloy.Globals.Map.createAnnotation({
        latitude: 37.390749,
        longitude: -122.081651,
        title: "Appcelerator Headquarters",
        subtitle: "Mountain View, CA",
        pincolor: Alloy.Globals.Map.ANNOTATION_RED,
        myid: 1
    });
    Titanium.Geolocation.getCurrentPosition(function(loc) {
        $.mapview.region = {
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            latitudeDelta: 6,
            longitudeDelta: 6,
            animate: true,
            regionFit: false
        };
    });
    $.mapview.addAnnotation(mountainView);
    __defers["$.__views.mapview!click!report"] && $.__views.mapview.on("click", report);
    __defers["$.__views.button!click!markButtonClick"] && $.__views.button.addEventListener("click", markButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;