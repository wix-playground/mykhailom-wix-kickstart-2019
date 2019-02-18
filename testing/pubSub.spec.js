const pubSub = require('./pubSub');

const handler = jest.fn();

describe('publish-subscribe', () => {
    it('should return unsubscribe function', () => {
        const unsubscribe = pubSub.subscribe('event1', handler);
        expect(typeof unsubscribe).toBe('function');
    });

    it('should call handler after publish', () => {
        pubSub.subscribe('event2', handler);
        const args = {a: 5, b: 9};
        pubSub.publish('event2', args);
        expect(handler).toHaveBeenCalledWith(args);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('should remove handler after unsubscribe', () => {
        const unsubscribe = pubSub.subscribe('event3', handler);
        expect(pubSub.handlers['event3'].length).toBe(1);
        unsubscribe();
        expect(pubSub.handlers['event3']).toEqual([]);
    });
});