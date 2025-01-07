const fs = require("fs");
const { createCanvas } = require("canvas");

const images = [
  { name: "hero-preview.jpg", width: 400, height: 300 },
  { name: "gomoku.jpg", width: 300, height: 200 },
  { name: "blog.jpg", width: 300, height: 200 },
  { name: "weather.jpg", width: 300, height: 200 },
];

function generatePlaceholder(width, height, name) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // 填充背景
  ctx.fillStyle = "#f3f4f6";
  ctx.fillRect(0, 0, width, height);

  // 添加文字
  ctx.fillStyle = "#6b7280";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(name.replace(".jpg", ""), width / 2, height / 2);

  // 保存图片
  const buffer = canvas.toBuffer("image/jpeg");
  fs.writeFileSync(`public/images/${name}`, buffer);
}

// 确保目录存在
if (!fs.existsSync("public/images")) {
  fs.mkdirSync("public/images", { recursive: true });
}

// 生成所有占位图片
images.forEach(({ name, width, height }) => {
  generatePlaceholder(width, height, name);
  console.log(`Generated ${name}`);
});
