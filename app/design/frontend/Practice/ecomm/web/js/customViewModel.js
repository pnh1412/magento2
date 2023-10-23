define(['uiComponent'], function (Component) {
    "use strict";
 
    return Component.extend({
        initialize: function () {
            this._super();
            alert("initialized the custom component.");
        }
    });
});