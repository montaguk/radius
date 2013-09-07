function Controller() {
    function closeWin() {
        $.newmessagewin.close();
    }
    function sendMsg() {
        Ti.API.info("Sending message to map");
        var image = $.imagePreview.getImage();
        var controller = Alloy.createController("mapwin");
        controller.dropMessage(image);
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
    $.__views.imagePreview = Ti.UI.createImageView({
        id: "imagePreview",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    $.__views.newmessagewin.add($.__views.imagePreview);
    $.__views.address = Ti.UI.createTextField({
        id: "address",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "1%",
        center: "50%",
        width: "90%",
        height: "8%"
    });
    $.__views.newmessagewin.add($.__views.address);
    $.__views.nmwCloseBtn = Ti.UI.createButton({
        id: "nmwCloseBtn",
        title: "Close",
        left: "5%",
        top: "90%",
        width: "10%",
        height: "10%"
    });
    $.__views.newmessagewin.add($.__views.nmwCloseBtn);
    closeWin ? $.__views.nmwCloseBtn.addEventListener("click", closeWin) : __defers["$.__views.nmwCloseBtn!click!closeWin"] = true;
    $.__views.nmwSendBtn = Ti.UI.createButton({
        id: "nmwSendBtn",
        title: "Send",
        right: "5%",
        top: "90%",
        width: "10%",
        height: "10%"
    });
    $.__views.newmessagewin.add($.__views.nmwSendBtn);
    sendMsg ? $.__views.nmwSendBtn.addEventListener("click", sendMsg) : __defers["$.__views.nmwSendBtn!click!sendMsg"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.OpenMainWindow = function(_tab) {
        _tab.open($.newmessagewin);
    };
    exports.SetupWindow = function(media) {
        Ti.API.info("Captured " + media.mediaType + " with error " + media.error);
        $.imagePreview.setImage(media.media);
    };
    __defers["$.__views.nmwCloseBtn!click!closeWin"] && $.__views.nmwCloseBtn.addEventListener("click", closeWin);
    __defers["$.__views.nmwSendBtn!click!sendMsg"] && $.__views.nmwSendBtn.addEventListener("click", sendMsg);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;