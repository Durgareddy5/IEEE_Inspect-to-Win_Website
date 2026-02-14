import { useEffect, useState } from "react";
import { shuffle } from "../utils/shuffle";

export default function QuestionPanel({
  data,
  onCorrect,
  onWrong,
  questionNo,
  totalQuestions
}) {
  const [selected, setSelected] = useState(null);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // Check if last question
  const isLastQuestion = questionNo === totalQuestions;


  useEffect(() => {
  setSelected(null);
  setTypedAnswer("");

  if (!isLastQuestion && data.options) {
    setShuffledOptions(shuffle([...data.options]));
  }
}, [data.id, isLastQuestion]);


  const handleSubmit = () => {
    // LAST QUESTION (DESCRIPTIVE INPUT)
    if (isLastQuestion) {
      if (!typedAnswer.trim()) return;

      const userAnswer = typedAnswer.trim().toLowerCase();
      const correctAnswer = data.correct.trim().toLowerCase();
      console.log(userAnswer);
      console.log(correctAnswer);

      if (userAnswer === correctAnswer) {
        onCorrect();
      } else {
        onWrong();
      }
      return;
    }

    // NORMAL MCQ QUESTIONS
    if (!selected) return;

    if (selected === data.correct) {
      onCorrect();
    } else {
      onWrong();
    }
  };

  return (
    <div className="question-panel">

      {/* Code formatting for C / Python */}
      {data.level === "cLang" || data.level === "pythonLang" ? (
        <pre className="code-question">
          <code>{data.question}</code>
        </pre>
      ) : (
        <h2>{data.question}</h2>
      )}

      {/* LAST QUESTION INPUT MODE */}
      {isLastQuestion ? (
        <div className="descriptive-box">
          <input
            type="text"
            className="descriptive-input"
            placeholder="Type your final answer here..."
            value={typedAnswer}
            onChange={(e) => setTypedAnswer(e.target.value)}
          />
        </div>
      ) : (
        <>
          {shuffledOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={selected === option ? "active" : ""}
            >
              {option}
            </button>
          ))}
        </>
      )}

      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={isLastQuestion ? !typedAnswer.trim() : !selected}
      >
        Submit
      </button>
    </div>
  );
}


