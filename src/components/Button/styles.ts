import styled, { css } from "styled-components";
import { ButtonTypes } from "./models";

const buttonTypeStyles = {
  [ButtonTypes.PRIMARY]: css`
    ${({ theme }) => `
      border-color: ${theme.colors.intents.primary.base};
      background-color: ${theme.colors.intents.primary.base};
      color: ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.intents.primary.hover};
        border-color: ${theme.colors.intents.primary.hover};
      }

      &:active {
        background-color: ${theme.colors.intents.primary.pressed};
        border-color: ${theme.colors.intents.primary.pressed};
      }

      &:disabled {
        background-color: ${theme.colors.disabledBg};
        border-color: ${theme.colors.disabledBg};
        color: ${theme.colors.disabledText};
      }
    `}
  `,

  [ButtonTypes.SUCCESS]: css`
    ${({ theme }) => `
      border-color: ${theme.colors.intents.success.base};
      background-color: ${theme.colors.intents.success.base};
      color: ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.intents.success.hover};
      }

      &:active {
        background-color: ${theme.colors.intents.success.pressed};
      }

      &:disabled {
        background-color: ${theme.colors.disabledBg};
        border-color: ${theme.colors.disabledBg};
        color: ${theme.colors.disabledText};
      }
    `}
  `,

  [ButtonTypes.DANGER]: css`
    ${({ theme }) => `
      border-color: ${theme.colors.intents.danger.base};
      background-color: ${theme.colors.intents.danger.base};
      color: ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.intents.danger.hover};
      }

      &:active {
        background-color: ${theme.colors.intents.danger.pressed};
      }

      &:disabled {
        background-color: ${theme.colors.disabledBg};
        border-color: ${theme.colors.disabledBg};
        color: ${theme.colors.disabledText};
      }
    `}
  `,

  [ButtonTypes.SECONDARY]: css`
    ${({ theme }) => `
      border-color: ${theme.colors.tertiary};
      background-color: transparent;
      color: ${theme.colors.secondary};

      &:hover {
        background-color: ${theme.colors.primary};
      }

      &:active {
        background-color: ${theme.colors.primary};
      }

      &:disabled {
        background-color: ${theme.colors.disabledBg};
        border-color: ${theme.colors.disabledBg};
        color: ${theme.colors.disabledText};
      }
    `}
  `,

  [ButtonTypes.TEXT]: css`
    ${({ theme }) => `
      border-color: transparent;
      background-color: transparent;
      color: ${theme.colors.secondary};

      &:hover {
        background-color: ${theme.colors.primary};
      }

      &:active {
        background-color: ${theme.colors.primary};
      }

      &:disabled {
        background-color: transparent;
        border-color: transparent;
        color: ${theme.colors.disabledText};
      }
    `}
  `,
};

export const StyledButton = styled.button<{ $type: ButtonTypes }>`
  ${() => `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 9px 12px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;

    font-size: 12px;
    font-weight: 600;
    cursor: pointer;

    transition: background-color 0.15s ease, transform 0.1s ease, opacity 0.15s ease;

    &:disabled {
      cursor: not-allowed;
      transform: none;
      opacity: 0.9;
    }

    &:active:not(:disabled) {
      transform: scale(0.97);
    }
  `}

  ${({ $type }) => buttonTypeStyles[$type]}
`;
