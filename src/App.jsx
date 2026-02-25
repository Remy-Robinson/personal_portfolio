import React, { useRef, useEffect, memo } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import ProjectsPage from './pages/ProjectsPage.jsx';

const experience = [
  { year: '2025', company: 'mac formula electric', role: 'powertrain electrical' },
  { year: '2025', company: "let's get together",   role: 'software developer' },
  { year: '2025', company: 'ridan 3d industries',  role: 'engineering intern' },
];

/* ─── Static star/nebula layer ───────────────────────────────── */
function drawBackground(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  const nebulae = [
    { x: W * 0.22, y: H * 0.50, rx: W * 0.20, ry: H * 0.30, color: '30, 70, 140' },
    { x: W * 0.70, y: H * 0.45, rx: W * 0.18, ry: H * 0.28, color: '20, 100, 130' },
    { x: W * 0.50, y: H * 0.22, rx: W * 0.12, ry: H * 0.16, color: '50, 60, 120' },
  ];

  nebulae.forEach(({ x, y, rx, ry, color }) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, ry / rx);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
    g.addColorStop(0,    `rgba(${color}, 0.12)`);
    g.addColorStop(0.45, `rgba(${color}, 0.05)`);
    g.addColorStop(1,    `rgba(${color}, 0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  for (let i = 0; i < 320; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const t = Math.random();
    const r = t < 0.70 ? Math.random() * 0.55 + 0.18
            : t < 0.92 ? Math.random() * 0.75 + 0.55
            :              Math.random() * 1.10 + 1.20;
    const a = t < 0.70 ? Math.random() * 0.45 + 0.18
            : t < 0.92 ? Math.random() * 0.45 + 0.40
            :              Math.random() * 0.25 + 0.70;

    const tint = Math.random();
    const col  = tint < 0.4 ? `rgba(225,235,255,${a})`
               : tint < 0.7 ? `rgba(255,248,235,${a})`
               :               `rgba(245,245,245,${a})`;

    if (r > 1.2) {
      const halo = ctx.createRadialGradient(x, y, 0, x, y, r * 3.5);
      halo.addColorStop(0, `rgba(220,230,255,${a * 0.35})`);
      halo.addColorStop(1, 'rgba(220,230,255,0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(x, y, r * 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = col;
    ctx.fill();
  }

  const band = ctx.createLinearGradient(0, H * 0.35, W, H * 0.65);
  band.addColorStop(0,    'rgba(40,70,140,0)');
  band.addColorStop(0.40, 'rgba(40,70,140,0.04)');
  band.addColorStop(0.50, 'rgba(40,70,140,0.07)');
  band.addColorStop(0.60, 'rgba(40,70,140,0.04)');
  band.addColorStop(1,    'rgba(40,70,140,0)');
  ctx.fillStyle = band;
  ctx.fillRect(0, 0, W, H);
}

/* ─── Comet animation layer ──────────────────────────────────── */
function spawnComet(W, H) {
  const angle  = (Math.PI / 4) + (Math.random() - 0.5) * (Math.PI / 3);
  const speed  = 380 + Math.random() * 220;
  const length = 90  + Math.random() * 140;
  const width  = 1.5 + Math.random() * 1.5;
  const edge   = Math.random();
  const x = edge < 0.6 ? Math.random() * W : -length;
  const y = edge < 0.6 ? -length           : Math.random() * H * 0.5;
  return { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, length, width, alpha: 0.75 + Math.random() * 0.25 };
}

const GalaxyBackground = memo(function GalaxyBackground() {
  const bgRef    = useRef(null);
  const fxRef    = useRef(null);
  const stateRef = useRef({ comets: [], nextSpawn: 5 + Math.random() * 6, lastTime: null, raf: null });

  useEffect(() => {
    const canvas = bgRef.current;
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground(canvas);
  }, []);

  useEffect(() => {
    const canvas = fxRef.current;
    if (!canvas) return;
    const W = canvas.width  = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const s   = stateRef.current;

    function tick(ts) {
      if (s.lastTime === null) s.lastTime = ts;
      const dt = Math.min((ts - s.lastTime) / 1000, 0.1);
      s.lastTime = ts;
      s.nextSpawn -= dt;
      if (s.nextSpawn <= 0) {
        s.comets.push(spawnComet(W, H));
        s.nextSpawn = 5 + Math.random() * 8;
      }
      ctx.clearRect(0, 0, W, H);
      s.comets = s.comets.filter(c => {
        c.x += c.vx * dt;
        c.y += c.vy * dt;
        if (c.x > W + c.length || c.y > H + c.length) return false;
        const tx   = c.x - Math.cos(Math.atan2(c.vy, c.vx)) * c.length;
        const ty   = c.y - Math.sin(Math.atan2(c.vy, c.vx)) * c.length;
        const grad = ctx.createLinearGradient(tx, ty, c.x, c.y);
        grad.addColorStop(0,    'rgba(245,248,255,0)');
        grad.addColorStop(0.65, `rgba(245,248,255,${c.alpha * 0.35})`);
        grad.addColorStop(1,    `rgba(245,248,255,${c.alpha})`);
        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth   = c.width;
        ctx.lineCap     = 'round';
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(c.x, c.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.width * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${c.alpha})`;
        ctx.fill();
        ctx.restore();
        return true;
      });
      s.raf = requestAnimationFrame(tick);
    }

    s.raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(s.raf);
  }, []);

  return (
    <>
      <canvas ref={bgRef} className="galaxy-canvas" aria-hidden="true" />
      <canvas ref={fxRef} className="galaxy-canvas" aria-hidden="true" />
    </>
  );
});

/* ─── Landing page ───────────────────────────────────────────── */
function Landing() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="page"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 150 }}
    >

      <nav className="navbar">
        <span className="nav-name">remy robinson</span>
        <div className="nav-links">
          <a href="mailto:remyrobinson1230@gmail.com" className="nav-link">email</a>
          <a href="https://linkedin.com/in/remy-robinson" target="_blank" rel="noopener noreferrer" className="nav-link">linkedin</a>
          <a href="https://github.com/remy-robinson"     target="_blank" rel="noopener noreferrer" className="nav-link">github</a>
        </div>
      </nav>

      <main className="main">
        <div className="container">
          <div className="left-col">
            <h1 className="big-name">remy<br />robinson</h1>
            <p className="subtitle">power electronics + embedded systems</p>
            <button className="projects-btn" onClick={() => navigate('/projects')}>
              view projects →
            </button>
          </div>

          <div className="right-col">
            <div className="exp-list">
              {experience.map((item, i) => (
                <div className="exp-row" key={i}>
                  <span className="exp-year">{item.year}</span>
                  <span className="exp-company">{item.company}</span>
                  <span className="exp-role">{item.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

/* ─── Router ─────────────────────────────────────────────────── */
export default function App() {
  const location = useLocation();

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <GalaxyBackground />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"         element={<Landing />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}