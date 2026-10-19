/** Pure-CSS 3D glass cube. Used while the WebGL scene loads, and when WebGL or motion is unavailable. */
export default function HeroFallback() {
  const faces = [
    'rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(-90deg)', 'rotateX(90deg)', 'rotateX(-90deg)',
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center" aria-hidden="true">
      <div className="absolute h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="absolute h-56 w-56 animate-spin-slow rounded-full border border-cyan-400/30" style={{ borderStyle: 'dashed' }} />
      <div className="animate-float" style={{ perspective: 900 }}>
        <div className="animate-cube relative h-40 w-40" style={{ transformStyle: 'preserve-3d' }}>
          {faces.map((t) => (
            <div key={t} className="cube-face" style={{ transform: `${t} translateZ(5rem)` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
