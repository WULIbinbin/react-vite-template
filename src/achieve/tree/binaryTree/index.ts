import {
  inOrderTraverseNode,
  preOrderTraverseNode,
  postOrderTraverseNode,
  searchValue,
  maxNode,
  minNode,
  removeNode,
} from "./methods";
import { NodeType } from "./types";

class Node {
  value: number | null;
  left: NodeType | null;
  right: NodeType;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  root: NodeType | null;

  constructor() {
    this.root = null;
  }

  // 利用数组插入多个值
  init(valueArray = []) {
    valueArray.forEach((value) => {
      this.insert(value);
    });
  }

  // 插入节点
  insert(value: number) {
    let newNode = new Node(value);
    this.root === null
      ? (this.root = newNode)
      : this.insertNode(this.root, newNode);
  }

  // 递归插入节点
  insertNode(node: NodeType, newNode: NodeType) {
    if (newNode.value < node.value) {
      node.left === null
        ? (node.left = newNode)
        : this.insertNode(node.left, newNode);
    } else {
      node.right === null
        ? (node.right = newNode)
        : this.insertNode(node.right, newNode);
    }
  }

  // 中序遍历 --- 以从最小到最大的顺序访问所有节点
  inOrderTraverse() {
    const result:Array<number> = [];
    inOrderTraverseNode(this.root, (value) => {
      result.push(value);
    });
    return result;
  }

  // 先序遍历 --- 优先于后代节点的顺序访问每个节点
  preOrderTraverse() {
    const result:Array<number> = [];
    preOrderTraverseNode(this.root, (value) => {
      result.push(value);
    });
    return result;
  }

  // 后序遍历 --- 先访问后代节点，再访问节点本身
  postOrderTraverse() {
    const result:Array<number> = [];
    postOrderTraverseNode(this.root, (value) => {
      result.push(value);
    });
    return result;
  }

  getMin() {
    return minNode(this.root);
  }

  getMax() {
    return maxNode(this.root);
  }

  search(value: number) {
    return searchValue(this.root, value);
  }

  remove(value: number) {
    return removeNode(this.root, value);
  }
}
