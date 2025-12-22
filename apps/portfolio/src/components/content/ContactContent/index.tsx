import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { profile } from '@/data';
import { TerminalText } from '../TerminalText';
import { TerminalCard } from '../TerminalCard';
import { TerminalSection, ContactLinks, ContactLink, InfoItem, StatusIndicator } from './styles';
import { InfoGrid, Label, Value } from '../AboutContent/styles';

export const ContactContent = () => {
  const terminalLines = [
    'contact',
    `  ${profile.name}`,
    `  ${profile.title}`,
    '  actively looking for a job (remote or onsite)',
  ];

  return (
    <TerminalCard title="Contact" accent="green">
       <InfoGrid>
        <Label>Name:</Label>
        <Value>
        {terminalLines[1]}
        </Value>

        <Label>Role:</Label>
        <Value>{terminalLines[2]}</Value>

        <Label>Status:</Label>
        <Value>{terminalLines[3]}</Value>
      </InfoGrid>
        {/* <TerminalText lines={terminalLines} typingSpeed={15} /> */}
    <br/>



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

