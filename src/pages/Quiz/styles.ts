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
`;

export const Title = styled.h3`
  margin-bottom: 32px;
`;

