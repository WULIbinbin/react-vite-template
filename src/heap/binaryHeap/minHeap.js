import { defaultCompare, COMPARE } from "../../utils/index";
export class MinHeap {
  heap = [];
  constructor() {
    this.heap = [];
    this.compareFn = defaultCompare;
  }

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
    // floor去掉小数点取整
    return Math.floor((index - 1) / 2);
  }

  getHeapArray() {
    return this.heap;
  }

  size() {
    return this.heap.length;
  }

  // 插入节点
  insert(value) {
    console.log(
      "====================================",
      this.heap,
      "插入值:",
      value
    );
    if (value != null) {
      // 从最末端节点插入
      this.heap.push(value);
      // 开始上移
      this.siftUp(this.heap.length - 1);
      console.log("当前结果", this.heap);
      return true;
    }
    return false;
  }

  // 实现上移函数
  siftUp(currentIndex) {
    let parentIndex = this.getParentIndex(currentIndex);
    while (
      currentIndex > 0 &&
      this.compareFn(this.heap[parentIndex], this.heap[currentIndex]) ===
        COMPARE.BIGGER_THAN
    ) {
      console.log(
        "父节点",
        this.heap[parentIndex],
        "当前节点",
        this.heap[currentIndex]
      );
      this.swap(this.heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
      console.log("换上下节点了");
    }
  }

  // 下移操作
  siftDown(currentIndex) {}

  // 实现交换数组元素位置函数
  swap(array = [], exchangeElement = 0, exchangedElement = 0) {
    const temp = array[exchangeElement];
    array[exchangeElement] = array[exchangedElement];
    array[exchangedElement] = temp;
  }

  // 交换节点
  heapify(array = [], size = this.size(), index = 0) {
    if (index >= size || size < 3) {
      return false;
    }
    let element = index;
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    console.log(
      "当前节点",
      array[index],
      "左节点",
      array[left],
      "右节点",
      array[right]
    );
    if (
      left < size &&
      this.compareFn(array[left], array[element]) === COMPARE.BIGGER_THAN
    ) {
      element = left;
    }
    if (
      right < size &&
      this.compareFn(array[right], array[element]) === COMPARE.BIGGER_THAN
    ) {
      element = right;
    }
    if (element !== index) {
      console.log("换节点了", array[element], "<===>", array[index]);
      this.swap(this.heap, element, index);
      this.heapify(this.heap, size, element);
      return true;
    }
  }

  // 寻找堆的最小值
  findMinimum() {}

  // 判断堆是否为空
  isEmpty() {}

  // 导出堆的最小值
  extract() {}
}

window.MinHeap = MinHeap;
