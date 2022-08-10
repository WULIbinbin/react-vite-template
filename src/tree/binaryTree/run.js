import { BinaryTree } from "./index";
import { init } from "./view";

const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(14);
binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(12);
binaryTree.insert(21);
binaryTree.insert(17);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(8);
binaryTree.insert(24);
binaryTree.insert(18);
binaryTree.insert(9);
binaryTree.insert(13);

console.log(binaryTree.root);

console.log(binaryTree.preOrderTraverse());

const { root } = binaryTree;
export default function run() {
  init(root);
}
