import { Emoji } from './../../src/emoji-value-converter';

describe('index', () => {
    let sut;

    beforeEach(() => {
        sut = new Emoji();
    });

    it('string with single emoji should be converted', () => {
        let string = 'I love :coffee:';
        expect(sut.fromView(string)).not.toEqual(string);
    })
})
