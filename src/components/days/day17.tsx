import React from 'react';
import styled from 'styled-components';
import { theme } from '@style';
import '../../style/days/day17.scss';
import { Box } from '@components';
// Date : 20.10.2020

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day17Background};
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 100%;
`;

export const Day17 = () => {
  return (
    <Box title="Day 17" link="day17" componentName="Day17">
      <Container className="day17">
        <div className="game">
          <div className="bars"></div>
          <div className="cradles">
            <div className="ball">
              <svg viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="rotate-circle-first"
                />
              </svg>
              <div className="face">
                <div className="eyes"></div>
                <div className="smile happy"></div>
              </div>
            </div>

            <div className="ball">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
              </svg>
              <div className="face">
                <div className="eyes"></div>
                <div className="smile no-emotion"></div>
              </div>
            </div>

            <div className="ball">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
              </svg>
              <div className="face">
                <div className="eyes"></div>
                <div className="smile no-emotion"></div>
              </div>
            </div>

            <div className="ball">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
              </svg>
              <div className="face">
                <div className="eyes"></div>
                <div className="smile no-emotion"></div>
              </div>
            </div>

            <div className="ball">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="rotate-circle-last" />
              </svg>
              <div className="face">
                <div className="eyes"></div>
                <div className="smile tongue"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};
