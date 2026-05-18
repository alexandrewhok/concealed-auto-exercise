import styled from "styled-components";

export const Wrapper = styled.div<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 6px 10px;
  border-radius: 6px;

  background-color: ${({ theme }) => `${theme.colors.secondary}4D`};

  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.secondary : `${theme.colors.secondary}4D`};

  box-shadow: ${({ theme, $selected }) =>
    $selected ? `0 0 0 1px ${theme.colors.secondary}` : "none"};

  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
  user-select: none;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const Radio = styled.div<{ $selected: boolean }>`
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;

  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.secondary : theme.colors.primary};

  transition: 0.2s ease;

  &::after {
    content: "";
    display: ${({ $selected }) => ($selected ? "block" : "none")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
