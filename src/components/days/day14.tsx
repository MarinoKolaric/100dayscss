import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { theme } from '@style';
import { Box } from '@components';
// Date : 14.10.2020

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day14Background};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 100%;
`;

const Tree = styled.div`
  position: relative;
`;

const LeafsAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }

  60% {
    transform: scaleX(1.1);
  }

  80% {
    transform: scaleX(0.9);
  }

  100% {
    transform: scaleX(1);
  }
`;

const Leafs = styled.div`
  animation: ${LeafsAnimation} 1s ease-in-out 0.5s both;
  border-bottom: 180px solid ${theme.color.day14Leaf};
  border-right: 62px solid transparent;
  border-top: 0 solid transparent;
  left: 2px;
  position: absolute;
  top: -16%;
  transform-origin: left;

  &::before {
    border-bottom: 180px solid ${theme.color.day14LeafDarker};
    border-left: 62px solid transparent;
    border-top: 0 solid transparent;
    content: '';
    left: -62px;
    position: absolute;
    top: -16%;
  }
`;

const TrunkAnimation = keyframes`
  0% {
    transform: scaleY(0);
  }

  60% {
    transform: scaleY(1.1);
  }

  80% {
    transform: scaleY(0.9);
  }

  100% {
    transform: scaleY(1);
  }
`;

const Trunk = styled.div`
  animation: ${TrunkAnimation} 0.7s ease-in-out both;
  background-color: ${theme.color.day14Tree};
  border-radius: 2px;
  height: 200px;
  position: relative;
  transform-origin: bottom;
  width: 4px;

  &::after {
    background-color: ${theme.color.day14Ground};
    border-radius: 2px;
    bottom: 0;
    content: '';
    height: 3px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 80px;
  }
`;

interface IBranch {
  side: 'r' | 'l';
  width: number;
  fromBottom: number;
}

const Branch = styled.div<IBranch>`
  background-color: ${theme.color.day14Tree};
  border-radius: 2px;
  bottom: ${props => `${props.fromBottom}%`};
  height: 4px;
  position: absolute;
  width: ${props => `${props.width}px`};

  ${props =>
    props.side === 'r' &&
    css`
      left: 2px;
      transform: rotateZ(-50deg);
      transform-origin: left;
    `}

  ${props =>
    props.side === 'l' &&
    css`
      right: 2px;
      transform: rotateZ(50deg);
      transform-origin: right;
    `}
`;

export const Day14 = () => {
  return (
    <Box title="Day 14" link="day14" componentName="Day14">
      <Container>
        <Tree>
          <Leafs />
          <Trunk>
            <Branch side="l" width={48} fromBottom={30} />
            <Branch side="r" width={40} fromBottom={45} />
            <Branch side="l" width={28} fromBottom={60} />
            <Branch side="r" width={22} fromBottom={75} />
            <Branch side="l" width={16} fromBottom={90} />
          </Trunk>
        </Tree>
      </Container>
    </Box>
  );
};
