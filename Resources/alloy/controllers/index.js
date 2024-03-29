function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId2 = Alloy.createController("mapwin", {
        id: "__alloyId2"
    });
    $.__views.index.addTab($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId4 = Alloy.createController("messageswin", {
        id: "__alloyId4"
    });
    $.__views.index.addTab($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId5 = Alloy.createController("newmessagewin", {
        id: "__alloyId5"
    });
    $.__views.__alloyId5 && $.addTopLevelView($.__views.__alloyId5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;