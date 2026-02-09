const python=[
  {
    "id": 1,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\nx = [1, 2, 3]\nprint(x * 2)",
    "options": ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "[[1, 2, 3], [1, 2, 3]]", "Error: Unsupported operand type"],
    "correct": "[1, 2, 3, 1, 2, 3]",
    "hints": "What does list * number do?"
  },
  {
    "id": 2,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\nx = \"hello\"\nprint(x[::-1])",
    "options": ["hello", "o", "olleh", "h"],
    "correct": "olleh",
    "hints": "What does ::-1 mean in slicing?"
  },
  {
    "id": 3,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\na = [1, 2, 3]\nb = a[:]\nb.append(4)\nprint(a)",
    "options": ["[1, 2, 3]", "[1, 2, 3, 4]", "None", "Error: Invalid syntax"],
    "correct": "[1, 2, 3]",
    "hints": "Does a[:] create a reference or copy?"
  },
  {
    "id": 4,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\nx = [1, 2, 3]\ny = x.append(4)\nprint(y)",
    "options": ["[1, 2, 3, 4]", "4", "None", "[1, 2, 3]"],
    "correct": "None",
    "hints": "What does append() return?"
  },
  {
    "id": 5,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\nx = [[]] * 3\nx[0].append(1)\nprint(x)",
    "options": ["[[1], [], []]", "[[1], [1], [1]]", "[[1], [0], [0]]", "[1, 1, 1]"],
    "correct": "[[1], [1], [1]]",
    "hints": "Does * create copies or references?"
  },
  {
    "id": 6,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\na = [1, 2, 3]\nb = a\na += [4, 5]\nprint(b)",
    "options": ["[1, 2, 3]", "[1, 2, 3, 4, 5]", "None", "[4, 5]"],
    "correct": "[1, 2, 3, 4, 5]",
    "hints": "Does += modify in-place?"
  },
  {
    "id": 7,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\nx = [1, 2, 3]\ny = [*x, *x]\nx.append(4)\nprint(y)",
    "options": ["[1, 2, 3, 4, 1, 2, 3, 4]", "[[1, 2, 3], [1, 2, 3]]", "[1, 2, 3, 1, 2, 3]", "Error: Star operator not allowed here"],
    "correct": "[1, 2, 3, 1, 2, 3]",
    "hints": "Does unpacking create a new list?"
  },
  {
    "id": 8,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\na = {'x': 1}\nb = a.copy()\na['x'] = 2\nprint(b['x'])",
    "options": ["1", "2", "{'x': 1}", "None"],
    "correct": "1",
    "hints": "Does copy() create a separate dictionary?"
  },
  {
    "id": 9,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\nprint([1, 2, 3][-1])",
    "options": ["1", "-1", "3", "Error: Index out of range"],
    "correct": "3",
    "hints": "What does negative indexing mean?"
  },
  {
    "id": 10,
    "level": "pythonLang",
    "question": "What is the output of this program?\n\na = [1, 2, 3]\nb = a.reverse()\nprint(b)",
    "options": ["[3, 2, 1]", "[1, 2, 3]", "None", "3, 2, 1"],
    "correct": "None",
    "hints": "What does reverse() return?"
  }
]


export default python;