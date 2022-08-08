// import './heap/binaryHeap/run'

import { tree } from "./tree/binaryTree/run";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = 750
const deep = getDeepOfTree(tree);
let distance = 1;
for (let i = 2; i < deep; i++) {
  distance = (distance + 1) * 2 - 2;
}
const unit = canvasWidth / (Math.pow(2, deep - 1) * 4 + 8);
console.log(unit, deep, distance);
canvas.setAttribute("height", deep * unit * 4);

const rootX = (canvasWidth - unit) / 2;
const rootY = unit;
preOrderTraverse(tree, rootX, rootY, distance);

// 得到该树的高度
function getDeepOfTree(root) {
  if (!root) {
    return 0;
  }
  let left = getDeepOfTree(root.left);
  let right = getDeepOfTree(root.right);
  return left > right ? left + 1 : right + 1;
}

function preOrderTraverse(root, x, y, distance) {
  // 绘制节点
  drawArc(root.value, x, y);
  if (root.left) {
    drawLeftLine(x, y + unit, distance);
    preOrderTraverse(
      root.left,
      x - (distance + 1) * unit,
      y + 3 * unit,
      distance / 2 - 1
    );
  }
  if (root.right) {
    drawRightLine(x + unit, y + unit, distance);
    preOrderTraverse(
      root.right,
      x + (distance + 1) * unit,
      y + 3 * unit,
      distance / 2 - 1
    );
  }

}

function drawArc(text, x, y) {
  ctx.beginPath()
  ctx.arc(x, y, unit, unit, 2 * Math.PI, true);
  ctx.fillStyle = "#e2e2e2";
  ctx.fill()
  ctx.closePath()
  ctx.font = "18px serif";
  ctx.fillStyle = "#333333";
  ctx.fillText(text, x - 4, y + unit / 2);
}

function drawLeftLine(x, y, distance) {
  ctx.moveTo(x, y);
  ctx.lineTo(x - distance * unit, y + 2 * unit);
  ctx.stroke();
}

function drawRightLine(x, y, distance) {
  ctx.moveTo(x, y);
  ctx.lineTo(x + distance * unit, y + 2 * unit);
  ctx.stroke();
}
