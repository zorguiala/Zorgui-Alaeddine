import styled from 'styled-components';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data';

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 12px;
  z-index: 100;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: ${({ theme }) => theme.colors.bg.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: translateY(-3px);

    svg {
      color: ${({ theme }) => theme.colors.accent.primary};
    }
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: color 0.3s ease;
  }
`;

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

