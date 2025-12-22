import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 12px;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: ${({ theme }) => theme.colors.bg.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: translateY(-3px) scale(1.05);
    background: ${({ theme }) => theme.colors.accent.primary + '15'};

    svg {
      color: ${({ theme }) => theme.colors.accent.primary};
      filter: drop-shadow(0 0 4px currentColor);
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: all 0.3s ease;
  }
`;

