import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  display: flex;
  font-size: 200rem;
  font-weight: 600;
  left: 71px;
  letter-spacing: -18px;
  line-height: 1;
  position: absolute;
  text-transform: uppercase;
  transform: rotate(90deg);
  transform-origin: left;
  width: 522px;
`;

export const DayText = ({ text }: { text: string }) => <Text>{text}</Text>;
