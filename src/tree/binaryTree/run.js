import { BinaryTree } from "./index";
import { init } from "./view";

const binaryTree = new BinaryTree();

binaryTree.init([
  18, 12, 5, 16, 8, 
  // 14, 2, 1, 31, 21, 17, 27, 9, 6, 34, 4, 49, 32, 19,
]);

binaryTree.insert(20);
binaryTree.insert(3);

console.log(binaryTree.root);

console.log(binaryTree.preOrderTraverse());
console.log(binaryTree.inOrderTraverse());

console.log(binaryTree.getMin(), binaryTree.getMax());
console.log(binaryTree.search(11), binaryTree.search(21));

// console.log(binaryTree.remove(16));
// console.log(binaryTree.remove(4));

const { root } = binaryTree;
export default function run() {
  document.title = "二叉搜索树视图";
  init(root);
}
