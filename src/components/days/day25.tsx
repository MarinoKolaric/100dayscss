import React from 'react';
import styled from 'styled-components';
import { theme } from '@style';
import '../../style/days/day25.scss';
import { Box } from '@components';

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day25Background};
  display: flex;
  height: 400px;
  justify-content: center;
  width: 100%;
`;

export const Day25 = () => {
  return (
    <Box title="Day 25" link="day25" componentName="Day25">
      <Container className="day25">
        <div className="wrapper">
          <div className="horn"></div>
          <div className="horn"></div>
          <div className="ear"></div>
          <div className="ear"></div>
          <div className="head">
            <div className="dot"></div>
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
          <div className="snout">
            <div className="nose"></div>
            <div className="nose"></div>
            <div className="red-nose"></div>
            <div className="mouth"></div>
          </div>
        </div>
      </Container>
    </Box>
  );
};
