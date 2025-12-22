import styled from 'styled-components';

export const Nav = styled.nav<{ $hidden: boolean }>`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 100;
  opacity: ${(props) => (props.$hidden ? 0 : 1)};
  pointer-events: ${(props) => (props.$hidden ? 'none' : 'auto')};
  transition: opacity 0.3s ease;
`;

export const NavItem = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accent.primary + '20' : theme.colors.bg.secondary};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.accent.primary : theme.colors.border};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    transform: translateX(-4px);
    box-shadow: ${({ theme }) => theme.shadows.glow};

    .label {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:active {
    transform: translateX(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme, $active }) =>
      $active ? theme.colors.accent.primary : theme.colors.text.secondary};
    transition: color 0.3s ease;
    filter: ${({ $active }) => ($active ? 'drop-shadow(0 0 4px currentColor)' : 'none')};
  }
`;

export const Label = styled.span.attrs({ className: 'label' })`
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

