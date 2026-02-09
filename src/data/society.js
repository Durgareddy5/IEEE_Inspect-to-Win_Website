const society =[
  {
    "id": 1,
    "level": "IEEE",
    "question": "What is the output of this 2-input AND gate?\n\nInput A = 1\nInput B = 0\nOutput = ?",
    "options": ["0", "1", "High Impedance", "Undefined"],
    "correct": "0",
    "hints": "AND gate outputs 1 only when both inputs are 1."
  },
  {
    "id": 2,
    "level": "IEEE",
    "question": "Convert binary 1011 to decimal.\n\nBinary: 1011\nDecimal = ?",
    "options": ["9", "10", "11", "12"],
    "correct": "11",
    "hints": "Calculate: 1×8 + 0×4 + 1×2 + 1×1"
  },
  {
    "id": 3,
    "level": "IEEE",
    "question": "What is the output of this XOR gate?\n\nInput A = 1\nInput B = 1\nOutput = ?",
    "options": ["0", "1", "High Impedance", "X"],
    "correct": "0",
    "hints": "XOR outputs 1 when inputs are different."
  },
  {
    "id": 4,
    "level": "IEEE",
    "question": "What is the 2's complement of binary 0101?\n\nOriginal: 0101\n2's Complement = ?",
    "options": ["1010", "1011", "0101", "1100"],
    "correct": "1011",
    "hints": "Invert all bits then add 1."
  },
  {
    "id": 5,
    "level": "IEEE",
    "question": "What is the output of a NOT gate with input 1?\n\nInput = 1\nOutput = ?",
    "options": ["0", "1", "High Impedance", "X"],
    "correct": "0",
    "hints": "NOT gate inverts the input."
  },
  {
    "id": 6,
    "level": "IEEE",
    "question": "How many rows are in a truth table for 3 input variables?\n\nNumber of inputs = 3\nNumber of rows = ?",
    "options": ["6", "8", "9", "3"],
    "correct": "8",
    "hints": "Formula: 2^n where n is number of inputs."
  },
  {
    "id": 7,
    "level": "IEEE",
    "question": "What is the hexadecimal equivalent of binary 1111?\n\nBinary: 1111\nHexadecimal = ?",
    "options": ["E", "F", "10", "15"],
    "correct": "F",
    "hints": "1111 in binary equals 15 in decimal."
  },
  {
    "id": 8,
    "level": "IEEE",
    "question": "What is the output of OR gate with inputs A=0, B=0?\n\nInput A = 0\nInput B = 0\nOutput = ?",
    "options": ["0", "1", "X", "Z"],
    "correct": "0",
    "hints": "OR outputs 1 if at least one input is 1."
  },
  {
    "id": 9,
    "level": "IEEE",
    "question": "What is the decimal value of hexadecimal A?\n\nHexadecimal: A\nDecimal = ?",
    "options": ["9", "10", "11", "12"],
    "correct": "10",
    "hints": "In hex: A=10, B=11, C=12, D=13, E=14, F=15"
  },
  {
    "id": 10,
    "level": "IEEE",
    "question": "What is the output of NAND gate with inputs A=1, B=1?\n\nInput A = 1\nInput B = 1\nOutput = ?",
    "options": ["0", "1", "X", "Z"],
    "correct": "0",
    "hints": "NAND is NOT of AND gate."
  }
]

export default society;