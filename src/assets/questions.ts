import { Question } from "../interfaces";

export const quizData: Question[] = [
  {
    text: "What is the largest mammal on Earth?",
    answers: [
      { id: 1, text: "Elephant" },
      { id: 2, text: "Blue Whale" },
      { id: 3, text: "Giraffe" },
      { id: 4, text: "Gorilla" },
    ],
    correctAnswerId: 2,
  },
  {
    text: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { id: 1, text: "Charles Dickens" },
      { id: 2, text: "William Shakespeare" },
      { id: 3, text: "Jane Austen" },
      { id: 4, text: "Mark Twain" },
    ],
    correctAnswerId: 2,
  },
  {
    text: "In which year did the Titanic sink?",
    answers: [
      { id: 1, text: "1912" },
      { id: 2, text: "1905" },
      { id: 3, text: "1925" },
      { id: 4, text: "1931" },
    ],
    correctAnswerId: 1,
  },
  {
    text: "What is the currency of Japan?",
    answers: [
      { id: 1, text: "Won" },
      { id: 2, text: "Yuan" },
      { id: 3, text: "Yen" },
      { id: 4, text: "Ringgit" },
    ],
    correctAnswerId: 3,
  },
  {
    text: "Which planet is known as the 'Red Planet'?",
    answers: [
      { id: 1, text: "Venus" },
      { id: 2, text: "Mars" },
      { id: 3, text: "Jupiter" },
      { id: 4, text: "Saturn" },
    ],
    correctAnswerId: 2,
  },
];
