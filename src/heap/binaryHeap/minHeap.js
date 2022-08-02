class MinHeap {
  heap = [];
  constructor() {
    this.heap = [];
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
    return Math.floor((index - 1) / 2);
  }

  getHeapArray() {
    return this.heap;
  }

  // 插入节点
  insert() {}

  // 实现上移函数
  siftUp(index) {

  }

  // 下移操作
  siftDown(index){

  }



  // 实现交换数组元素位置函数
  swap(array =[], exchangeElement = 0, exchangedElement = 0){
    const temp = array[exchangeElement]
    array[exchangeElement] = array[exchangedElement]
    array[exchangedElement] = temp
  }

  // 寻找堆的最小值
  findMinimum(){

  }

  // 判断堆是否为空
  isEmpty(){

  }

  // 导出堆的最小值
  extract(){

  }
}

window.MinHeap = MinHeap
