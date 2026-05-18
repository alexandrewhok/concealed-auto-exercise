import { useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ButtonTypes } from "../../components/Button/models";
import ResultCard from "../../components/ResultCard";
import { QUESTIONS } from "../Quiz/constants";
import { useQuizStore } from "../../store/quizStore";
import { calcBreakdown } from "../../utils/costs";
import { matchCars } from "../../utils/matching";
import {
  AnswersSummary,
  Content,
  EmptyMessage,
  EmptyState,
  Header,
  ScrollArea,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

const Results = () => {
  const navigate = useNavigate();
  const answers = useQuizStore((s) => s.answers);
  const matches = useMemo(() => matchCars(answers), [answers]);

  if (Object.keys(answers).length === 0) {
    return <Navigate to="/quiz" replace />;
  }

  const answerLabels = QUESTIONS
    .filter((q) => answers[q.id as keyof typeof answers] !== undefined)
    .map((q) => {
      const value = String(answers[q.id as keyof typeof answers]);
      return q.options.find((o) => o.value === value)?.label ?? value;
    });

  if (matches.length === 0) {
    return (
      <Wrapper>
        <EmptyState>
          <h3>Sem resultados</h3>
          <EmptyMessage>
            Desculpa, não existe nenhum carro disponível de momento que
            corresponda a essas características.
          </EmptyMessage>
          <Button
            label="Voltar ao questionário"
            intent={ButtonTypes.PRIMARY}
            onClick={() => navigate("/quiz")}
          />
        </EmptyState>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ScrollArea>
        <Content>
          <Header>
            <Title>Os teus resultados</Title>
            <Subtitle>Com base nas tuas opções:</Subtitle>
            <AnswersSummary>{answerLabels.join(" · ")}</AnswersSummary>
          </Header>
          {matches.map((match) => (
            <ResultCard
              key={match.car.id}
              match={match}
              costs={calcBreakdown(match.car)}
            />
          ))}
        </Content>
      </ScrollArea>
    </Wrapper>
  );
};

export default Results;
