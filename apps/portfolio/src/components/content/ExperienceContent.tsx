import styled from 'styled-components';
import { experience } from '@/data';
import { fadeInUp } from '@/styles/animations';

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
  max-height: 380px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00ff88;
    border-radius: 2px;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #00ff88, #00d4ff);
  }
`;

const Job = styled.div<{ $index: number }>`
  position: relative;
  margin-bottom: 20px;
  animation: ${fadeInUp} 0.5s ease forwards;
  animation-delay: ${(props) => props.$index * 0.2}s;
  opacity: 0;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00ff88;
    border: 2px solid #0d1117;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
  }
`;

const JobHeader = styled.div`
  margin-bottom: 8px;
`;

const Company = styled.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #00ff88;
  margin: 0;
`;

const Role = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #e8e8e8;
  margin: 4px 0 0 0;
`;

const Period = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: #888;
  display: block;
  margin-top: 2px;
`;

const Highlights = styled.ul`
  margin: 8px 0 0 0;
  padding-left: 16px;
  list-style: none;
`;

const Highlight = styled.li`
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: #a0a0a0;
  margin-bottom: 4px;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: -14px;
    color: #00d4ff;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
`;

const Tech = styled.span`
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 9px;
  color: #00d4ff;
`;

export const ExperienceContent = () => {
  return (
    <Container>
      <Header>
        <WindowButtons>
          <WindowButton $color="#ff5f57" />
          <WindowButton $color="#febc2e" />
          <WindowButton $color="#28c840" />
        </WindowButtons>
        <Title>experience.log</Title>
      </Header>

      <Content>
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
      </Content>
    </Container>
  );
};
