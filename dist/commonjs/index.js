"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
var emoji_value_converter_1 = require("./emoji-value-converter");
exports.Emoji = emoji_value_converter_1.Emoji;
function configure(aurelia) {
    aurelia.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./emoji-value-converter')
    ]);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map