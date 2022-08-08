import { BinaryTree } from "./index";

const binaryTree = new BinaryTree();

binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(1);
binaryTree.insert(7);
binaryTree.insert(9);
binaryTree.insert(2);
binaryTree.insert(12);
binaryTree.insert(6);

console.log(binaryTree);

console.log(binaryTree.inOrderTraverse());
console.log(binaryTree.postOrderTraverse());

const { root } = binaryTree;
export const tree = root;
