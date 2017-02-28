import { valueConverter } from 'aurelia-binding';
import { emojify } from 'node-emoji';

@valueConverter('emoji')
export class Emoji {
    toView(val: string): string {
        if (!val || val === '' || typeof val !== 'string') {
            return val;
        }

        return emojify(val);
    }
}
