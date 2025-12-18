import { ReactNode } from 'react';
import styled from 'styled-components';
import { scaleIn } from '@/styles/animations';

export type CardAccent = 'green' | 'orange' | 'cyan' | 'purple';

const accentColors: Record<CardAccent, { primary: string; glow: string }> = {
  green: { primary: '#00ff88', glow: 'rgba(0, 255, 136, 0.2)' },
  orange: { primary: '#ff6b35', glow: 'rgba(255, 107, 53, 0.2)' },
  cyan: { primary: '#00d4ff', glow: 'rgba(0, 212, 255, 0.2)' },
  purple: { primary: '#a855f7', glow: 'rgba(168, 85, 247, 0.2)' },
};

const CardWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  pointer-events: none;
  z-index: 50;
`;

const Card = styled.div<{ $accent: CardAccent }>`
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid ${(props) => accentColors[props.$accent].primary};
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 520px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px ${(props) => accentColors[props.$accent].glow},
              0 20px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  animation: ${scaleIn} 0.3s ease;
  pointer-events: auto;

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 16px;
    max-height: 70vh;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 8px;
  }
`;

const Header = styled.div<{ $accent: CardAccent }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${(props) => accentColors[props.$accent].primary}33;
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`;

const WindowButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const WindowButton = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

const Title = styled.span<{ $accent: CardAccent }>`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: ${(props) => accentColors[props.$accent].primary};
  margin-left: 8px;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

interface TerminalCardProps {
  title: string;
  accent?: CardAccent;
  children: ReactNode;
}

export const TerminalCard = ({
  title,
  accent = 'green',
  children,
}: TerminalCardProps) => {
  return (
    <CardWrapper>
      <Card $accent={accent}>
        <Header $accent={accent}>
          <WindowButtons>
            <WindowButton $color="#ff5f57" />
            <WindowButton $color="#febc2e" />
            <WindowButton $color="#28c840" />
          </WindowButtons>
          <Title $accent={accent}>{title}</Title>
        </Header>
        <Content>{children}</Content>
      </Card>
    </CardWrapper>
  );
};

