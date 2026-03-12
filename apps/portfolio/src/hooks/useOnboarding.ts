import { useAppStore } from '@/stores';

export const useOnboarding = () => {
  const hasSeenOnboarding = useAppStore((state) => state.hasSeenOnboarding);
  const completeOnboarding = useAppStore((state) => state.completeOnboarding);

  return {
    showOnboarding: !hasSeenOnboarding,
    completeOnboarding,
  };
};