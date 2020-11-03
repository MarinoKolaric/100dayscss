import React from 'react';
import styled from 'styled-components';
import '../../style/days/day23.scss';
import { theme } from '@style';
import { Box } from '@components';

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day23Background};
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 100%;
`;

export const Day23 = () => {
  return (
    <Box title="Day 23" link="day23" componentName="Day23">
      <Container className="day23">
        <div className="frame">
          <div className="tail">
            <div className="plus plus1"></div>
            <div className="plus plus2"></div>
            <div className="plus plus3"></div>
            <div className="plus plus4"></div>
            <div className="plus plus5"></div>
            <div className="plus plus6"></div>
            <div className="plus plus7"></div>
            <div className="plus plus8"></div>
            <div className="plus plus9"></div>
            <div className="plus plus10"></div>
            <div className="plus plus11"></div>
            <div className="plus plus12"></div>
            <div className="plus plus13"></div>
            <div className="plus plus14"></div>
            <div className="plus plus15"></div>
            <div className="plus plus16"></div>
          </div>
          <div className="bb">
            <div className="body-lines">
              <div className="line line14"></div>
              <div className="line line15"></div>
              <div className="line line16"></div>
            </div>
            <div className="body">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="big-circle"></div>
              <div className="dot"></div>
              <div className="lines"></div>
            </div>
            <div className="shadow"></div>

            <div className="head">
              <div className="bottom"></div>
              <div className="top-cover">
                <div className="top">
                  <div className="eye"></div>
                </div>
              </div>
            </div>
            <div className="head-lines">
              <div className="line line9"></div>
              <div className="line line10"></div>
              <div className="line line11"></div>
              <div className="line line12"></div>
              <div className="line line13"></div>
            </div>
          </div>
          <div className="ground">
            <div className="line line1">
              <div className="line-circle"></div>
            </div>

            <div className="line line2"></div>
            <div className="line line3">
              <div className="line-circle"></div>
            </div>
            <div className="line line4">
              <div className="line-circle"></div>
            </div>
            <div className="line line5"></div>
            <div className="line line6">
              <div className="line-circle"></div>
            </div>
            <div className="line line7">
              <div className="line-circle"></div>
            </div>
            <div className="line line8">
              <div className="line-circle"></div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};
