import styled from 'styled-components';
import { ExternalLink, Github, Plus } from 'lucide-react';
import { projects } from '@/data';
import { TerminalCard } from './TerminalCard';
import { fadeInUp } from '@/styles/animations';

const Grid = styled.div`
  display: grid;
  gap: 12px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ProjectCard = styled.div<{ $index: number; $isPlaceholder: boolean }>`
  background: ${(props) =>
    props.$isPlaceholder ? 'rgba(0, 212, 255, 0.05)' : 'rgba(0, 212, 255, 0.1)'};
  border: 1px solid
    ${(props) =>
      props.$isPlaceholder ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 212, 255, 0.4)'};
  border-radius: 8px;
  padding: 14px;
  animation: ${fadeInUp} 0.4s ease forwards;
  animation-delay: ${(props) => props.$index * 0.1}s;
  opacity: 0;
  transition: all 0.2s ease;

  ${(props) =>
    !props.$isPlaceholder &&
    `
    &:hover {
      border-color: #00d4ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 212, 255, 0.2);
    }
  `}

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const ProjectTitle = styled.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #00d4ff;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ProjectDescription = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #a0a0a0;
  margin: 0 0 12px 0;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

const Tech = styled.span`
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 10px;
  font-family: 'Space Mono', monospace;
  color: #00ff88;

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 16px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #888;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #00d4ff;
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 480px) {
    font-size: 10px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const PlaceholderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.1);
  border: 2px dashed rgba(0, 212, 255, 0.3);
  margin: 0 auto 12px;

  svg {
    color: #00d4ff;
    opacity: 0.5;
  }
`;

const StatusBadge = styled.span<{ $status: string }>`
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 4px;
  font-family: 'Space Mono', monospace;
  background: ${(props) =>
    props.$status === 'completed'
      ? 'rgba(0, 255, 136, 0.2)'
      : 'rgba(136, 136, 136, 0.2)'};
  color: ${(props) => (props.$status === 'completed' ? '#00ff88' : '#888')};

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

export const ProjectsContent = () => {
  return (
    <TerminalCard title="Projects" accent="cyan">
      <Grid>
        {projects.map((project, index) => {
          const isPlaceholder = project.status === 'upcoming';

          return (
            <ProjectCard
              key={project.id}
              $index={index}
              $isPlaceholder={isPlaceholder}
            >
              {isPlaceholder ? (
                <>
                  <PlaceholderIcon>
                    <Plus size={24} />
                  </PlaceholderIcon>
                  <ProjectTitle style={{ justifyContent: 'center', color: '#666' }}>
                    {project.title}
                  </ProjectTitle>
                  <ProjectDescription style={{ textAlign: 'center' }}>
                    {project.description}
                  </ProjectDescription>
                </>
              ) : (
                <>
                  <ProjectTitle>
                    {project.title}
                    <StatusBadge $status={project.status}>{project.status}</StatusBadge>
                  </ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  {project.technologies.length > 0 && (
                    <TechStack>
                      {project.technologies.map((tech) => (
                        <Tech key={tech}>{tech}</Tech>
                      ))}
                    </TechStack>
                  )}
                  <Links>
                    {project.github && (
                      <ProjectLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github /> Code
                      </ProjectLink>
                    )}
                    {project.live && (
                      <ProjectLink
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink /> Live
                      </ProjectLink>
                    )}
                  </Links>
                </>
              )}
            </ProjectCard>
          );
        })}
      </Grid>
    </TerminalCard>
  );
};
