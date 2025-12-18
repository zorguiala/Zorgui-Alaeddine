import styled from 'styled-components';
import { Monitor, Laptop, Wrench, BookOpen, FolderOpen } from 'lucide-react';
import { useSection } from '@/hooks';
import { useAppStore } from '@/stores';
import { Section } from '@/types';
import { SECTION_LABELS } from '@/utils/constants';

const Nav = styled.nav<{ hidden: boolean }>`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 100;
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  pointer-events: ${(props) => (props.hidden ? 'none' : 'auto')};
  transition: opacity 0.3s ease;
`;

const NavItem = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: ${({ theme, active }) =>
    active ? theme.colors.accent.primary + '20' : theme.colors.bg.secondary};
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.accent.primary : theme.colors.border};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    transform: translateX(-4px);

    .label {
      opacity: 1;
      transform: translateX(0);
    }
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme, active }) =>
      active ? theme.colors.accent.primary : theme.colors.text.secondary};
    transition: color 0.3s ease;
  }
`;

const Label = styled.span.attrs({ className: 'label' })`
  position: absolute;
  right: 100%;
  margin-right: 10px;
  white-space: nowrap;
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.bg.secondary};
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.2s ease;
  pointer-events: none;
`;

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
    <Nav hidden={activeSection !== null}>
      {navItems.map(({ section, icon: Icon }) => (
        <NavItem
          key={section}
          active={activeSection === section}
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

