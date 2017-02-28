define(["require", "exports", "aurelia-pal", "./emoji-value-converter"], function (require, exports, aurelia_pal_1, emoji_value_converter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emoji = emoji_value_converter_1.Emoji;
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./emoji-value-converter')
        ]);
    }
    exports.configure = configure;
});
//# sourceMappingURL=index.js.map