import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from '@components';
import { theme } from '@style';
//Date: 15-17.9.2020
const cubicBezier = 'cubic-bezier(0.4, 0, 0.49, 1)';

const sunRotation = keyframes`
  0% {
    background: ${theme.color.day2SunRed};
    transform: rotate(-70deg);
  }
    
  30% {
    background: ${theme.color.day2Sun};
    transform: rotate(-28deg);
  }
    
  70% {
    background: ${theme.color.day2Sun};
  }

  100% {
    background: ${theme.color.day2SunRed};
    transform: rotate(70deg);
  }
`;

const skyTurnsBlack = keyframes`
  0% {
    background: ${theme.color.day2Background};
  }
	
  30% {
    background: ${theme.color.day2Sky};
  }
	
  70% {
    background: ${theme.color.day2Sky};
  }

  100% {
    background: ${theme.color.day2Background};
  }
`;

const GroundTurnsBlack = keyframes`
  0% {
    background: ${theme.color.day2Background};
  }
	
  30% {
    background: ${theme.color.day2Ground};
  }
	
  70% {
    background: ${theme.color.day2Ground};
  }

  100% {
    background: ${theme.color.day2Background};
  }
`;

const pyramidShadeLeft = keyframes`
  0% {
    background: ${theme.color.day2Background};
  }
    
  30% {
    background: ${theme.color.day2PyramidLeft};
  }
    
  70% {
    background: ${theme.color.day2PyramidRight};
  }

  100% {
    background: ${theme.color.day2Background};
  }
`;

const pyramidShadeRight = keyframes`
  0% {
    background: ${theme.color.day2Background};
  }
    
  30% {
    background: ${theme.color.day2PyramidRight};
  }
    
  70% {
    background: ${theme.color.day2PyramidLeft};
  }

  100% {
    background: ${theme.color.day2Background};
  }
`;

const groundShade = keyframes`
  0% {
    clip-path: polygon(31% 0%, 74% 87%, 63% 0%);
    transform: scaleY(0);
  }
    
  30% {
    clip-path: polygon(31% 0%, 74% 87%, 63% 0%);
    transform: scaleY(1);
  }
    
  55% {
    transform: scaleY(.4);
  }

  75% {
    transform: scaleY(1);
  }

  100% {
    clip-path: polygon(31% 0%, 0% 87%, 63% 0%);
    transform: scaleY(0);
  }
`;

const Container = styled.div`
  align-items: center;
  background: ${theme.color.day2Background};
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Frame = styled.div`
  border-radius: 50%;
  height: 180px;
  overflow: hidden;
  position: relative;
  width: 180px;
`;

const Sky = styled.div`
  animation: 4s ${skyTurnsBlack} infinite ${cubicBezier};
  background-color: ${theme.color.day2Sky};
  bottom: 64px;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const Sun = styled.div`
  animation: 4s ${sunRotation} infinite ${cubicBezier};
  background-color: ${theme.color.day2Sun};
  border-radius: 50%;
  height: 36px;
  left: calc(50% - 18px);
  position: absolute;
  top: 8px;
  transform: rotate(0deg);
  transform-origin: 50% 400%;
  width: 36px;
`;

const Pyramid = styled.div`
  animation: 4s ${pyramidShadeLeft} infinite ${cubicBezier};
  background-color: ${theme.color.day2PyramidLeft};
  bottom: 64px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  left: calc(50% - 58px);
  height: 56px;
  position: absolute;
  width: 116px;
`;

const PyramidRightSide = styled.div`
  animation: 4s ${pyramidShadeRight} infinite ${cubicBezier};
  background-color: ${theme.color.day2PyramidRight};
  bottom: 64px;
  clip-path: polygon(30% 100%, 100% 100%, 0% 0%);
  left: 50%;
  height: 56px;
  position: absolute;
  width: 58px;
`;

const Shadow = styled.div`
  animation: 4s ${groundShade} infinite ${cubicBezier};
  background-color: rgba(0, 0, 0, 0.2);
  clip-path: polygon(31% 0%, 74% 87%, 63% 0%);
  left: -80px;
  height: 44px;
  position: absolute;
  top: calc(100% - 64px);
  transform-origin: 50% 0%;
  width: 360px;
  z-index: 2;
`;

const Ground = styled.div`
  animation: 4s ${GroundTurnsBlack} infinite ${cubicBezier};
  background-color: ${theme.color.day2Ground};
  bottom: 0;
  height: 64px;
  position: absolute;
  width: 100%;
`;

export const Day2 = () => {
  return (
    <Box title="Day 2" link="day2" componentName="Day2">
      <Container>
        <Frame>
          <Sky />
          <Sun />
          <Pyramid />
          <PyramidRightSide />
          <Shadow />
          <Ground />
        </Frame>
      </Container>
    </Box>
  );
};
