import { PLATFORM } from 'aurelia-pal';
import { Emoji } from './emoji-value-converter';
export function configure(aurelia) {
    aurelia.globalResources([
        PLATFORM.moduleName('./emoji-value-converter')
    ]);
}
export { Emoji };
//# sourceMappingURL=index.js.map