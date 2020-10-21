import React from 'react';
import styled from 'styled-components';
import { theme } from '@style';
import '../../style/days/day18.scss';
import { Box } from '@components';
// Date : 21.10.2020

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day18Background};
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 100%;
`;

export const Day18 = () => {
  return (
    <Box title="Day 18" link="day18" componentName="Day18">
      <Container className="day18">
        <div className="smoke smoke-left"></div>
        <div className="smoke"></div>
        <div className="smoke smoke-right"></div>
        <div className="mug">
          <div className="mug-handle"></div>
          <div className="mug-tea-bag">
            <div className="flower">
              <div className="petal petal-top"></div>
              <div className="petal petal-right"></div>
              <div className="petal petal-left"></div>
              <div className="petal petal-bottom-right"></div>
              <div className="petal petal-bottom-left"></div>
              <div className="flower-mid"></div>
            </div>
          </div>
        </div>
        <div className="shadow"></div>
      </Container>
    </Box>
  );
};
