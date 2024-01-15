import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { quizData } from "../../assets/questions";
import { useScore } from "../../providers/ScoreProvider";
import "./index.css";

const Quiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const history = useHistory();
  const { handleChangeScore } = useScore();

  const handleNext = () => {
    if (currentQuestion === quizData.length - 1) {
      const correctAnswers = selectedAnswers.filter(
        (answerId, index) => quizData[index].correctAnswerId === answerId
      ).length;
      const percentageScore = (correctAnswers / quizData.length) * 100;
      handleChangeScore(percentageScore);
      history.push("score");
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleAnswerSelect = (answerId: number) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[currentQuestion] = answerId;

      return updatedAnswers;
    });
  };

  return (
    <div className={"container"}>
      <h1>{`Question ${currentQuestion + 1}`}</h1>
      <p>{quizData[currentQuestion].text}</p>
      <ul>
        {quizData[currentQuestion].answers.map((answer) => (
          <li key={answer.id}>
            <label>
              <input
                type="radio"
                name="answer"
                value={answer.id}
                checked={selectedAnswers[currentQuestion] === answer.id}
                onChange={() => handleAnswerSelect(answer.id)}
              />
              {answer.text}
            </label>
          </li>
        ))}
      </ul>
      <div>
        {currentQuestion > 0 && (
          <button onClick={handlePrev}>{"Previous"}</button>
        )}
        <button
          onClick={handleNext}
          disabled={!selectedAnswers[currentQuestion]}
        >
          {currentQuestion === quizData.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
