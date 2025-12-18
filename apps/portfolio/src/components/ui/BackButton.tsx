import { useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft, X } from 'lucide-react';
import { useSection } from '@/hooks';
import { fadeIn } from '@/styles/animations';

const Button = styled.button<{ visible: boolean }>`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.bg.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.md};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
  transform: translateX(${(props) => (props.visible ? 0 : '-20px')});
  animation: ${fadeIn} 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    color: ${({ theme }) => theme.colors.accent.primary};

    svg {
      transform: translateX(-3px);
    }
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }
`;

const KeyHint = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.colors.bg.tertiary};
  border-radius: 3px;
  font-size: 9px;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.text.muted};
`;

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
    <Button visible={isInSection} onClick={navigateBack} disabled={isTransitioning}>
      <ArrowLeft />
      Back
      <KeyHint>
        <X size={10} />
      </KeyHint>
    </Button>
  );
};

