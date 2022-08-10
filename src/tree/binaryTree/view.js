import { Canvas, CanvasEvent, Circle, Text, Line, Rect } from "@antv/g";
import { Renderer } from "@antv/g-canvas";

export async function init(tree) {
  const unit = 60;
  const deep = getDeepOfTree(tree);
  let canvasWidth = 800;
  let distance = (deep - 1) ** 2;
  canvasWidth = canvasWidth + (distance + deep) * unit;
  const unitNum = Math.floor(canvasWidth / unit);
  const nodeWidth = unit;
  const rootX = Math.ceil(unitNum / 2) * unit - unit / 2;
  const rootY = unit + unit / 2;
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
  // 构建网格
  const unitRect = (x, y) =>
    new Rect({
      style: {
        x,
        y,
        width: unit,
        height: unit,
        fill: "#f7f7f7",
        stroke: "#e2e2e2",
        lineWidth: 1,
        radius: 0,
      },
    });

  for (let row = 0; row < unitNum; row++) {
    for (let col = 0; col < unitNum; col++) {
      canvas.appendChild(unitRect(col * unit, row * unit));
    }
  }

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
    console.log(`层级:${deep}----距离${distance}----value:${root.value}`);
    if (root.left) {
      drawLeftLine(x, y, distance);
      preOrderTraverse(
        root.left,
        x - (distance * unit) / 2,
        y + 2 * unit,
        distance / 2
      );
    }
    if (root.right) {
      drawRightLine(x, y, distance);
      preOrderTraverse(
        root.right,
        x + (distance * unit) / 2,
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
        r: nodeWidth / 2 - 4,
        fill: "#f2f2f2",
        stroke: "#999999",
        lineWidth: 4,
        cursor: "pointer",
        zIndex: 2,
      },
    });
    const text = new Text({
      style: {
        x: cx - 2,
        y: cy + 7,
        text: String(value),
        textAlign: "center",
        fontSize: 18,
        fill: "#666666",
        zIndex: 3,
      },
    });
    canvas.appendChild(circle);
    canvas.appendChild(text);
  }

  function drawLeftLine(x, y, distance) {
    const leftLine = line(x, y, x - (unit * distance) / 2, y + unit * 2);
    canvas.appendChild(leftLine);
  }

  function drawRightLine(x, y, distance) {
    const rightLine = line(x, y, x + (unit * distance) / 2, y + unit * 2);
    canvas.appendChild(rightLine);
  }
}
