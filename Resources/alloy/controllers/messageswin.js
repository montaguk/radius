function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "messageswin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.messageswin = Ti.UI.createWindow({
        id: "messageswin"
    });
    $.__views.messageswin = Ti.UI.createTab({
        window: $.__views.messageswin,
        title: "Messages",
        id: "messageswin"
    });
    $.__views.messageswin && $.addTopLevelView($.__views.messageswin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;