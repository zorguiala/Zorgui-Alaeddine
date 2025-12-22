import styled from 'styled-components';
import { fadeIn, scaleIn } from '@/styles/animations';

export const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.bg.secondary};
  border: 1px solid ${({ theme }) => theme.colors.accent.primary};
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 0 40px ${({ theme }) => theme.colors.glow.primary};
  animation: ${scaleIn} 0.4s ease;
`;

export const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent.primary};
  text-align: center;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.muted};
  text-align: center;
  margin-bottom: 24px;
`;

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Instruction = styled.div<{ $index: number }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.bg.tertiary};
  border-radius: 8px;
  animation: ${fadeIn} 0.3s ease;
  animation-delay: ${(props) => props.$index * 0.1}s;
  animation-fill-mode: backwards;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.colors.accent.primary}20;
  border-radius: 8px;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

export const InstructionText = styled.div`
  flex: 1;
`;

export const InstructionTitle = styled.h4`
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 4px 0;
`;

export const InstructionDesc = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0;
  line-height: 1.5;
`;

export const ObjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 16px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.bg.primary};
  border-radius: 8px;
`;

export const ObjectItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.text.secondary};

  &::before {
    content: '▸';
    color: ${({ theme }) => theme.colors.accent.tertiary};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: ${({ theme }) => theme.colors.accent.primary};
  border: none;
  border-radius: 8px;
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.bg.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.colors.glow.primary};
  }

  &:active {
    transform: translateY(0);
  }
`;

