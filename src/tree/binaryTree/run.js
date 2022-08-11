import { BinaryTree } from "./index";
import { init } from "./view";

const binaryTree = new BinaryTree();

binaryTree.init([12, 4, 5, 16, 8, 14, 2, 1, 31, 21, 17, 27, 9, 6]);

binaryTree.insert(15);
binaryTree.insert(13);

console.log(binaryTree.root);

console.log(binaryTree.preOrderTraverse());
console.log(binaryTree.inOrderTraverse());


const { root } = binaryTree;
export default function run() {
  document.title = "二叉搜索树视图";
  init(root);
}
