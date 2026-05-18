import { useState } from "react";
import type { ResultCardProps } from "./models";
import {
  Arrow,
  BreakdownLabel,
  BreakdownList,
  BreakdownRow,
  BreakdownValue,
  Card,
  CardTop,
  CarDetails,
  CarImage,
  CarTitle,
  CostSection,
  CostToggle,
  CostToggleLeft,
  DetailItem,
  Divider,
  InfoSection,
  IUCLabel,
  IUCNote,
  IUCValue,
  MarketplaceLink,
  MatchLabel,
  MatchedTag,
  MatchedTagsRow,
  Tag,
  TagsRow,
  TotalPrice,
} from "./styles";

const formatEUR = (value: number) =>
  new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

const ResultCard = ({ match, costs }: ResultCardProps) => {
  const { car, matchedTags } = match;
  const [open, setOpen] = useState(false);
  const matchedSet = new Set(matchedTags);
  const uniqueMatchedTags = [...matchedSet];

  return (
    <Card>
      <CardTop>
        <CarImage src={car.photo_url} alt={`${car.make} ${car.model}`} />

        <InfoSection>
          <CarTitle>{car.make} {car.model}</CarTitle>

          <MatchLabel>Este é o carro ideal porque encaixa nestas categorias que escolheste:</MatchLabel>
          <MatchedTagsRow>
            {uniqueMatchedTags.map((tag) => (
              <MatchedTag key={tag}>{tag}</MatchedTag>
            ))}
          </MatchedTagsRow>

          <TagsRow>
            {car.tags.map((tag) => (
              <Tag key={tag} $matched={matchedSet.has(tag)}>
                {tag}
              </Tag>
            ))}
          </TagsRow>

          <CarDetails>
            <DetailItem>Ano: <strong>{car.year}</strong></DetailItem>
            <DetailItem>Quilómetros: <strong>{car.mileage_km.toLocaleString("pt-PT")} km</strong></DetailItem>
            <DetailItem>Transmissão: <strong>{car.transmission === "manual" ? "Manual" : "Automática"}</strong></DetailItem>
            <DetailItem>Combustível: <strong>{car.fuel === "gasoline" ? "Gasolina" : "Diesel"}</strong></DetailItem>
          </CarDetails>

          <MarketplaceLink href={car.marketplace_url} target="_blank" rel="noopener noreferrer">
            Ver o anúncio →
          </MarketplaceLink>
        </InfoSection>
      </CardTop>

      <CostSection>
        <CostToggle onClick={() => setOpen((o) => !o)}>
          <CostToggleLeft>
            <Arrow $open={open}>▼</Arrow>
            Preço Chave na Mão
          </CostToggleLeft>
          <TotalPrice>{formatEUR(costs.total)}</TotalPrice>
        </CostToggle>

        {open && (
          <BreakdownList>
            <BreakdownRow>
              <BreakdownLabel>Preço do veículo</BreakdownLabel>
              <BreakdownValue>{formatEUR(costs.price)}</BreakdownValue>
            </BreakdownRow>
            <BreakdownRow>
              <BreakdownLabel>ISV</BreakdownLabel>
              <BreakdownValue>{formatEUR(costs.isv)}</BreakdownValue>
            </BreakdownRow>
            <BreakdownRow>
              <BreakdownLabel>Transporte</BreakdownLabel>
              <BreakdownValue>{formatEUR(costs.transport)}</BreakdownValue>
            </BreakdownRow>
            <BreakdownRow>
              <BreakdownLabel>Legalização</BreakdownLabel>
              <BreakdownValue>{formatEUR(costs.legalization)}</BreakdownValue>
            </BreakdownRow>

            <Divider />

            <BreakdownRow>
              <BreakdownLabel style={{ fontWeight: 600, color: "inherit" }}>Total</BreakdownLabel>
              <BreakdownValue style={{ fontWeight: 700 }}>{formatEUR(costs.total)}</BreakdownValue>
            </BreakdownRow>

            <IUCNote>
              <IUCLabel>IUC anual (custo recorrente)</IUCLabel>
              <IUCValue>{formatEUR(costs.iucAnnual)}</IUCValue>
            </IUCNote>
          </BreakdownList>
        )}
      </CostSection>
    </Card>
  );
};

export default ResultCard;
