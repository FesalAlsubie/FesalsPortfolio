/* animations.js
   Lightweight particle background and mouse glow for the hero portrait.
   Designed to be performant: uses requestAnimationFrame and small particle count.
*/
(function(){
  // mouse glow canvas overlay inside portrait-glass
  const portrait = document.querySelector('.portrait-glass');
  if (!portrait) return;

  const canvas = document.getElementById('mouse-glow');
  const ctx = canvas && canvas.getContext('2d');

  let w=0,h=0,mouse={x:-9999,y:-9999},particles=[];
  const PARTICLE_COUNT = 14;

  function resize(){
    w = canvas.width = portrait.clientWidth;
    h = canvas.height = portrait.clientHeight;
  }

  function init(){
    resize();
    particles = [];
    for(let i=0;i<PARTICLE_COUNT;i++){
      particles.push({
        x: Math.random()*w,
        y: Math.random()*h,
        r: 20 + Math.random()*40,
        vx: (Math.random()-0.5)*0.2,
        vy: (Math.random()-0.5)*0.2,
        hue: 180 + Math.random()*60,
        alpha: 0.05 + Math.random()*0.15
      });
    }
  }

  function draw(){
    if (!ctx) return;
    ctx.clearRect(0,0,w,h);
    // draw soft particles
    particles.forEach(p=>{
      const dx = (mouse.x - p.x);
      const dy = (mouse.y - p.y);
      const dist = Math.sqrt(dx*dx+dy*dy) || 1;
      const attract = Math.max(0, 1 - dist / 320);
      p.x += p.vx + (dx/dist)*0.6*attract;
      p.y += p.vy + (dy/dist)*0.6*attract;
      ctx.beginPath();
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      grd.addColorStop(0, `rgba(0,216,255,${p.alpha*1.0})`);
      grd.addColorStop(0.4, `rgba(0,216,255,${p.alpha*0.25})`);
      grd.addColorStop(1, `rgba(0,216,255,0)`);
      ctx.fillStyle = grd;
      ctx.fillRect(p.x - p.r, p.y - p.r, p.r*2, p.r*2);
    });
    requestAnimationFrame(draw);
  }

  portrait.addEventListener('pointermove', (e) => {
    const rect = portrait.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  portrait.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; });

  window.addEventListener('resize', () => {
    resize();
  });

  // initialize and start
  if (canvas && ctx) {
    init();
    draw();
  }
})();