class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          // Calculate vector between the centers
          const nx = dx / distance;
          const ny = dy / distance;

          // Calculate relative velocity
          const dvx = this.velX - ball.velX;
          const dvy = this.velY - ball.velY;

          // Calculate velocity component along the normal
          const dot = dvx * nx + dvy * ny;

          // Only bounce if moving toward each other
          if (dot > 0) {
            const collisionScale = dot / distance;
            const cx = collisionScale * nx;
            const cy = collisionScale * ny;

            // Update velocities
            this.velX -= cx;
            this.velY -= cy;
            ball.velX += cx;
            ball.velY += cy;
          }
        }
      }
    }
  }
}

const balls = [];
while (balls.length < 25) {
  const size = random(10, 20);
  let ball = new Ball(
    random(size, width - size),
    random(size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();