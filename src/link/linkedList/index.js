class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // 初始化链表长度
    this.length = 0;
    // 初始化链表第一个节点，链表头
    this.head = null;
  }

  append(element) {
    let node = new Node(element);
    let current = null;
    // 链表头是否为空
    if (this.head === null) {
      this.head = node;
    } else {
      // 遍历链表
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  insert(element, point) {
    if (point < 0 || point > this.length) return false;
    let node = new Node(element);
    let current = this.head;
    let previous = null;
    let index = 0;
    // 头部插入，直接替换链表头
    if (point === 0) {
      node.next = current;
      this.head = node;
    } else {
      // 遍历链表直到point所在节点，保存当前节点
      while (index < point) {
        index++;
        previous = current;
        current = current.next;
      }
      // 插入节点去链接前后节点
      previous.next = node;
      node.next = current;
    }
    this.length++;
    return true
  }
}

export default LinkedList;
