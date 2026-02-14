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



// import cQuestions from "../data/c";
// import pythonQuestions from "../data/python";
// import societyQuestions from "../data/society";
// import inspectQuestions from "../data/questions";
// import { shuffle } from "./shuffle";

// export function buildGameQuestions() {
//   // Get previously used question IDs from localStorage
//   let usedIds = [];
//   try {
//     const stored = localStorage.getItem("usedQuestionIds");
//     usedIds = stored ? JSON.parse(stored) : [];
//   } catch (e) {
//     console.warn("Could not read used question IDs:", e);
//     usedIds = [];
//   }

//   const newlyUsedIds = [];

//   // Helper function to select questions while avoiding previously used ones
//   const selectQuestions = (pool, count, poolName) => {
//     // Filter out already used questions
//     let available = pool.filter((q) => !usedIds.includes(q.id));

//     // If not enough unused questions, reset this pool's history
//     if (available.length < count) {
//       console.log(`Not enough unused ${poolName} questions, resetting pool history`);
//       available = [...pool];
//       // Remove this pool's IDs from usedIds
//       const poolIds = pool.map((q) => q.id);
//       usedIds = usedIds.filter((id) => !poolIds.includes(id));
//     }

//     // Select random questions
//     const selected = shuffle(available).slice(0, count);
    
//     // Track newly selected IDs (don't save yet)
//     selected.forEach((q) => {
//       if (q.id) newlyUsedIds.push(q.id);
//     });

//     return selected;
//   };

//   // 2 random C questions
//   const cSelected = selectQuestions(cQuestions, 2, "C");

//   // 1 random Python question
//   const pythonSelected = selectQuestions(pythonQuestions, 1, "Python");

//   // 1 random Society question
//   const societySelected = selectQuestions(societyQuestions, 1, "Society");

//   // Inspect questions filter
//   const mediumInspect = inspectQuestions.filter((q) => q.level === "medium");
//   const hardInspect = inspectQuestions.filter((q) => q.level === "hard");

//   // 4 random medium
//   const mediumSelected = selectQuestions(mediumInspect, 4, "Medium Inspect");

//   // 2 random hard
//   const hardSelected = selectQuestions(hardInspect, 2, "Hard Inspect");

//   // Final ordered list
//   const finalQuestions = [
//     ...cSelected,
//     ...pythonSelected,
//     ...societySelected,
//     ...mediumSelected,
//     ...hardSelected
//   ];

//   // Return questions with metadata (caller decides when to save)
//   return {
//     questions: finalQuestions,
//     selectedIds: newlyUsedIds,
//     previousIds: usedIds
//   };
// }

