import { experience } from '@/data';
import { TerminalCard } from '../TerminalCard';
import {
  Timeline,
  Job,
  JobHeader,
  Company,
  Role,
  Period,
  Highlights,
  Highlight,
  TechStack,
  Tech,
} from './styles';

export const ExperienceContent = () => {
  return (
    <TerminalCard title="Experience" accent="green">
      <Timeline>
        {experience.map((job, index) => (
          <Job key={job.company} $index={index}>
            <JobHeader>
              <Company>{job.company}</Company>
              <Role>{job.role}</Role>
              <Period>
                {job.period} • {job.duration}
              </Period>
            </JobHeader>

            <Highlights>
              {job.highlights.slice(0, 4).map((highlight, i) => (
                <Highlight key={i}>{highlight}</Highlight>
              ))}
            </Highlights>

            <TechStack>
              {job.technologies.map((tech) => (
                <Tech key={tech}>{tech}</Tech>
              ))}
            </TechStack>
          </Job>
        ))}
      </Timeline>
    </TerminalCard>
  );
};

