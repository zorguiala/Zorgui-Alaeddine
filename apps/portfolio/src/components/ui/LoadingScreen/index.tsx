import { useEffect, useState } from 'react';
import { Container, Logo, LoadingText, ProgressBar, Progress } from './styles';

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
    <Container $visible={visible}>
      <Logo>AZ</Logo>
      <LoadingText>Initializing experience...</LoadingText>
      <ProgressBar>
        <Progress $progress={Math.min(progress, 100)} />
      </ProgressBar>
    </Container>
  );
};

