import styled from 'styled-components';
import type { FC } from 'react';

const Container = styled.div`
  display: flex;
`;

interface PanelProps {
  weight: number;
}

const Panel = styled.div<PanelProps>`
  flex: ${props => props.weight};
`;

interface SplitScreenProps {
  leftWeight?: number;
  rightWeight?: number;
  children?: React.ReactNode;
}

export const SplitScreenImprovent: FC<SplitScreenProps> = ({ leftWeight = 1, rightWeight = 1, children }) => {
  let left: React.ReactNode = null;
  let right: React.ReactNode = null;
  if (Array.isArray(children)) {
    [left, right] = children;
  } else {
    left = children;
  }
  return (
    <Container>
      <Panel weight={leftWeight}>{left}</Panel>
      <Panel weight={rightWeight}>{right}</Panel>
    </Container>
  );
};