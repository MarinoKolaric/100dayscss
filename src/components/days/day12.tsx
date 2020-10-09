import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { theme } from '@style';
import { Box } from '@components';
// Date : 8.10.2020

const WrapperAnimation = keyframes`
  20% {
    height: 16px;
  }
  
  40% {
    border-bottom-width: 2px;
    border-top-width: 2px;
    height: 64px;
    width: 48px;
  }

  100% {
    border-bottom-width: 2px;
    border-top-width: 2px;
    height: 64px;
    width: 320px;
  }
`;

const WrapperAnimationReverse = keyframes`
  0% {
    border-bottom-width: 2px;
    border-top-width: 2px;
    height: 64px;
    width: 320px;
  }

  40% {
    border-bottom-width: 2px;
    border-top-width: 2px;
    height: 64px;
    width: 48px;
  }

  100% {
    height: 32px;
    width: 48px;
  }
`;


const MenuAnimation = keyframes`
  0%,
  40% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

interface IState {
  isOpen: boolean;
  noAnimation?: boolean;
}

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day12Background};
  color: ${theme.color.main};
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div<IState>`
  align-items: center;
  animation: ${props => props.noAnimation && 'none !important'};
  animation: ${WrapperAnimationReverse} 0.7s ease-in;
  border-bottom: 4px solid ${theme.color.main};
  border-top: 4px solid ${theme.color.main};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 32px;
  justify-content: space-between;

  width: 48px;

  &.active {
    animation: ${WrapperAnimation} 0.7s ease-in forwards;
  }
`;


const Menu = styled.div<IState>`
  align-items: center;
  display: none;
  height: 100%;
  justify-content: space-around;
  opacity: 0;
  width: 320px;

  &.active {
    animation: ${MenuAnimation} 0.7s ease-in forwards;
    display: flex;
  }
`;

const MenuItem = styled.div`
  font-size: ${theme.fontSize.sm};
  font-weight: 600;
  letter-spacing: 2px;
  padding: auto 4px;
  text-transform: uppercase;
  transition: 0.2s all linear;

  &:hover {
    opacity: 0.7;
    transform: skewY(15deg) scale(1.1);
  }
`;

export const Day12 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [noAnimation, setNoAnimation] = useState(true);

  return (
    <Box title="Day 12" link="day12" componentName="Day12">
      <Container>
        <Wrapper
          onClick={() => {
            setIsOpen(!isOpen);
            setNoAnimation(false);
          }}
          isOpen={isOpen}
          noAnimation={noAnimation}
          className={isOpen ? 'active' : ''}
        >
          <Menu isOpen={isOpen} className={isOpen ? 'active' : ''}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Work</MenuItem>
            <MenuItem>Life</MenuItem>
            <MenuItem>Spirit</MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </Box>
  );

};
