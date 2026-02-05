export default function CluePanel({ type, hints }) {
  if (type === "blinking") {
    return (
      <div className="clue blinking">
        A B C D E P A U S E J S F G H
      </div>
    );
  }

  if (type === "image-alt") {
    return (
      <div className="clue">
        <img src="/broken.png" alt="ALT_TEXT" style={{ maxWidth: "100%", display: "block", margin: "0 auto" }} />
      </div>
    );
  }

  return <div className="clue">{hints?.primary || "Use your tools wisely."}</div>;
}
