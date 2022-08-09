import { BinaryTree } from "./index";
import { init } from "./view";

const binaryTree = new BinaryTree();

binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(1);
binaryTree.insert(7);
binaryTree.insert(9);
binaryTree.insert(2);
binaryTree.insert(12);
binaryTree.insert(6);

console.log(binaryTree.root);

console.log(binaryTree.preOrderTraverse());

const { root } = binaryTree;
export default function run() {
  init(root);
}
