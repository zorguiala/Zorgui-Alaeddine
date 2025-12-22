import { MousePointer2, Move, Sun, ArrowLeft } from 'lucide-react';
import { useOnboarding } from '@/hooks';
import {
  Overlay,
  Modal,
  Title,
  Subtitle,
  Instructions,
  Instruction,
  IconWrapper,
  InstructionText,
  InstructionTitle,
  InstructionDesc,
  ObjectList,
  ObjectItem,
  Button,
} from './styles';

const instructions = [
  {
    icon: MousePointer2,
    title: 'Click Objects',
    desc: 'Click on items on the desk (Monitor, Laptop, Toolbox, Books, Folder) to explore different sections. Look for the glowing effect!',
  },
  {
    icon: Move,
    title: 'Hover for Hints',
    desc: 'Hover over interactive objects to see labels and visual indicators showing what each section contains',
  },
  {
    icon: ArrowLeft,
    title: 'Navigate Back',
    desc: 'Press ESC or click Back button to return to the desk overview',
  },
  {
    icon: Sun,
    title: 'Toggle Theme',
    desc: 'Use the sun/moon icon in the top-right to switch between light and dark mode',
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
    <Overlay $visible={showOnboarding}>
      <Modal>
        <Title>Welcome to My Portfolio</Title>
        <Subtitle>An interactive 3D experience</Subtitle>

        <Instructions>
          {instructions.map((item, index) => (
            <Instruction key={item.title} $index={index}>
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

