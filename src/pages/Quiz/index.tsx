import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionFooter from "../../components/ActionFooter";
import QuestionBlock from "../../components/QuestionBlock";
import { useQuizStore } from "../../store/quizStore";
import type { QuizAnswers } from "./models";
import { QUESTIONS } from "./constants";
import { Content, Title, Wrapper } from "./styles";

const Quiz = () => {
  const navigate = useNavigate();
  const setAnswer = useQuizStore((s) => s.setAnswer);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    for (const [id, value] of Object.entries(answers)) {
      if (id === "budget") {
        setAnswer(id as keyof QuizAnswers, Number(value));
      } else {
        setAnswer(id as keyof QuizAnswers, value);
      }
    }
    navigate("/results");
  };

  return (
    <Wrapper>
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

      <ActionFooter
        confirmLabel="Ver recomendações"
        onCancel={() => navigate("/")}
        onConfirm={handleSubmit}
      />
    </Wrapper>
  );
};

export default Quiz;
