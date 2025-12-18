import 'styled-components';
import { ThemeConfig } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeConfig {}
}

