import { Canvas, CanvasEvent, Circle, Text, Line } from "@antv/g";
import { Renderer } from "@antv/g-canvas";

export async function init(tree) {
  const canvasWidth = 800;
  const deep = getDeepOfTree(tree);
  let distance = 1;
  for (let i = 2; i < deep; i++) {
    distance = distance * 2;
  }
  const unit = 32;
  const unitNum = Math.floor(canvasWidth / unit);
  const nodeWidth = 26;

  const rootX = Math.ceil(unitNum / 2) * unit - unit / 2;
  const rootY = unit / 2;

  console.log(deep, distance, unit);

  const canvas = new Canvas({
    container: "container",
    width: canvasWidth,
    height: canvasWidth,
    renderer: new Renderer(),
  });

  const line = (x1, y1, x2, y2) =>
    new Line({
      style: {
        x1,
        y1,
        x2,
        y2,
        stroke: "#999999",
        lineWidth: 4,
        zIndex: 1,
      },
    });

  await canvas.ready;

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
    drawNode(root.value, x, y);
    console.log(`层级:${distance}----value:${root.value}`);
    if (root.left) {
      drawLeftLine(x, y, distance);
      preOrderTraverse(
        root.left,
        x - distance * unit,
        y + 2 * unit,
        distance / 2
      );
    }
    if (root.right) {
      drawRightLine(x, y, distance);
      preOrderTraverse(
        root.right,
        x + distance * unit,
        y + 2 * unit,
        distance / 2
      );
    }
  }

  function drawNode(value, cx, cy) {
    const circle = new Circle({
      style: {
        cx: cx,
        cy: cy,
        r: nodeWidth,
        fill: "#f2f2f2",
        stroke: "#999999",
        lineWidth: 4,
        cursor: "pointer",
        zIndex: 2,
      },
    });
    const text = new Text({
      style: {
        x: cx - nodeWidth / 4,
        y: cy,
        text: String(value),
        fontSize: 16,
        fill: "#666666",
        zIndex: 3,
      },
    });
    canvas.appendChild(circle);
    canvas.appendChild(text);
  }

  function drawLeftLine(x, y, distance) {
    const leftLine = line(x, y, x - unit * distance, y + unit * (distance - 1));
    canvas.appendChild(leftLine);
  }

  function drawRightLine(x, y, distance) {
    const rightLine = line(x, y, x + unit * distance, y + unit * distance);
    canvas.appendChild(rightLine);
  }
}
