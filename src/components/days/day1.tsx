import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from '@components';
// Date : 8.9.2020
const animateFirstLineRev = keyframes`
  0% {
    transform: translate3d(0, 22px, 0) rotate(45deg);
  }

  50% {
    transform: translate3d(0, 22px, 0) rotate(0deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
`;
const animateMidLineRev = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const animateLastLineRev = keyframes`
  0% {
    transform: translate3d(0, -22px, 0) rotate(135deg);
  }

  50% {
    transform: translate3d(0, -22px, 0) rotate(0deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
`;

const animateFirstLine = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {

    transform: translate3d(0, 22px, 0) rotate(0deg);
  }

  100% {
    transform: translate3d(0, 22px, 0) rotate(45deg);
  }
`;
const animateMidLine = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0);
  }
`;
const animateLastLine = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {
    transform: translate3d(0, -22px, 0) rotate(0deg);
  }

  100% {
    transform: translate3d(0, -22px, 0) rotate(135deg);
  }
`;

const Container = styled.div`
  align-items: center;
  background-color: #3faf82;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 100%;
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
`;

const Line = styled.div<LineProps>`
  animation: ${props => props.noAnimation && 'none !important'};
  background-color: #fff;
  border-radius: 4px;
  height: 8px;
  transition: background-color 0.2s ease-in-out;
  width: 80px;

  :first-of-type {
    animation: ${animateFirstLineRev} 0.7s ease-in-out;
  }

  :nth-of-type(2) {
    animation: ${animateMidLineRev} 0.7s ease-in-out;
    margin: 14px 0;
  }

  :nth-of-type(3) {
    animation: ${animateLastLineRev} 0.7s ease-in-out;
  }

  &.active {
    :first-of-type {
      animation: ${animateFirstLine} 0.7s ease-in-out forwards;
    }

    :nth-of-type(2) {
      animation: ${animateMidLine} 0.7s ease-in-out forwards;
      margin: 14px 0;
    }

    :nth-of-type(3) {
      animation: ${animateLastLine} 0.7s ease-in-out forwards;
    }
  }
`;

type LineProps = {
  noAnimation: boolean;
  className: React.HTMLAttributes<HTMLDivElement>;
};

export const Day1 = () => {
  const [isActive, setIsActive] = useState(false);
  const [noAnimation, setNoAnimation] = useState(true);

  return (
    <Box
      title="Day 1"
      link="day1"
      componentName="Day1"
    >
      <Container>
        <HamburgerMenu
          onClick={() => {
            setIsActive(!isActive);
            setNoAnimation(false);
          }}
        >
          <Line
            className={isActive ? 'active' : ''}
            noAnimation={noAnimation}
          />
          <Line
            className={isActive ? 'active' : ''}
            noAnimation={noAnimation}
          />
          <Line
            className={isActive ? 'active' : ''}
            noAnimation={noAnimation}
          />
        </HamburgerMenu>
      </Container>
    </Box>
  );
};
