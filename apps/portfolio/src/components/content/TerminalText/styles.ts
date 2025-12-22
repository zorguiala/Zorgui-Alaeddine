import styled from 'styled-components';
import { blink } from '@/styles/animations';

export const TerminalContainer = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  line-height: 1.6;
`;

export const Line = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4px;
`;

export const Prompt = styled.span`
  color: #00ff88;
  margin-right: 8px;
  flex-shrink: 0;
`;

export const Text = styled.span`
  color: #e8e8e8;
  word-break: break-word;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 14px;
  background: #00ff88;
  margin-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;

