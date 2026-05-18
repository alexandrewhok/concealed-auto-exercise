import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors.base};
`;

export const Brand = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  cursor: pointer;

  h5:first-child {
    color: ${({ theme }) => theme.colors.primary};
  }

  h5:last-child {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
