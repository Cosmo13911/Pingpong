window.onload = () => {
document.getElementById('pingpong').classList.add('visible');};

const container = document.getElementById("pingpong-container");
const ball = document.querySelector(".pingpong-ball");

let x = 100; // ตำแหน่งเริ่มต้น X
let y = 100; // ตำแหน่งเริ่มต้น Y
let vx = 5; // ความเร็วในแกน X
let vy = 3; // ความเร็วในแกน Y
const gravity = 0.2; // แรงโน้มถ่วง
const bounceFactor = 0.8; // แรงสะท้อน

function updatePosition() {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const ballSize = ball.offsetWidth;

  // อัปเดตตำแหน่ง
  x += vx;
  y += vy;

  // แรงโน้มถ่วงส่งผลต่อความเร็วในแกน Y
  vy += gravity;

  // ตรวจสอบการชนขอบ
  if (x <= 0 || x + ballSize >= containerWidth) {
    vx = -vx; // สะท้อนในแกน X
  }

  if (y + ballSize >= containerHeight) {
    vy = -vy * bounceFactor; // สะท้อนในแกน Y พร้อมลดความเร็ว
    y = containerHeight - ballSize; // ปรับตำแหน่งไม่ให้เกินขอบ
  }

  // อัปเดตตำแหน่งของลูกปิงปอง
  ball.style.transform = `translate(${x}px, ${y + window.scrollY}px)`; // ตำแหน่ง Y อ้างอิงจาก scroll

  // เรียกใช้ฟังก์ชันซ้ำ
  requestAnimationFrame(updatePosition);
}

// เริ่มต้นการเคลื่อนไหว
  updatePosition();
