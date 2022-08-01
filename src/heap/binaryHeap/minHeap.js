class MinHeap {
  heap = [];
  constructor() {
    this.heap = [];
  }

  // 插入节点
  insert() {}

  // 获取左节点
  getLeftIndex(index) {
    return index * 2 + 1;
  }

  // 获取右节点
  getRightIndex(index) {
    return index * 2 + 2;
  }

  // 获取父节点的位置
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  getHeapArray() {
    return this.heap;
  }
}

const minHeap = new MinHeap();
minHeap.insert(13);
minHeap.insert(6);
minHeap.insert(2);
minHeap.insert(18);
minHeap.insert(5);
minHeap.insert(12);
minHeap.insert(9);
minHeap.insert(10);
minHeap.insert(1);
minHeap.insert(4);
minHeap.insert(21);

console.log(minHeap.getHeapArray());
