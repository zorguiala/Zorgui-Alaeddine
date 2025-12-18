import styled from 'styled-components';
import { ExternalLink, Github, Plus } from 'lucide-react';
import { projects } from '@/data';
import { fadeInUp } from '@/styles/animations';

const Container = styled.div`
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid #00d4ff;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
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

const Content = styled.div`
  display: grid;
  gap: 12px;
`;

const ProjectCard = styled.div<{ $index: number; $isPlaceholder: boolean }>`
  background: ${(props) =>
    props.$isPlaceholder ? 'rgba(0, 212, 255, 0.05)' : 'rgba(0, 212, 255, 0.1)'};
  border: 1px solid
    ${(props) =>
      props.$isPlaceholder ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 212, 255, 0.4)'};
  border-radius: 6px;
  padding: 12px;
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
`;

const ProjectTitle = styled.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #00d4ff;
  margin: 0 0 6px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProjectDescription = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #a0a0a0;
  margin: 0 0 10px 0;
  line-height: 1.5;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
`;

const Tech = styled.span`
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 9px;
  color: #00ff88;
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: #888;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #00d4ff;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const PlaceholderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.1);
  border: 1px dashed rgba(0, 212, 255, 0.3);
  margin: 0 auto 8px;

  svg {
    color: #00d4ff;
    opacity: 0.5;
  }
`;

const StatusBadge = styled.span<{ $status: string }>`
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${(props) =>
    props.$status === 'completed'
      ? 'rgba(0, 255, 136, 0.2)'
      : 'rgba(136, 136, 136, 0.2)'};
  color: ${(props) => (props.$status === 'completed' ? '#00ff88' : '#888')};
`;

export const ProjectsContent = () => {
  return (
    <Container>
      <Header>
        <WindowButtons>
          <WindowButton $color="#ff5f57" />
          <WindowButton $color="#febc2e" />
          <WindowButton $color="#28c840" />
        </WindowButtons>
        <Title>projects/</Title>
      </Header>

      <Content>
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
                    <Plus size={20} />
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
      </Content>
    </Container>
  );
};
