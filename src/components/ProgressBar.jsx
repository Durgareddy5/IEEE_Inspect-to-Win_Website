export default function ProgressBar({ current, total }) {
  const percentage = Math.round(((current + 1) / total) * 100);

  return (
    <div className="progress-container">
      <div style={{display:"none"}}>div_secret_99</div>
      <div
        className="progress-bar"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
