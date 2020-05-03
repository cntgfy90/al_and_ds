class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(data) {
      this.heap.push(data);
      this.bubbleUp(this.heap.length - 1);
    }
  
    bubbleUp(key) {
      let parentIndex = Math.ceil((key / 2)) - 1;
  
      if (this.heap.length < 3) {
        if (this.heap[0] > this.heap[key]) {
          const temp = this.heap[0];
          this.heap[0] = this.heap[key];
          this.heap[key] = temp;
        }
      }
  
      while (
        this.heap[parentIndex] > this.heap[key]
      ) {
        const temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[key];
        this.heap[key] = temp;
  
        key = parentIndex;
        parentIndex = Math.ceil(key / 2) - 1;
      }
    }
  
    display() {
      console.log(JSON.stringify(this.heap));
    }
  }
  
module.exports = { MinHeap };