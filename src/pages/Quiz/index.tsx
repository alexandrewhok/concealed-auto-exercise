import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionFooter from "../../components/ActionFooter";
import QuestionBlock from "../../components/QuestionBlock";
import { useQuizStore } from "../../store/quizStore";
import type { QuizAnswers } from "./models";
import { QUESTIONS } from "./constants";
import { Content, ScrollArea, Title, Wrapper } from "./styles";

const MANDATORY_IDS = QUESTIONS.filter((q) => q.type !== "select").map((q) => q.id);

const Quiz = () => {
  const navigate = useNavigate();
  const { setAnswer, answers: storedAnswers } = useQuizStore((s) => s);

  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const [id, value] of Object.entries(storedAnswers)) {
      if (value !== undefined) initial[id] = String(value);
    }
    return initial;
  });

  const allAnswered = MANDATORY_IDS.every((id) => answers[id] !== undefined);

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    for (const [id, value] of Object.entries(answers)) {
      if (id === "budget" || id === "maxMileage") {
        setAnswer(id as keyof QuizAnswers, Number(value));
      } else {
        setAnswer(id as keyof QuizAnswers, value);
      }
    }
    navigate("/results");
  };

  return (
    <Wrapper>
      <ScrollArea>
        <Content>
          <Title>Questionário</Title>
          {QUESTIONS.map((q) => (
            <QuestionBlock
              key={q.id}
              question={q}
              selectedValue={answers[q.id]}
              onSelect={(value) => handleSelect(q.id, value)}
            />
          ))}
        </Content>
      </ScrollArea>

      <ActionFooter
        confirmLabel="Ver recomendações"
        confirmDisabled={!allAnswered}
        onCancel={() => navigate("/")}
        onConfirm={handleSubmit}
      />
    </Wrapper>
  );
};

export default Quiz;
