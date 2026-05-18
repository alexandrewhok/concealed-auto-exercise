import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
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
