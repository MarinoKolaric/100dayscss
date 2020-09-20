import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from '@components';
import { theme } from '@style';
//Date: 11.9.2020

const boxShadowSmall = '2px 2px 3px 2px rgba(0, 0, 0, 0.2)';
const boxShadowLarge = '10px 10px 15px 0 rgba(0, 0, 0, 0.3)';

const animateFirst = keyframes`
    0%,
    10% {
      box-shadow: ${boxShadowSmall};
      transform: scale(0);
    }

    100% {
      box-shadow: ${boxShadowLarge};
      transform: scale(1);
    }

`;
const animateSecond = keyframes`
    0%,
    40% {
      box-shadow: ${boxShadowSmall};
      transform: scale(0);
    }

    100% {
      box-shadow: ${boxShadowLarge};
      transform: scale(1);
    }
`;

const animateThird = keyframes`
    0%,
    70% {
      box-shadow: ${boxShadowSmall};
      transform: scale(0);
    }

    100% {
      box-shadow: ${boxShadowLarge};
      transform: scale(1);
    }
`;

const Container = styled.div`
  align-items: center;
  background: ${theme.color.day3Background};
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Circle = styled.div`
  animation-fill-mode: both;
  background: #fff;
  border-radius: 50%;
  position: absolute;

  &.circle-l {
    animation: 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate
      ${animateFirst};
    height: 92px;
    width: 92px;
  }

  &.circle-m {
    animation: 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate
      ${animateSecond};
    height: 64px;
    width: 64px;
  }

  &.circle-s {
    animation: 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate
      ${animateThird};
    height: 32px;
    width: 32px;
  }
`;

export const Day3 = () => {
  return (
    <Box title="Day 3" link="day3" componentName="Day3">
      <Container>
        <Circle className="circle-l" />
        <Circle className="circle-m" />
        <Circle className="circle-s" />
      </Container>
    </Box>
  );
};
