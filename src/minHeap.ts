class MinHeap {
  constructor(array: number[], public heap: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    let firstParentIndex = Math.floor((array.length - 2) / 2);
    for (let curr = firstParentIndex; curr >= 0; curr--) {
      this.siftDown(curr, array.length - 1, array);
    }
    return array;
  }

  swap(i: number, j: number, heap: number[]) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  siftDown(currentIndex: number, endIndex: number, heap: number[]) {
    let leftChild = currentIndex * 2 + 1;

    while (leftChild < endIndex) {
      let rightChild =
        currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
      let indexToSwap;

      if (rightChild !== -1 && heap[rightChild] < heap[leftChild]) {
        indexToSwap = rightChild;
      } else {
        indexToSwap = leftChild;
      }
      if (heap[indexToSwap] < heap[currentIndex]) {
        this.swap(currentIndex, indexToSwap, heap);
        currentIndex = indexToSwap;
        leftChild = currentIndex * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIndex: number, heap: number[]) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    //while parent index exists and current is less than parent
    while (currentIndex > 0 && heap[currentIndex] < heap[parentIndex]) {
      //swap current and parent and change pointer to parent index
      this.swap(currentIndex, parentIndex, heap);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove(): number | void {
    this.swap(0, this.heap.length - 1, this.heap);
    let removed = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    if(removed !== undefined) {
      return removed;
    }
  }

  insert(value: number): void {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
}
