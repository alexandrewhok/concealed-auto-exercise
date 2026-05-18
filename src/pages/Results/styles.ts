import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Content = styled.div`
  padding: 40px 24px;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Subtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const AnswersSummary = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1.6;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 24px;
  text-align: center;
  padding: 0 24px;
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  max-width: 420px;
`;
