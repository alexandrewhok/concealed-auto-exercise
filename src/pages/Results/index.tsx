import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ButtonTypes } from "../../components/Button/models";
import { useQuizStore } from "../../store/quizStore";
import { matchCars } from "../../utils/matching";
import { calcBreakdown } from "../../utils/costs";
import { EmptyMessage, EmptyState, Wrapper } from "./styles";

const Results = () => {
  const navigate = useNavigate();
  const answers = useQuizStore((s) => s.answers);
  const matches = useMemo(() => matchCars(answers), [answers]);

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

  console.log("Quiz answers:", answers);
  console.log(
    "Top 3 matches:",
    matches.map((m) => ({
      car: `${m.car.make} ${m.car.model}`,
      score: m.score,
      matchedTags: m.matchedTags,
      contradictedTags: m.contradictedTags,
      costs: calcBreakdown(m.car),
    }))
  );

  return (
    <Wrapper>
      <h1>Results</h1>
    </Wrapper>
  );
};

export default Results;
