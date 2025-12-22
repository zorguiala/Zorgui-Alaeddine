import { Monitor, Laptop, Wrench, BookOpen, FolderOpen } from 'lucide-react';
import { useSection } from '@/hooks';
import { useAppStore } from '@/stores';
import { Section } from '@/types';
import { SECTION_LABELS } from '@/utils/constants';
import { Nav, NavItem, Label } from './styles';

const navItems: { section: Section; icon: typeof Monitor }[] = [
  { section: 'about', icon: Monitor },
  { section: 'contact', icon: Laptop },
  { section: 'skills', icon: Wrench },
  { section: 'experience', icon: BookOpen },
  { section: 'projects', icon: FolderOpen },
];

export const Navigation = () => {
  const { navigateToSection, isTransitioning } = useSection();
  const activeSection = useAppStore((state) => state.activeSection);

  return (
    <Nav $hidden={activeSection !== null}>
      {navItems.map(({ section, icon: Icon }) => (
        <NavItem
          key={section}
          $active={activeSection === section}
          onClick={() => !isTransitioning && navigateToSection(section)}
          disabled={isTransitioning}
        >
          <Icon />
          <Label>{SECTION_LABELS[section]}</Label>
        </NavItem>
      ))}
    </Nav>
  );
};

