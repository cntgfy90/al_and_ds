class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(data) {
      this.heap.push(data);
      this.bubbleUp(this.heap.length - 1);
    }
  
    bubbleUp(index) {
      let parentIndex = Math.ceil(index / 2) - 1;
  
      while (this.heap[parentIndex] > this.heap[index]) {
        const temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[index];
        this.heap[index] = temp;
  
        index = parentIndex;
        parentIndex = Math.ceil(index / 2) - 1;
      }
    }

    bubbleDown(index) {
        while (true) {
            const isLeftChildGreaterThanRight = this.heap[(index * 2) + 1] > this.heap[(index * 2) + 2];
            const minChildIndex = isLeftChildGreaterThanRight ? (index * 2) + 2 : (index * 2) + 1;

            if (this.heap[index] > this.heap[minChildIndex]) {
                const temp = this.heap[minChildIndex];
                this.heap[minChildIndex] = this.heap[index];
                this.heap[index] = temp;
                index = minChildIndex;
            } else {
                break;
            }
        }
    }

    poll() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    getHeap() {
        return this.heap;
    }
  
    display() {
      console.log(JSON.stringify(this.heap));
    }
  }
  
module.exports = { MinHeap };