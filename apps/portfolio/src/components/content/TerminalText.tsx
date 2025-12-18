import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { blink } from '@/styles/animations';

const TerminalContainer = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  line-height: 1.6;
`;

const Line = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4px;
`;

const Prompt = styled.span`
  color: #00ff88;
  margin-right: 8px;
  flex-shrink: 0;
`;

const Text = styled.span`
  color: #e8e8e8;
  word-break: break-word;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 14px;
  background: #00ff88;
  margin-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;

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

