import styled from 'styled-components';
import { profile } from '@/data';
import { TerminalText } from './TerminalText';
import { TerminalCard } from './TerminalCard';

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 16px;
  margin-top: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

const Label = styled.span`
  color: #00d4ff;
  font-family: 'Space Mono', monospace;
  font-size: 12px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Value = styled.span`
  color: #e8e8e8;
  font-family: 'Space Mono', monospace;
  font-size: 12px;

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 8px;
  }
`;

const Highlight = styled.span`
  color: #00ff88;
`;

const Languages = styled.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 255, 136, 0.2);
`;

const LanguageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const LanguageTag = styled.span`
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 11px;
  font-family: 'Space Mono', monospace;
  color: #00ff88;

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 3px 8px;
  }
`;

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
