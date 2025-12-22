import { skills } from '@/data';
import { TerminalCard } from '../TerminalCard';
import { Category, CategoryTitle, SkillList, SkillTag, SkillLevel } from './styles';

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

