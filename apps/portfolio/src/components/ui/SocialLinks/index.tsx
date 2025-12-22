import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data';
import { Container, SocialLink } from './styles';

export const SocialLinks = () => {
  return (
    <Container>
      <SocialLink
        href={profile.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github />
      </SocialLink>
      <SocialLink
        href={profile.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin />
      </SocialLink>
      <SocialLink href={`mailto:${profile.email}`} aria-label="Email">
        <Mail />
      </SocialLink>
    </Container>
  );
};

