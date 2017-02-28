System.register(["aurelia-pal", "./emoji-value-converter"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./emoji-value-converter')
        ]);
    }
    exports_1("configure", configure);
    var aurelia_pal_1, emoji_value_converter_1;
    return {
        setters: [
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (emoji_value_converter_1_1) {
                emoji_value_converter_1 = emoji_value_converter_1_1;
            }
        ],
        execute: function () {
            exports_1("Emoji", emoji_value_converter_1.Emoji);
        }
    };
});
//# sourceMappingURL=index.js.map