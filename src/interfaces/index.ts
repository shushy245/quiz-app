export interface Answer {
  id: number;
  text: string;
}

export interface Question {
  text: string;
  answers: Answer[];
  correctAnswerId: number;
}
