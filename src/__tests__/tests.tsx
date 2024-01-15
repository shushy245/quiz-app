import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Quiz } from "../routes";
import { quizData } from "../assets/questions";
import { ScoreProvider } from "../providers/ScoreProvider";

describe("Quiz Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <ScoreProvider>
          <Quiz />
        </ScoreProvider>
      </MemoryRouter>
    );
  });

  it("displays the first question initially", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ScoreProvider>
          <Quiz />
        </ScoreProvider>
      </MemoryRouter>
    );

    expect(getByText(quizData[0].text)).toBeInTheDocument();
  });

  it("handles answer selection and updates state", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <ScoreProvider>
          <Quiz />
        </ScoreProvider>
      </MemoryRouter>
    );

    const answerInput = getByLabelText(
      quizData[0].answers[0].text
    ) as HTMLInputElement;
    fireEvent.click(answerInput);

    expect(answerInput.checked).toBe(true);
  });

  it('navigates to the next question on "Next" button click', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ScoreProvider>
          <Quiz />
        </ScoreProvider>
      </MemoryRouter>
    );

    const answerInput = getByText(
      quizData[0].answers[0].text
    ) as HTMLInputElement;
    fireEvent.click(answerInput);
    fireEvent.click(getByText("Next"));

    expect(getByText(quizData[1].text)).toBeInTheDocument();
  });

  it('navigates to the previous question on "Previous" button click', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ScoreProvider>
          <Quiz />
        </ScoreProvider>
      </MemoryRouter>
    );

    const answerInput = getByText(
      quizData[0].answers[0].text
    ) as HTMLInputElement;
    fireEvent.click(answerInput);
    fireEvent.click(getByText("Next"));
    fireEvent.click(getByText("Previous"));

    expect(getByText(quizData[0].text)).toBeInTheDocument();
  });
});
