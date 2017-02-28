import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { Emoji } from './emoji-value-converter';

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources([
        PLATFORM.moduleName('./emoji-value-converter')
    ]);
}


export { Emoji };