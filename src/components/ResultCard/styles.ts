import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => `${theme.colors.secondary}4D`};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
`;

export const CardTop = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CarImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const ImageFallback = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 8px;
  flex-shrink: 0;
  background-color: ${({ theme }) => `${theme.colors.secondary}4D`};
  border: 1px solid ${({ theme }) => `${theme.colors.secondary}4D`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const CarTitle = styled.h4`
  margin: 0;
`;

export const MatchLabel = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 12px;
  margin: 0;
`;

export const MatchedTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const MatchedTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 2px 8px;
  border-radius: 20px;
  background-color: ${({ theme }) => `${theme.colors.secondary}4D`};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const CarDetails = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const DetailItem = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.tertiary};

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Tag = styled.span<{ $matched: boolean }>`
  font-size: 11px;
  font-weight: 500;
  text-transform: capitalize;
  color: ${({ theme, $matched }) =>
    $matched ? theme.colors.primary : theme.colors.tertiary};
`;

export const MarketplaceLink = styled.a`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const CostSection = styled.div`
  padding: 0 20px 20px;
`;

export const CostToggle = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: ${({ theme }) => `${theme.colors.secondary}4D`};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const CostToggleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
`;

export const Arrow = styled.span<{ $open: boolean }>`
  font-size: 10px;
  transition: transform 0.2s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const TotalPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const BreakdownList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px 16px;
  gap: 8px;
`;

export const BreakdownRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BreakdownLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const BreakdownValue = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => `${theme.colors.secondary}4D`};
  margin: 4px 0;
`;

export const IUCNote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  padding-top: 8px;
  border-top: 1px dashed ${({ theme }) => `${theme.colors.secondary}4D`};
`;

export const IUCLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const IUCValue = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.tertiary};
`;
