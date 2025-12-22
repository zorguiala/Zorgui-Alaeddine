import styled from 'styled-components';

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 16px;
  margin-top: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

export const Label = styled.span`
  color: #00d4ff;
  font-family: 'Space Mono', monospace;
  font-size: 12px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const Value = styled.span`
  color: #e8e8e8;
  font-family: 'Space Mono', monospace;
  font-size: 12px;

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 8px;
  }
`;

export const Highlight = styled.span`
  color: #00ff88;
`;

export const Languages = styled.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 255, 136, 0.2);
`;

export const LanguageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const LanguageTag = styled.span`
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 11px;
  font-family: 'Space Mono', monospace;
  color: #00ff88;

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 3px 8px;
  }
`;

