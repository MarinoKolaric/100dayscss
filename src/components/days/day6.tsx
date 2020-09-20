import React from 'react';
import styled from 'styled-components';
import {
  FaSearch,
  FaUser,
  FaBell,
  FaComment,
  FaWrench,
  FaSlidersH,
  FaThLarge,
} from 'react-icons/fa';
import { Box } from '@components';
import { theme } from '@style';
//Date: 9.9.2020

const Container = styled.div`
  align-items: center;
  background: ${theme.color.day6Background};
  color: ${theme.color.day6Text};
  display: flex;
  font-family: 'Open Sans';
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Frame = styled.div`
  background-color: ${theme.color.main};
  box-shadow: ${theme.boxShadow};
  display: flex;
  height: 300px;
  width: 300px;
`;

const Header = styled.div`
  background-color: ${theme.color.day6Blue};
  color: ${theme.color.main};
`


export const Day6 = () => {

  return (
    <Box title="Day 6" link="day6" componentName="Day6">
      <Container>
        <Frame>

        </Frame>
      </Container>
    </Box>
  );
};
