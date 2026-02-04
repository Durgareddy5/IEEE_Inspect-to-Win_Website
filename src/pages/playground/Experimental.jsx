export default function Experimental() {
  const text = "X R A N D O M C O D E S C H A I N Y Z";

  return (
    <div className="page playground blinking">
      {text.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
}

