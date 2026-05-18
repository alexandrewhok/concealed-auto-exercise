import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
`;
