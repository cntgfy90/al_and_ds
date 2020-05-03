const { MinHeap } = require('./MinHeap');

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
minHeap.poll();
minHeap.display();