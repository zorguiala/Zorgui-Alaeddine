import styled from 'styled-components';
import { MousePointer2, Move, Sun, ArrowLeft } from 'lucide-react';
import { useOnboarding } from '@/hooks';
import { fadeIn, scaleIn } from '@/styles/animations';

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.bg.secondary};
  border: 1px solid ${({ theme }) => theme.colors.accent.primary};
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 0 40px ${({ theme }) => theme.colors.glow.primary};
  animation: ${scaleIn} 0.4s ease;
`;

const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent.primary};
  text-align: center;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.muted};
  text-align: center;
  margin-bottom: 24px;
`;

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const Instruction = styled.div<{ index: number }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.bg.tertiary};
  border-radius: 8px;
  animation: ${fadeIn} 0.3s ease;
  animation-delay: ${(props) => props.index * 0.1}s;
  animation-fill-mode: backwards;
`;

const IconWrapper = styled.div`
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

const InstructionText = styled.div`
  flex: 1;
`;

const InstructionTitle = styled.h4`
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 4px 0;
`;

const InstructionDesc = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0;
  line-height: 1.5;
`;

const ObjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 16px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.bg.primary};
  border-radius: 8px;
`;

const ObjectItem = styled.div`
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

const Button = styled.button`
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

const instructions = [
  {
    icon: MousePointer2,
    title: 'Click Objects',
    desc: 'Click on items on the desk to explore different sections',
  },
  {
    icon: Move,
    title: 'Hover to Preview',
    desc: 'Hover over objects to see what section they represent',
  },
  {
    icon: ArrowLeft,
    title: 'Navigate Back',
    desc: 'Press ESC or click Back button to return to the desk',
  },
  {
    icon: Sun,
    title: 'Toggle Theme',
    desc: 'Use the sun/moon icon to switch between light and dark mode',
  },
];

const objects = [
  { label: 'Monitor', section: 'About Me' },
  { label: 'Laptop', section: 'Contact' },
  { label: 'Toolbox', section: 'Skills' },
  { label: 'Books', section: 'Experience' },
  { label: 'Folder', section: 'Projects' },
];

export const Onboarding = () => {
  const { showOnboarding, completeOnboarding } = useOnboarding();

  return (
    <Overlay visible={showOnboarding}>
      <Modal>
        <Title>Welcome to My Portfolio</Title>
        <Subtitle>An interactive 3D experience</Subtitle>

        <Instructions>
          {instructions.map((item, index) => (
            <Instruction key={item.title} index={index}>
              <IconWrapper>
                <item.icon />
              </IconWrapper>
              <InstructionText>
                <InstructionTitle>{item.title}</InstructionTitle>
                <InstructionDesc>{item.desc}</InstructionDesc>
              </InstructionText>
            </Instruction>
          ))}
        </Instructions>

        <ObjectList>
          {objects.map((obj) => (
            <ObjectItem key={obj.label}>
              {obj.label} → {obj.section}
            </ObjectItem>
          ))}
        </ObjectList>

        <Button onClick={completeOnboarding} style={{ marginTop: '20px' }}>
          Got it, let's explore!
        </Button>
      </Modal>
    </Overlay>
  );
};

