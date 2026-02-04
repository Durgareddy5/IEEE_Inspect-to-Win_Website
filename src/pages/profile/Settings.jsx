export default function Settings() {
  localStorage.setItem("ui-mode", "light");

  return (
    <div className="page">
      <h2>User Settings</h2>
      <p>Your preferences have been saved.</p>
    </div>
  );
}
