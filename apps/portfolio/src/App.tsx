import { Suspense, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@/hooks';
import { themes, GlobalStyles } from '@/styles';
import { Scene } from '@/components/three';
import {
  Layout,
  ThemeToggle,
  BackButton,
  Navigation,
  SocialLinks,
  LoadingScreen,
  Onboarding,
  ContentOverlay,
} from '@/components/ui';

const AppContent = () => {
  const { themeConfig } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyles />
      
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <Layout>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        {!isLoading && (
          <>
            <Onboarding />
            <ContentOverlay />
            <ThemeToggle />
            <BackButton />
            <Navigation />
            <SocialLinks />
            
          </>
        )}
      </Layout>
    </ThemeProvider>
  );
};

// Wrap with default theme for initial render
const App = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
