define(['jquery', 'ko', 'uiComponent','mage/translate' ], function ($, ko, Component, $t) {
    "use strict";

    return Component.extend({
        defaults: {
            template: "Magento_Theme/custom-component-tpl"
        },
        initialize: function () {
            this._super();
            alert("Yahooooooooooooo.");
        },
        getTemplate: function () {
            return this.template;
        }
    });
});
