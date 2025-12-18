import styled from 'styled-components';
import { profile } from '@/data';
import { TerminalText } from './TerminalText';

const Container = styled.div`
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid #00ff88;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
`;

const WindowButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const WindowButton = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const Title = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #888;
  margin-left: 8px;
`;

const Content = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #e8e8e8;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 16px;
  margin-top: 16px;
`;

const Label = styled.span`
  color: #00d4ff;
`;

const Value = styled.span`
  color: #e8e8e8;
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
  padding: 2px 8px;
  font-size: 10px;
  color: #00ff88;
`;

export const AboutContent = () => {
  const introLines = [
    `Hello! I'm ${profile.name}.`,
    profile.title + ' with 5+ years of experience.',
    'Building high-quality web applications.',
    'Strong focus on React, TypeScript & testing.',
  ];

  return (
    <Container>
      <Header>
        <WindowButtons>
          <WindowButton color="#ff5f57" />
          <WindowButton color="#febc2e" />
          <WindowButton color="#28c840" />
        </WindowButtons>
        <Title>about.ts</Title>
      </Header>

      <Content>
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
      </Content>
    </Container>
  );
};

