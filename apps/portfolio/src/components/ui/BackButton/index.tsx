import { useEffect } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useSection } from '@/hooks';
import { Button, KeyHint } from './styles';

export const BackButton = () => {
  const { isInSection, navigateBack, isTransitioning } = useSection();

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isInSection && !isTransitioning) {
        navigateBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isInSection, isTransitioning, navigateBack]);

  return (
    <Button $visible={isInSection} onClick={navigateBack} disabled={isTransitioning}>
      <ArrowLeft />
      Back
      <KeyHint>
        <X size={10} />
      </KeyHint>
    </Button>
  );
};

