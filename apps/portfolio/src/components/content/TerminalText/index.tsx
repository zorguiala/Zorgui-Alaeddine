import { useState, useEffect } from 'react';
import { TerminalContainer, Line, Prompt, Text, Cursor } from './styles';

interface TerminalTextProps {
  lines: string[];
  typingSpeed?: number;
  startDelay?: number;
  onComplete?: () => void;
}

export const TerminalText = ({
  lines,
  typingSpeed = 25,
  startDelay = 300,
  onComplete,
}: TerminalTextProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // Start delay
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  // Typing effect
  useEffect(() => {
    if (!started) return;
    if (currentLineIndex >= lines.length) {
      onComplete?.();
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      // Move to next line
      const timer = setTimeout(() => {
        setCurrentLineIndex((l) => l + 1);
        setCurrentCharIndex(0);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [started, currentLineIndex, currentCharIndex, lines, typingSpeed, onComplete]);

  const isTyping = currentLineIndex < lines.length;

  return (
    <TerminalContainer>
      {displayedLines.map((line, index) => (
        <Line key={index}>
          <Prompt>&gt;</Prompt>
          <Text>
            {line}
            {index === currentLineIndex && isTyping && <Cursor />}
          </Text>
        </Line>
      ))}
      {!isTyping && displayedLines.length > 0 && (
        <Line>
          <Prompt>&gt;</Prompt>
          <Cursor />
        </Line>
      )}
    </TerminalContainer>
  );
};

