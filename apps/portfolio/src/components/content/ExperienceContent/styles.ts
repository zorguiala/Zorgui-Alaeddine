import styled from 'styled-components';
import { fadeInUp } from '@/styles/animations';

export const Timeline = styled.div`
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #00ff88, #00d4ff);
  }

  @media (max-width: 480px) {
    padding-left: 16px;

    &::before {
      left: 3px;
    }
  }
`;

export const Job = styled.div<{ $index: number }>`
  position: relative;
  margin-bottom: 24px;
  animation: ${fadeInUp} 0.5s ease forwards;
  animation-delay: ${(props) => props.$index * 0.2}s;
  opacity: 0;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00ff88;
    border: 2px solid #0d1117;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;

    &::before {
      left: -16px;
      width: 8px;
      height: 8px;
    }
  }
`;

export const JobHeader = styled.div`
  margin-bottom: 10px;
`;

export const Company = styled.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #00ff88;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Role = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  color: #e8e8e8;
  margin: 4px 0 0 0;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Period = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #888;
  display: block;
  margin-top: 4px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Highlights = styled.ul`
  margin: 10px 0 0 0;
  padding-left: 16px;
  list-style: none;
`;

export const Highlight = styled.li`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: #a0a0a0;
  margin-bottom: 6px;
  position: relative;
  line-height: 1.5;

  &::before {
    content: '▸';
    position: absolute;
    left: -14px;
    color: #00d4ff;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
`;

export const Tech = styled.span`
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 10px;
  font-family: 'Space Mono', monospace;
  color: #00d4ff;

  @media (max-width: 480px) {
    font-size: 9px;
    padding: 2px 6px;
  }
`;

