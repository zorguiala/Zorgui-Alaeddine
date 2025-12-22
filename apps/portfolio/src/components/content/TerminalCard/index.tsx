import { ReactNode } from 'react';
import { CardAccent, CardWrapper, Card, Header, WindowButtons, WindowButton, Title, Content } from './styles';

interface TerminalCardProps {
  title: string;
  accent?: CardAccent;
  children: ReactNode;
}

export const TerminalCard = ({
  title,
  accent = 'green',
  children,
}: TerminalCardProps) => {
  return (
    <CardWrapper>
      <Card $accent={accent}>
        <Header $accent={accent}>
          <WindowButtons>
            <WindowButton $color="#ff5f57" />
            <WindowButton $color="#febc2e" />
            <WindowButton $color="#28c840" />
          </WindowButtons>
          <Title $accent={accent}>{title}</Title>
        </Header>
        <Content>{children}</Content>
      </Card>
    </CardWrapper>
  );
};

export type { CardAccent } from './styles';

