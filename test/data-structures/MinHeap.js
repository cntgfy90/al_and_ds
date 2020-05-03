const { expect } = require('chai');
const { MinHeap } = require('../../data-structures/MinHeap');

describe('MinHeap', () => {
    it('should correctly represent min heap (#1)', () => {
        const minHeap = new MinHeap();
        const expectedResult = [0,3,1,7,6,5,8,144,12,10];

        minHeap.insert(10);
        minHeap.insert(5);
        minHeap.insert(1);
        minHeap.insert(12);
        minHeap.insert(7);
        minHeap.insert(0);
        minHeap.insert(8);
        minHeap.insert(144);
        minHeap.insert(3);
        minHeap.insert(6);

        expect(minHeap.getHeap()).to.deep.equal(expectedResult);
    });

    it('should correctly represent min heap (#2)', () => {
        const minHeap = new MinHeap();
        const expectedResult = [1,7,5,12,10];

        minHeap.insert(10);
        minHeap.insert(5);
        minHeap.insert(1);
        minHeap.insert(12);
        minHeap.insert(7);

        expect(minHeap.getHeap()).to.deep.equal(expectedResult);
    });

    it('should correctly poll item (#1)', () => {
        const minHeap = new MinHeap();

        minHeap.insert(10);
        minHeap.insert(5);
        minHeap.insert(1);
        minHeap.insert(12);
        minHeap.insert(7);

        const minElement = minHeap.poll();
        expect(minElement).to.equal(1);
    });

    it('should correctly poll item (#2)', () => {
        const minHeap = new MinHeap();

        minHeap.insert(10);
        minHeap.insert(5);
        minHeap.insert(1);
        minHeap.insert(12);
        minHeap.insert(7);
        minHeap.insert(0);
        minHeap.insert(8);
        minHeap.insert(144);
        minHeap.insert(3);
        minHeap.insert(6);

        const minElement = minHeap.poll();
        expect(minElement).to.equal(0);
    });
});