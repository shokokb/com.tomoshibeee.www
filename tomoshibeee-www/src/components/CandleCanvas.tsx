import { useRef, useEffect } from "react";

function CandleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let tick = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFlame = (centerX: number, flameTop: number) => {
      const flicker = Math.sin(tick / 5) * 2 + (Math.random() - 0.5) * 3;
      const y = flameTop + flicker;

      const grad = ctx.createRadialGradient(centerX, y, 2, centerX, y, 20);
      grad.addColorStop(0, "#fff");
      grad.addColorStop(0.3, "#ffd700");
      grad.addColorStop(1, "rgba(255, 69, 0, 0.2)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(centerX, y, 8, 20, 0, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const baseY = canvas.height * 0.75;

      // 蝋燭の胴体
      ctx.fillStyle = "#fef3bd";
      ctx.fillRect(centerX - 10, baseY - 80, 20, 80);

      // 炎
      drawFlame(centerX, baseY - 100);

      tick++;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={250}
      className=""
      ></canvas>
  );
}

export default CandleCanvas;
