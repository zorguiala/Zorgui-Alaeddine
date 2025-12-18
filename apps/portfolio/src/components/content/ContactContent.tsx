import styled from 'styled-components';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { profile } from '@/data';
import { TerminalText } from './TerminalText';
import { fadeInUp } from '@/styles/animations';

const Container = styled.div`
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid #00ff88;
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
`;

const WindowButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const WindowButton = styled.div<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.$color};
`;

const Title = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #888;
  margin-left: 8px;
`;

const TerminalSection = styled.div`
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0, 255, 136, 0.1);
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactLink = styled.a<{ $index: number }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #e8e8e8;
  transition: all 0.2s ease;
  animation: ${fadeInUp} 0.3s ease forwards;
  animation-delay: ${(props) => 0.5 + props.$index * 0.1}s;
  opacity: 0;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: #00ff88;
    transform: translateX(4px);

    svg {
      color: #00ff88;
    }
  }

  svg {
    width: 14px;
    height: 14px;
    color: #00d4ff;
    transition: color 0.2s ease;
    flex-shrink: 0;
  }
`;

const InfoItem = styled.div<{ $index: number }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #a0a0a0;
  animation: ${fadeInUp} 0.3s ease forwards;
  animation-delay: ${(props) => 0.8 + props.$index * 0.1}s;
  opacity: 0;

  svg {
    width: 14px;
    height: 14px;
    color: #888;
    flex-shrink: 0;
  }
`;

const StatusIndicator = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: #00ff88;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00ff88;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

export const ContactContent = () => {
  const terminalLines = [
    'const contact = {',
    `  name: "${profile.name}",`,
    `  role: "${profile.title}",`,
    '  status: "Available for hire",',
    '};',
  ];

  return (
    <Container>
      <Header>
        <WindowButtons>
          <WindowButton $color="#ff5f57" />
          <WindowButton $color="#febc2e" />
          <WindowButton $color="#28c840" />
        </WindowButtons>
        <Title>contact.ts</Title>
      </Header>

      <TerminalSection>
        <TerminalText lines={terminalLines} typingSpeed={15} />
      </TerminalSection>

      <ContactLinks>
        <ContactLink href={`mailto:${profile.email}`} $index={0}>
          <Mail />
          {profile.email}
        </ContactLink>

        <ContactLink
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          $index={1}
        >
          <Linkedin />
          LinkedIn Profile
        </ContactLink>

        <ContactLink
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          $index={2}
        >
          <Github />
          GitHub Profile
        </ContactLink>
      </ContactLinks>

      <InfoItem $index={0}>
        <MapPin />
        {profile.location} • Open to relocation
      </InfoItem>

      <InfoItem $index={1}>
        <Phone />
        {profile.phone}
      </InfoItem>

      <StatusIndicator>Open to opportunities</StatusIndicator>
    </Container>
  );
};
