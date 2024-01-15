import React from "react";
import { useHistory } from "react-router-dom";

import { useScore } from "../../providers/ScoreProvider";

export default () => {
  const { score } = useScore();
  const history = useHistory();

  const goToQuiz = () => {
    history.push("quiz");
  };

  return (
    <div className={"container"}>
      <div>{`Quiz Finished! Your Score is ${score}`}</div>
      <button onClick={goToQuiz}>{"Take Another Quiz"}</button>
    </div>
  );
};
