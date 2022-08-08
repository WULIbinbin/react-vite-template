class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 中序遍历辅助函数
function inOrderTraverseNode(node, cb) {
  if (node !== null) {
    inOrderTraverseNode(node.left, cb);
    cb(node.value);
    inOrderTraverseNode(node.right, cb);
  }
}

 // 先序遍历辅助方法
 function preOrderTraverseNode(node, cb) {
  if(node !== null) {
    cb(node.value);
    preOrderTraverseNode(node.left, cb);
    preOrderTraverseNode(node.right, cb);
  }
}

// 后序遍历辅助方法
function postOrderTraverseNode(node, cb) {
  if(node !== null){
    postOrderTraverseNode(node.left, cb);
    postOrderTraverseNode(node.right, cb);
    cb(node.value);
  }
}

export class BinaryTree {
  root = null;

  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    this.root === null
      ? (this.root = newNode)
      : this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
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
    const result = []
    inOrderTraverseNode(this.root, (value)=>{
      result.push(value)
    });
    return result
  }

  // 先序遍历 --- 优先于后代节点的顺序访问每个节点
  preOrderTraverse(){
    const result = []
    preOrderTraverseNode(this.root, (value)=>{
      result.push(value)
    });
    return result
  }

  // 后序遍历 --- 先访问后代节点，再访问节点本身
  postOrderTraverse(){
    const result = []
    postOrderTraverseNode(this.root, (value)=>{
      result.push(value)
    });
    return result
  }
}
