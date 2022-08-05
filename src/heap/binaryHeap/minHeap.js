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
    console.warn("最终结果:===================>", `${[...this.heap]}`);
    return this.heap;
  }

  size() {
    return this.heap.length;
  }

  // 插入节点
  insert(value) {
    console.log(this.heap, "插入值:================>", value);
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
    if (index >= size) {
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
      array[right],
      size
    );
    // 如果当前要操作节点的左子节点大于其父节点，更新element的值
    if (
      left < size &&
      this.compareFn(array[left], array[element]) === COMPARE.BIGGER_THAN
    ) {
      element = left;
    }
    // 如果当前要操作节点的右子节点大于其父节点，更新element的值
    if (
      right < size &&
      this.compareFn(array[right], array[element]) === COMPARE.BIGGER_THAN
    ) {
      element = right;
    }
    if (element !== index) {
      console.log("换节点了", array[element], "<===>", array[index]);
      this.swap(array, element, index);
      this.heapify(array, size, element);
      return true;
    }
    console.log("不用换");
  }

  // 堆构建：根据父级节点的层数反向排序，最后一位是最大/最小值
  buildHeap(array = this.heap) {
    console.warn("#开始构建#");
    const last = array.length - 1;
    const lastParent = this.getParentIndex(last);
    for (let i = lastParent; i >= 0; i--) {
      this.heapify(array, array.length, i);
    }
    console.log(this.getHeapArray());
  }

  // 堆排序，
  sortHeap(array = this.heap) {
    this.buildHeap();
    console.warn("#开始排序#");
    for (let i = array.length - 1; i >= 0; i--) {
      console.log(i);
      this.swap(array, i, 0);
      this.heapify(array, i, 0);
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
