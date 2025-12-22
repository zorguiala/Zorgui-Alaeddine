import styled from 'styled-components';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { profile } from '@/data';
import { TerminalText } from './TerminalText';
import { TerminalCard } from './TerminalCard';
import { fadeInUp } from '@/styles/animations';

const TerminalSection = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 255, 136, 0.15);
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactLink = styled.a<{ $index: number }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  color: #e8e8e8;
  transition: all 0.2s ease;
  animation: ${fadeInUp} 0.3s ease forwards;
  animation-delay: ${(props) => 0.5 + props.$index * 0.1}s;
  opacity: 0;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: #00ff88;
    transform: translateX(6px);

    svg {
      color: #00ff88;
    }
  }

  svg {
    width: 18px;
    height: 18px;
    color: #00d4ff;
    transition: color 0.2s ease;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px 12px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const InfoItem = styled.div<{ $index: number }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px;
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #a0a0a0;
  animation: ${fadeInUp} 0.3s ease forwards;
  animation-delay: ${(props) => 0.8 + props.$index * 0.1}s;
  opacity: 0;

  svg {
    width: 16px;
    height: 16px;
    color: #888;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 6px 12px;
  }
`;

const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 10px 14px;
  background: rgba(0, 255, 136, 0.08);
  border-radius: 8px;
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #00ff88;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00ff88;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.4); }
    50% { opacity: 0.8; box-shadow: 0 0 0 6px rgba(0, 255, 136, 0); }
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 8px 12px;
  }
`;

export const ContactContent = () => {
  const terminalLines = [
    'contact',
    `  name: "${profile.name}",`,
    `  role: "${profile.title}",`,
    '  status: "actively looking for a job (remote or onsite)",',
  ];

  return (
    <TerminalCard title="Contact" accent="green">
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
    </TerminalCard>
  );
};
