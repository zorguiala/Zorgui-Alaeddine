import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.md};
  backdrop-filter: blur(10px);

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.accent.primary};
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 2px currentColor);
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`;

