"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_binding_1 = require("aurelia-binding");
var node_emoji_1 = require("node-emoji");
var Emoji = (function () {
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
exports.Emoji = Emoji;
//# sourceMappingURL=emoji-value-converter.js.map