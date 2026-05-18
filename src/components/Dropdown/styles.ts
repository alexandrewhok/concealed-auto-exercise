import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const Select = styled.select`
  appearance: none;
  background-color: ${({ theme }) => `${theme.colors.secondary}4D`};
  border: 1px solid ${({ theme }) => `${theme.colors.secondary}4D`};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 6px 36px 6px 10px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.secondary};
  }

  option {
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Arrow = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
`;
