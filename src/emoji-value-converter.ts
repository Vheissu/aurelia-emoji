import { valueConverter } from 'aurelia-binding';
import { emojify } from 'node-emoji';

@valueConverter('emoji')
export class Emoji {
    toView(val) {
        if (!val || val === '') {
            return val;
        }

        return emojify(val);
    }
}