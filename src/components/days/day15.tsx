import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@style';
import { Box } from '@components';
// Date : 14.10.2020

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day15Background};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 100%;
  z-index: 0;
`;

const Face = styled.div`
  background-color: ${theme.color.day15Face};
  border-radius: 50%;
  height: 180px;
  position: relative;
  width: 180px;
`;

const EyeAnimation = keyframes`
  0%,
  29%,
  31%,
  59%,
  61%,
  100% {
    transform: scaleY(1);
  }

  30%,
  60% {
    transform: scaleY(0);
  }
`;

const Eye = styled.div<{ side: 'l' | 'r' }>`
  animation: ${EyeAnimation} 10s ease-in-out infinite;
  background-color: #000;
  border: 12px solid #fff;
  border-radius: 50%;
  height: 28px;
  left: ${props => props.side === 'l' && '24%'};
  position: absolute;
  right: ${props => props.side === 'r' && '24%'};
  top: 42%;
  width: 28px;
`;

const Nose = styled.div`
  background-color: ${theme.color.day15FaceLight};
  border-radius: 50%;
  height: 50px;
  left: 50%;
  position: absolute;
  top: 56%;
  transform: translateX(-50%);
  width: 60px;

  &::before {
    background-color: ${theme.color.day15FaceDark};
    border-radius: 50%;
    content: '';
    height: 16px;
    left: 14%;
    position: absolute;
    top: 29%;
    width: 16px;
  }

  &::after {
    background-color: ${theme.color.day15FaceDark};
    border-radius: 50%;
    content: '';
    height: 16px;
    position: absolute;
    right: 14%;
    top: 29%;
    width: 16px;
  }
`;

const Ear = styled.div<{ side: 'l' | 'r' }>`
  background-color: ${theme.color.day15FaceLight};
  border: 8px solid ${theme.color.day15Face};
  border-radius: ${props => (props.side === 'l' ? '15px 0 0' : '0 15px 0')};
  height: 60px;
  position: absolute;
  right: ${props => props.side === 'r' && '0'};
  transform: ${props =>
    props.side === 'l'
      ? 'rotate(19deg) skew(27deg)'
      : 'rotate(-19deg) skew(-27deg)'};
  width: 60px;
  z-index: -1;
`;

export const Day15 = () => {
  return (
    <Box title="Day 15" link="day15" componentName="Day15">
      <Container>
        <Face>
          <Ear side="l" />
          <Ear side="r" />
          <Eye side="l" />
          <Eye side="r" />
          <Nose />
        </Face>
      </Container>
    </Box>
  );
};
