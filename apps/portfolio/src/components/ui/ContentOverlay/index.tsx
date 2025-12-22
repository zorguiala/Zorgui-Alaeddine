import { AnimatePresence, motion } from 'framer-motion';
import { useAppStore } from '@/stores';
import {
  AboutContent,
  SkillsContent,
  ExperienceContent,
  ProjectsContent,
  ContactContent,
} from '@/components/content';

const contentMap = {
  about: AboutContent,
  skills: SkillsContent,
  experience: ExperienceContent,
  projects: ProjectsContent,
  contact: ContactContent,
};

export const ContentOverlay = () => {
  const activeSection = useAppStore((state) => state.activeSection);

  const ContentComponent = activeSection ? contentMap[activeSection] : null;

  return (
    <AnimatePresence mode="wait">
      {ContentComponent && (
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            pointerEvents: 'none',
          }}
        >
          <ContentComponent />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

