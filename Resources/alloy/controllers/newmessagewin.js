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
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Close",
        top: "10",
        width: "400",
        height: "100"
    });
    $.__views.newmessagewin.add($.__views.button);
    closeWin ? $.__views.button.addEventListener("click", closeWin) : __defers["$.__views.button!click!closeWin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.OpenMainWindow = function(_tab) {
        _tab.open($.newmessagewin);
        var overlayImage = Titanium.UI.createImageView({
            width: 1,
            height: 1
        });
        var myOverlay = Titanium.UI.createView();
        myOverlay.add(overlayImage);
        Titanium.Media.showCamera({
            overlay: myOverlay
        });
    };
    __defers["$.__views.button!click!closeWin"] && $.__views.button.addEventListener("click", closeWin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;