function Controller() {
    function report(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    }
    function markClick() {
        Ti.API.info("Mark button clicked");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.mapview = Alloy.Globals.Map.createView({
        id: "mapview",
        ns: "Alloy.Globals.Map",
        userLocation: "true"
    });
    $.__views.index.add($.__views.mapview);
    report ? $.__views.mapview.on("click", report) : __defers["$.__views.mapview!click!report"] = true;
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Drop Message!",
        top: "10",
        width: "400",
        height: "100"
    });
    $.__views.index.add($.__views.button);
    markClick ? $.__views.button.addEventListener("click", markClick) : __defers["$.__views.button!click!markClick"] = true;
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
    $.mapview.region = {
        latitude: 33.74511,
        longitude: -84.38993,
        latitudeDelta: .01,
        longitudeDelta: .01
    };
    $.mapview.addAnnotation(mountainView);
    $.index.open();
    __defers["$.__views.mapview!click!report"] && $.__views.mapview.on("click", report);
    __defers["$.__views.button!click!markClick"] && $.__views.button.addEventListener("click", markClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;