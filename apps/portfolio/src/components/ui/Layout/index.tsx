import { ReactNode } from 'react';
import { LayoutContainer } from './styles';
import { Analytics } from "@vercel/analytics/next"

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>
            <Analytics />
            {children}
        </LayoutContainer>;
};

