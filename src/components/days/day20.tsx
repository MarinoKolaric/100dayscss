import React from 'react';
import styled from 'styled-components';
import { theme } from '@style';
import '../../style/days/day20.scss';
import { Box } from '@components';

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day20Background};
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  letter-spacing: 3px;
  width: 100%;
`;

export const Day20 = () => {
  return (
    <Box title="Day 20" link="day20" componentName="Day20">
      <Container className="day20">
        <div className="monster">
          <div className="horn"></div>
          <div className="horn"></div>
          <div className="body">
            <div className="eye"></div>
            <div className="mouth">
              <div className="tongue"></div>
              <div className="tooth"></div>
              <div className="tooth"></div>
            </div>
          </div>
          <div className="hide-line"></div>
          <div className="hide-line"></div>
          <div className="leg">
            <div className="foot">
              <div className="finger"></div>
              <div className="finger"></div>
              <div className="finger"></div>
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="finger"></div>
              <div className="finger"></div>
              <div className="finger"></div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};
