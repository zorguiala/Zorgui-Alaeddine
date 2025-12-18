import { create } from 'zustand';
import { Section, Theme } from '@/types';
import { getStorageItem, setStorageItem } from '@/utils/helpers';

interface AppState {
  // Section navigation
  activeSection: Section | null;
  setActiveSection: (section: Section | null) => void;
  goBack: () => void;

  // Theme
  theme: Theme;
  toggleTheme: () => void;

  // Loading
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // Onboarding
  hasSeenOnboarding: boolean;
  completeOnboarding: () => void;

  // Camera animation state
  isTransitioning: boolean;
  setIsTransitioning: (transitioning: boolean) => void;

  // Hover state
  hoveredObject: Section | null;
  setHoveredObject: (object: Section | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Section navigation
  activeSection: null,
  setActiveSection: (section) => set({ activeSection: section }),
  goBack: () => set({ activeSection: null }),

  // Theme - load from localStorage or default to dark
  theme: getStorageItem<Theme>('theme', 'dark'),
  toggleTheme: () =>
    set((state) => {
      const newTheme: Theme = state.theme === 'dark' ? 'light' : 'dark';
      setStorageItem('theme', newTheme);
      return { theme: newTheme };
    }),

  // Loading
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),

  // Onboarding
  hasSeenOnboarding: getStorageItem<boolean>('onboarding_complete', false),
  completeOnboarding: () => {
    setStorageItem('onboarding_complete', true);
    set({ hasSeenOnboarding: true });
  },

  // Camera animation
  isTransitioning: false,
  setIsTransitioning: (transitioning) => set({ isTransitioning: transitioning }),

  // Hover
  hoveredObject: null,
  setHoveredObject: (object) => set({ hoveredObject: object }),
}));

