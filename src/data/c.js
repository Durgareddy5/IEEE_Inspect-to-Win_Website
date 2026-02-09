const cLang=[
  {
    "id": 1,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d \", x++);\n    printf(\"%d \", ++x);\n    printf(\"%d\\n\", x);\n    return 0;\n}",
    "options": ["5 6 7", "5 7 7", "6 7 7", "5 6 6"],
    "correct": "5 7 7",
    "hints": "Check the difference between x++ and ++x."
  },
  {
    "id": 2,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int x, y;\n    x = (y = 3, y + 2);\n    printf(\"%d %d\\n\", x, y);\n    return 0;\n}",
    "options": ["3 3", "3 5", "5 3", "5 5"],
    "correct": "5 3",
    "hints": "Look at what the comma operator does."
  },
  {
    "id": 3,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30};\n    printf(\"%d\", 2[arr]);\n    return 0;\n}",
    "options": ["10", "20", "30", "Compilation Error"],
    "correct": "30",
    "hints": "arr[i] and i[arr] are equivalent in C."
  },
  {
    "id": 4,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    printf(\"%s\", \"Brainiac\" + 3);\n    return 0;\n}",
    "options": ["Bra", "iniac", "Brainiac3", "i"],
    "correct": "iniac",
    "hints": "Adding to a string pointer moves the starting position."
  },
  {
    "id": 5,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int x = printf(\"Hello\");\n    printf(\"%d\", x);\n    return 0;\n}",
    "options": ["Hello", "Hello6", "Hello5", "5"],
    "correct": "Hello5",
    "hints": "What does printf return?"
  },
  {
    "id": 6,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int a = 012;\n    printf(\"%d\", a);\n    return 0;\n}",
    "options": ["12", "10", "0", "012"],
    "correct": "10",
    "hints": "A leading zero means something special."
  },
  {
    "id": 7,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = arr;\n    printf(\"%d \", *(p++));\n    printf(\"%d\", *++p);\n    return 0;\n}",
    "options": ["10 20", "20 30", "10 30", "10 40"],
    "correct": "10 30",
    "hints": "When does the pointer increment happen?"
  },
  {
    "id": 8,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int x = 2;\n    switch(x) {\n        case 1: printf(\"One \");\n        case 2: printf(\"Two \");\n        case 3: printf(\"Three \");\n        default: printf(\"End\\n\");\n    }\n    return 0;\n}",
    "options": ["Two", "Two Three End", "Two Three", "One Two Three End"],
    "correct": "Two Three End",
    "hints": "Are there any break statements?"
  },
  {
    "id": 9,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", x << 2);\n    return 0;\n}",
    "options": ["10", "7", "20", "25"],
    "correct": "20",
    "hints": "Left shift is like multiplying by powers of 2."
  },
  {
    "id": 10,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int a = 1;\n    printf(\"%d\", a+++a);\n    return 0;\n}",
    "options": ["2", "3", "4", "1"],
    "correct": "3",
    "hints": "How is a+++ parsed?"
  },
  {
    "id": 11,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    char c = 255;\n    c = c + 5;\n    printf(\"%d\", c);\n    return 0;\n}",
    "options": ["260", "5", "0", "4"],
    "correct": "4",
    "hints": "What's the range of a char?"
  },
  {
    "id": 12,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int x = ~0;\n    printf(\"%d\", x);\n    return 0;\n}",
    "options": ["0", "1", "-1", "255"],
    "correct": "-1",
    "hints": "Bitwise NOT flips all bits."
  },
  {
    "id": 13,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    char *p = \"Hello\" + 1;\n    printf(\"%c\", *p);\n    return 0;\n}",
    "options": ["H", "e", "Hello", "ello"],
    "correct": "e",
    "hints": "Where does the pointer point after +1?"
  },
  {
    "id": 14,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int x = 3;\n    printf(\"%d\", x = !x);\n    return 0;\n}",
    "options": ["3", "1", "0", "-3"],
    "correct": "0",
    "hints": "What is !3?"
  },
  {
    "id": 15,
    "level": "cLang",
    "question": "What is the output of this program?\n\n#include <stdio.h>\nint main() {\n    int x = 1, y = 2, z;\n    z = x, y;\n    printf(\"%d\", z);\n    return 0;\n}",
    "options": ["1", "2", "0", "Compilation Error"],
    "correct": "1",
    "hints": "Check operator precedence: = vs ,"
  }
]

export default cLang;
