import '../src';

describe('minesweeper', () => {
    it('page should have sweeper data hook', () => {
        expect(document.querySelector('[data-hook="sweeper"]')).toBeTruthy()
    })
});

