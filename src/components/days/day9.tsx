import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@style';
import { Box } from '@components';
// Date : 30.9.2020

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day9Background};
  color: ${theme.color.day8Text};
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  height: 100%;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  height: 40px;
  position: relative;
  width: 140px;
`;

const Checkbox = styled.input`
  height: 0;
  opacity: 0;
  width: 0;
`;

const Slider = styled.div`
  background-color: ${theme.color.day9BulbBackground};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  &::before {
    background-color: #fff;
    border-radius: 50%;
    content: 'X';
    height: 32px;
    left: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
  }
`;

const Text = styled.p`
  color: ${theme.color.main};
  font-family: 'Times new roman';
  font-style: italic;
  padding-top: 32px;
`;

export const Day9 = () => {
  return (
    <Box title="Day 9" link="day9" componentName="Day9">
      <Container>
        {/* <Label>
          <Checkbox type="checkbox" name="toggle" />
          <Slider />
        </Label>
        <Text>I don't wanna be like the others</Text> */}

        <h1 style={{color: theme.color.main}}>Work in progress...</h1>
      </Container>
    </Box>
  );
};
