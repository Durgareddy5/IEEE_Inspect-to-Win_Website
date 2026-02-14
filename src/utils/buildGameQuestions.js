import cQuestions from "../data/c";
import pythonQuestions from "../data/python";
import societyQuestions from "../data/society";
import inspectQuestions from "../data/questions";
import { shuffle } from "./shuffle";

export function buildGameQuestions() {
  // 2 random C questions
  const cSelected = shuffle([...cQuestions]).slice(0, 2);

  // 1 random Python question
  const pythonSelected = shuffle([...pythonQuestions]).slice(0, 1);

  // 1 random Society question
  const societySelected = shuffle([...societyQuestions]).slice(0, 1);

  // Inspect questions filter
  const mediumInspect = inspectQuestions.filter((q) => q.level === "medium");
  const hardInspect = inspectQuestions.filter((q) => q.level === "hard");

  // 3 random medium
  const mediumSelected = shuffle([...mediumInspect]).slice(0, 4);

  // 3 random hard
  const hardSelected = shuffle([...hardInspect]).slice(0, 2);

  // Final ordered list
  const finalQuestions = [
    ...cSelected,
    ...pythonSelected,
    ...societySelected,
    ...mediumSelected,
    ...hardSelected
  ];

  return finalQuestions;
}

