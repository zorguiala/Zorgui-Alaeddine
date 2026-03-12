import { useCallback } from 'react';
import { useAppStore } from '@/stores';
import { Section } from '@/types';
import { CAMERA_POSITIONS, SECTION_LABELS } from '@/utils/constants';

export const useSection = () => {
  const activeSection = useAppStore((state) => state.activeSection);
  const setActiveSection = useAppStore((state) => state.setActiveSection);
  const goBack = useAppStore((state) => state.goBack);
  const isTransitioning = useAppStore((state) => state.isTransitioning);
  const setIsTransitioning = useAppStore((state) => state.setIsTransitioning);

  const navigateToSection = useCallback(
    (section: Section) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveSection(section);

      // Reset transitioning after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
    },
    [isTransitioning, setActiveSection, setIsTransitioning]
  );

  const navigateBack = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    goBack();

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  }, [isTransitioning, goBack, setIsTransitioning]);

  const getCameraPosition = useCallback(() => {
    if (!activeSection) return CAMERA_POSITIONS.overview;
    return CAMERA_POSITIONS[activeSection];
  }, [activeSection]);

  const getSectionLabel = useCallback((section: Section) => {
    return SECTION_LABELS[section];
  }, []);

  return {
    activeSection,
    isTransitioning,
    navigateToSection,
    navigateBack,
    getCameraPosition,
    getSectionLabel,
    isInSection: activeSection !== null,
  };
};