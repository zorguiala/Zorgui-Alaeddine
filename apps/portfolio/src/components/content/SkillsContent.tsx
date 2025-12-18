import styled from 'styled-components';
import { skills } from '@/data';
import { fadeInUp } from '@/styles/animations';

const Container = styled.div`
  background: rgba(13, 17, 23, 0.95);
  border: 1px solid #ff6b35;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 0 20px rgba(255, 107, 53, 0.2);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(255, 107, 53, 0.2);
`;

const WindowButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const WindowButton = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const Title = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #888;
  margin-left: 8px;
`;

const Content = styled.div`
  max-height: 350px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6b35;
    border-radius: 2px;
  }
`;

const Category = styled.div`
  margin-bottom: 16px;
  animation: ${fadeInUp} 0.4s ease forwards;
  animation-delay: ${(props: { index: number }) => props.index * 0.1}s;
  opacity: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #ff6b35;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillTag = styled.div<{ level: number }>`
  background: rgba(255, 107, 53, ${(props) => props.level / 200});
  border: 1px solid rgba(255, 107, 53, 0.5);
  border-radius: 4px;
  padding: 4px 10px;
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #e8e8e8;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 107, 53, 0.3);
    border-color: #ff6b35;
    transform: translateY(-2px);
  }
`;

const SkillLevel = styled.span`
  font-size: 9px;
  color: #00ff88;
  opacity: 0.8;
`;

const categoryTitles: Record<string, string> = {
  frontend: 'Frontend & UI',
  testing: 'Testing & QA',
  backend: 'Backend & APIs',
  tools: 'Tools & DevOps',
};

export const SkillsContent = () => {
  return (
    <Container>
      <Header>
        <WindowButtons>
          <WindowButton color="#ff5f57" />
          <WindowButton color="#febc2e" />
          <WindowButton color="#28c840" />
        </WindowButtons>
        <Title>skills.json</Title>
      </Header>

      <Content>
        {Object.entries(skills).map(([category, skillList], index) => (
          <Category key={category} index={index}>
            <CategoryTitle>{categoryTitles[category]}</CategoryTitle>
            <SkillList>
              {skillList.map((skill) => (
                <SkillTag key={skill.name} level={skill.level}>
                  {skill.name}
                  <SkillLevel>{skill.years}y</SkillLevel>
                </SkillTag>
              ))}
            </SkillList>
          </Category>
        ))}
      </Content>
    </Container>
  );
};

