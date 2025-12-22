import styled from 'styled-components';
import { skills } from '@/data';
import { TerminalCard } from './TerminalCard';
import { fadeInUp } from '@/styles/animations';

const Category = styled.div<{ $index: number }>`
  margin-bottom: 16px;
  animation: ${fadeInUp} 0.4s ease forwards;
  animation-delay: ${(props) => props.$index * 0.1}s;
  opacity: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #ff6b35;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const SkillTag = styled.div<{ $level: number }>`
  background: rgba(255, 107, 53, ${(props) => props.$level / 200});
  border: 1px solid rgba(255, 107, 53, 0.5);
  border-radius: 6px;
  padding: 6px 12px;
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: #e8e8e8;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 107, 53, 0.3);
    border-color: #ff6b35;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 4px 8px;
    gap: 6px;
  }
`;

const SkillLevel = styled.span`
  font-size: 10px;
  color: #00ff88;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const categoryTitles: Record<string, string> = {
  frontend: 'Frontend & UI',
  testing: 'Testing & QA',
  backend: 'Backend & APIs',
  tools: 'Tools & DevOps',
};

export const SkillsContent = () => {
  return (
    <TerminalCard title="Skills" accent="orange">
      {Object.entries(skills).map(([category, skillList], index) => (
        <Category key={category} $index={index}>
          <CategoryTitle>{categoryTitles[category]}</CategoryTitle>
          <SkillList>
            {skillList.map((skill) => (
              <SkillTag key={skill.name} $level={skill.level}>
                {skill.name}
                <SkillLevel>{skill.years}y</SkillLevel>
              </SkillTag>
            ))}
          </SkillList>
        </Category>
      ))}
    </TerminalCard>
  );
};
