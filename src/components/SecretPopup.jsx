import { useEffect } from "react";

export default function SecretPopup({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 1000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="ghost-hint">
      {message}
    </div>
  );
}
