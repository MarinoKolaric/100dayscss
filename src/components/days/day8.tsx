import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@style';
import { Box } from '@components';
// Date : 8.9.2020

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day8Background};
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 100%;
`;

export const Day8 = () => {
  return (
    <Box title="Day 8" link="day8" componentName="Day8">
      <Container></Container>
    </Box>
  );
};
