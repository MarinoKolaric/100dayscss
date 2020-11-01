import React from 'react';
import styled from 'styled-components';
import { theme } from '@style';
import '../../style/days/day22.scss';
import { Box } from '@components';

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day22Background};
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 100%;
`;

export const Day22 = () => {
  return (
    <Box title="Day 22" link="day22" componentName="Day22">
      <Container className="day22">
        <div className="stinker">
          <div className="poop top"></div>
          <div className="poop mid"></div>
          <div className="poop bot"></div>
          <div className="eyes"></div>
          <div className="eyes"></div>
          <div className="cheek"></div>
          <div className="cheek"></div>
          <div className="mouth"></div>
        </div>
        <div className="shadow"></div>
        <div className="dots dots1"></div>
        <div className="dots dots2"></div>
        <div className="dots dots3"></div>
        <div className="dots dots4"></div>
        <div className="dots dots5"></div>
      </Container>
    </Box>
  );
};
