function Controller() {
    function closeWin() {
        $.newmessagewin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newmessagewin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newmessagewin = Ti.UI.createWindow({
        id: "newmessagewin"
    });
    $.__views.newmessagewin && $.addTopLevelView($.__views.newmessagewin);
    $.__views.address = Ti.UI.createTextField({
        id: "address",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "900",
        height: "100"
    });
    $.__views.newmessagewin.add($.__views.address);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Close",
        width: "400",
        height: "100"
    });
    $.__views.newmessagewin.add($.__views.button);
    closeWin ? $.__views.button.addEventListener("click", closeWin) : __defers["$.__views.button!click!closeWin"] = true;
    $.__views.imagePreview = Ti.UI.createImageView({
        id: "imagePreview",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    $.__views.newmessagewin.add($.__views.imagePreview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.OpenMainWindow = function(_tab) {
        _tab.open($.newmessagewin);
    };
    exports.SetupWindow = function(media) {
        Ti.API.info("Captured " + media.mediaType + " with error " + media.error);
        $.imagePreview.setImage(media.media);
    };
    __defers["$.__views.button!click!closeWin"] && $.__views.button.addEventListener("click", closeWin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;