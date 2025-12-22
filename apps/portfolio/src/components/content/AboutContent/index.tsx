import { profile } from '@/data';
import { TerminalText } from '../TerminalText';
import { TerminalCard } from '../TerminalCard';
import { InfoGrid, Label, Value, Highlight, Languages, LanguageList, LanguageTag } from './styles';

export const AboutContent = () => {
  const introLines = [
    `Hello! I'm ${profile.name}.`,
    profile.title + ' with 5+ years of experience.',
    'Building high-quality web applications.',
    'Strong focus on React and TypeScript.',
  ];

  return (
    <TerminalCard title="About" accent="green">
      <TerminalText lines={introLines} typingSpeed={20} />

      <InfoGrid>
        <Label>location:</Label>
        <Value>
          {profile.location} <Highlight>// Open to relocation</Highlight>
        </Value>

        <Label>experience:</Label>
        <Value>5+ years</Value>

        <Label>focus:</Label>
        <Value>React, Next.js, TypeScript</Value>

        <Label>interests:</Label>
        <Value>{profile.interests.join(', ')}</Value>
      </InfoGrid>

      <Languages>
        <Label>languages:</Label>
        <LanguageList>
          {profile.languages.map((lang) => (
            <LanguageTag key={lang.name}>
              {lang.name} ({lang.level})
            </LanguageTag>
          ))}
        </LanguageList>
      </Languages>
    </TerminalCard>
  );
};

