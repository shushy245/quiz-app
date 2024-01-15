import React, { createContext, useContext, useState } from "react";

interface ScoreContextProps {
  score: number;
  handleChangeScore: (value: number) => void;
}

const ScoreContext = createContext<ScoreContextProps | undefined>(undefined);

export const ScoreProvider: React.FC = ({ children }) => {
  const [score, setScore] = useState<number>(0);

  const handleChangeScore = (value: number) => {
    setScore(value);
  };

  const contextValue: ScoreContextProps = {
    score,
    handleChangeScore,
  };

  return (
    <ScoreContext.Provider value={contextValue}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
