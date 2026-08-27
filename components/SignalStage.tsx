const traces = ["repair", "restore", "document", "learn"];

export function SignalStage() {
  return (
    <div className="signal-stage" aria-label="Animated technology signal">
      <div className="stage-grid" aria-hidden="true" />
      <div className="stage-orbit orbit-a" aria-hidden="true" />
      <div className="stage-orbit orbit-b" aria-hidden="true" />
      <div className="stage-core" aria-hidden="true">
        <span>td</span>
      </div>
      <div className="trace-list">
        {traces.map((trace, index) => (
          <span key={trace}>
            <i aria-hidden="true" /> 0{index + 1} / {trace}
          </span>
        ))}
      </div>
      <p className="stage-readout">SIGNAL 515 · LAB ONLINE · SYSTEM READY</p>
    </div>
  );
}
