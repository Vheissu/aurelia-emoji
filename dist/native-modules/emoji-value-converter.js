var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { valueConverter } from 'aurelia-binding';
import { emojify } from 'node-emoji';
var Emoji = (function () {
    function Emoji() {
    }
    Emoji.prototype.toView = function (val) {
        if (!val || val === '' || typeof val !== 'string') {
            return val;
        }
        return emojify(val);
    };
    return Emoji;
}());
Emoji = __decorate([
    valueConverter('emoji')
], Emoji);
export { Emoji };
//# sourceMappingURL=emoji-value-converter.js.map