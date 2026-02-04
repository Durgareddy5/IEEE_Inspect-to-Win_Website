import { useEffect, useState } from "react";
import { shuffle } from "../utils/shuffle";

export default function QuestionPanel({ data, onCorrect }) {
  const [selected, setSelected] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  /* --------------------------------
     SHUFFLE OPTIONS ONCE PER QUESTION
  --------------------------------- */
  useEffect(() => {
    setSelected(null);

    // Small delay = smoother UX (optional but premium)
    const t = setTimeout(() => {
      setShuffledOptions(shuffle(data.options));
    }, 300);

    return () => clearTimeout(t);
  }, [data]);

  /* --------------------------------
     SUBMIT HANDLER
  --------------------------------- */
  const handleSubmit = () => {
    if (!selected) return;

    if (selected === data.correct) {
      onCorrect();
    } else {
      alert("Incorrect 👀 Somewhere on the screen another hint is provided");
    }
  };

  return (
    <div className="question-panel">
      <h2>{data.question}</h2>

      {shuffledOptions.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={selected === option ? "active" : ""}
        >
          {option}
        </button>
      ))}

      <button
        onClick={handleSubmit}
        className="submit-btn"
        disabled={!selected}
      >
        Submit
      </button>
    </div>
  );
}

// import { useState } from "react";
// import { shuffle } from "../utils/shuffle";

// export default function QuestionPanel({ data, onCorrect }) {
//   const [selected, setSelected] = useState(null);
//   const options = shuffle(data.options);

//   const submit = () => {
//     if (selected === data.correct) {
//       onCorrect();
//     } else {
//       alert("Incorrect... 👀 Somewhere on the screen another hint is provided.");
//     }
//   };

//   return (
//     <div className="question-panel">
//       <h2>{data.question}</h2>

//       {options.map((opt) => (
//         <button
//           key={opt}
//           onClick={() => setSelected(opt)}
//           className={selected === opt ? "active" : ""}
//         >
//           {opt}
//         </button>
//       ))}

//       <button onClick={submit} className="submit-btn">Submit</button>
//     </div>
//   );
// }
