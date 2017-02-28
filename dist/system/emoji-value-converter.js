System.register(["aurelia-binding", "node-emoji"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_binding_1, node_emoji_1, Emoji;
    return {
        setters: [
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (node_emoji_1_1) {
                node_emoji_1 = node_emoji_1_1;
            }
        ],
        execute: function () {
            Emoji = (function () {
                function Emoji() {
                }
                Emoji.prototype.toView = function (val) {
                    if (!val || val === '' || typeof val !== 'string') {
                        return val;
                    }
                    return node_emoji_1.emojify(val);
                };
                return Emoji;
            }());
            Emoji = __decorate([
                aurelia_binding_1.valueConverter('emoji')
            ], Emoji);
            exports_1("Emoji", Emoji);
        }
    };
});
//# sourceMappingURL=emoji-value-converter.js.map