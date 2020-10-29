import React from 'react';
import styled from 'styled-components';
import { theme } from '@style';
import '../../style/days/day21.scss';
import { Box } from '@components';

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day21Background};
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 100%;
`;

export const Day21 = () => {
  return (
    <Box title="Day 21" link="day21" componentName="Day21">
      <Container className="day21">
        <div className="package">
          <div className="sides">
            <div className="side side-top"></div>
            <div className="side side-right"></div>
            <div className="side side-bottom"></div>
            <div className="side side-left"></div>
          </div>
          <div className="shapes">
            <div className="square square1 orange lg"></div>
            <div className="square square2 orange lg"></div>
            <div className="square square3 orange md"></div>
            <div className="square square4 orange md"></div>
            <div className="square square5 orange sm"></div>
            <div className="square square6 green md"></div>
            <div className="square square7 green sm"></div>
            <div className="square square8 green sm"></div>

            <div className="circle circle1 orange lg"></div>
            <div className="circle circle2 orange md"></div>
            <div className="circle circle3 orange md"></div>
            <div className="circle circle4 orange sm"></div>
            <div className="circle circle5 orange sm"></div>
            <div className="circle circle6 green md"></div>
            <div className="circle circle7 green sm"></div>
            <div className="circle circle8 green sm"></div>
          </div>
        </div>
      </Container>
    </Box>
  );
};
