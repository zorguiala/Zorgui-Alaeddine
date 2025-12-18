import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { pulse, fadeIn } from '@/styles/animations';

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  inset: 0;
  background: #0a0a0f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
  transition: opacity 0.5s ease;
`;

const Logo = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #00ff88;
  text-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
  animation: ${pulse} 2s ease-in-out infinite;
`;

const LoadingText = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #666;
  margin-top: 20px;
  animation: ${fadeIn} 0.5s ease;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 2px;
  background: #1a1a24;
  border-radius: 1px;
  margin-top: 16px;
  overflow: hidden;
`;

const Progress = styled.div<{ progress: number }>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background: linear-gradient(90deg, #00ff88, #00d4ff);
  border-radius: 1px;
  transition: width 0.3s ease;
`;

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <Container visible={visible}>
      <Logo>AZ</Logo>
      <LoadingText>Initializing experience...</LoadingText>
      <ProgressBar>
        <Progress progress={Math.min(progress, 100)} />
      </ProgressBar>
    </Container>
  );
};

