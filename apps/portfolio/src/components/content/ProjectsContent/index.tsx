import { ExternalLink, Github, Plus } from 'lucide-react';
import { projects } from '@/data';
import { TerminalCard } from '../TerminalCard';
import {
  Grid,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  Tech,
  Links,
  ProjectLink,
  PlaceholderIcon,
  StatusBadge,
} from './styles';

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

