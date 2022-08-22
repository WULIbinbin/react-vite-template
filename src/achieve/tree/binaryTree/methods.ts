import { NodeType } from "./types";
// 中序遍历辅助函数
export function inOrderTraverseNode(node: NodeType, cb) {
  if (node !== null) {
    inOrderTraverseNode(node.left, cb);
    cb(node.value);
    inOrderTraverseNode(node.right, cb);
  }
}

// 先序遍历辅助方法
export function preOrderTraverseNode(node: NodeType, cb) {
  if (node !== null) {
    cb(node.value);
    preOrderTraverseNode(node.left, cb);
    preOrderTraverseNode(node.right, cb);
  }
}

// 后序遍历辅助方法
export function postOrderTraverseNode(node: NodeType, cb) {
  if (node !== null) {
    postOrderTraverseNode(node.left, cb);
    postOrderTraverseNode(node.right, cb);
    cb(node.value);
  }
}

// 获取最小值，是二叉搜索树中最左侧分支的最后一个节点
export function minNode(node: NodeType): number {
  if (node) {
    while (node && node.left != null) {
      node = node.left;
    }
    return node.value;
  }
  return null;
}

// 获取最大值，是二叉搜索树中最右侧分支的最后一个节点
export function maxNode(node: NodeType): number {
  if (node) {
    while (node && node.right != null) {
      node = node.right;
    }
    return node.value;
  }
  return null;
}

// 搜索某个值
export function searchValue(node: NodeType, value: number): boolean {
  if (!value || !node) return false;

  if (node.value > value) {
    return searchValue(node.left, value);
  } else if (node.value < value) {
    return searchValue(node.right, value);
  } else {
    return true;
  }
}

// 删除某个节点
export function removeNode(node: NodeType, value: number): NodeType {
  if (!value || !node) return null;

  if (node.value > value) {
    node.left = removeNode(node.left, value);
    return node;
  } else if (node.value < value) {
    node.right = removeNode(node.right, value);
    return node;
  } else {
    // 如果是页节点（没有左右分支）
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    // 如果有一个子节点，当前移除的节点替换为子节点
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }

    // 如果有两个子节点，把右节点最小的值（minRight）替换到当前值（右节点最小的值还是大于左节点任意的值）
    // 并删除右节点的minRight，
    let minRight = minNode(node.right);
    node.value = minRight;
    node.right = removeNode(node.right, minRight);
    return node;
  }
}
