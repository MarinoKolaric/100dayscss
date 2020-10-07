import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { theme } from '@style';
import { Box } from '@components';
// Date : 03.10.2020

interface ILeg {
  side: 'r' | 'l';
  colors: Array<string>;
}

interface ICharacter {
  name: string;
  colors: Array<string>;
}

const containerAnimation = keyframes`
  to {
    background-color: #0f0f10;
  }
`;

const BodyAnimation = keyframes`
  from {
    transform: translateX(-300%) rotateZ(0deg)  scale(0.5);
  }

  to {
    transform: translateX(300%) rotateZ(720deg)   scale(0.5);
  }
`;

const Messages = [
  {
    getMessage: function (x: string) {
      return `${x} is sus`;
    },
  },
  {
    getMessage: function (x: string) {
      return `I saw ${x} vent!`;
    },
  },
  {
    getMessage: function (x: string) {
      return `Skip or we vote out ${x}`;
    },
  },
  {
    getMessage: function (x: string) {
      return `${x} is kinda sus`;
    },
  },
  {
    getMessage: function (x: string) {
      return `${x} killed crewmate in front of me!!`;
    },
  },
  {
    getMessage: function (x: string) {
      return `Where?`;
    },
  },
  {
    getMessage: function (x: string) {
      return `Where were you ${x} ??`;
    },
  },
  {
    getMessage: function (x: string) {
      return `${x}, is this self report??`;
    },
  },
  {
    getMessage: function (x: string) {
      return `${x}, did you fake your task?`;
    },
  },
  {
    getMessage: function (x: string) {
      return `${x}, I saw you on cam, don't lie!`;
    },
  },
];

const Characters: Array<ICharacter> = [
  {
    name: 'Red',
    colors: ['#d7200a', '#831537'],
  },
  {
    name: 'Dark Blue',
    colors: ['#0d34db', '#031a95'],
  },
  {
    name: 'Dark Green',
    colors: ['#057027', '#02442c'],
  },
  {
    name: 'Pink',
    colors: ['#fa68bb', '#b63eb2'],
  },
  {
    name: 'Orange',
    colors: ['#fb8102', '#bf4610'],
  },
  {
    name: 'Yellow',
    colors: ['#f6eb4b', '#c88719'],
  },
  {
    name: 'Black',
    colors: ['#3c464d', '#1e1f26'],
  },
  {
    name: 'White',
    colors: ['#d4e0ef', '#8095c0'],
  },
  {
    name: 'Purple',
    colors: ['#6d3cc0', '#3b207f'],
  },
  {
    name: 'Brown',
    colors: ['#754a18', '#632a10'],
  },
  {
    name: 'Light Blue',
    colors: ['#22e9db', '#149ec3'],
  },
  {
    name: 'Light Green',
    colors: ['#42d52f', '#06943d'],
  },
];

const Container = styled.div`
  align-items: center;
  animation: ${containerAnimation} 1s 4s forwards ease-in;
  background-color: ${theme.color.day11Background};
  color: ${theme.color.main};
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 100%;
`;

const Body = styled.div<{ colors: Array<string> }>`
  animation: ${BodyAnimation} 8s 4s forwards linear;
  background-color: ${props => props.colors[0]};
  border: 8px solid ${theme.color.day11Border};
  border-radius: 38px 56px 50px 50px;
  box-shadow: inset 2px -21px 2px 2px ${props => props.colors[1]};
  height: 148px;
  position: relative;
  transform-origin: center;
  width: 100px;
  z-index: 2;
`;

const Eyes = styled.div`
  background-color: ${theme.color.main};
  border: 8px solid ${theme.color.day11Border};
  border-radius: 31% 59% 46% 44%;
  box-shadow: inset 11px -11px 2px 1px ${theme.color.day11Face},
    inset 12px -8px 2px 14px ${theme.color.day11FaceLighter};
  height: 54px;
  position: absolute;
  right: -16px;
  top: 15px;
  transform: rotateZ(-7deg);
  width: 80px;
`;

const LegUp = styled.div<ILeg>`
  background-color: ${props => props.colors[1]};
  border-top: 0;
  bottom: 0;
  height: 22px;
  position: absolute;
  width: 40px;

  ${props =>
    props.side === 'l' &&
    css`
      border-left: 8px solid ${theme.color.day11Border};
      left: -4px;
    `}

  ${props =>
    props.side === 'r' &&
    css`
      border-right: 8px solid ${theme.color.day11Border};
      right: -4px;
    `}
`;
const LegDown = styled.div<ILeg>`
  background-color: ${props => props.colors[1]};
  border: 8px solid ${theme.color.day11Border};
  border-radius: 0 0 12px 20px;
  border-top: 0;
  position: absolute;
  z-index: 2;

  ${props =>
    props.side === 'l' &&
    css`
      bottom: -37px;
      height: 38px;
      left: -4px;
      width: 42px;
    `}

  ${props =>
    props.side === 'r' &&
    css`
      bottom: -32px;
      height: 33px;
      right: -4px;
      width: 40px;
    `}
`;

const Backpack = styled.div<{ colors: Array<string> }>`
  background-color: ${props => props.colors[1]};
  border: 8px solid ${theme.color.day11Border};
  border-radius: 36% 0% 24% 46%;
  box-shadow: inset 0 13px 1px 0 ${props => props.colors[0]};
  height: 90px;
  left: -36px;
  position: absolute;
  top: 24%;
  width: 36px;
`;

const BetweenLegs = styled.div`
  background: ${theme.color.day11Border};
  border-bottom-right-radius: 93%;
  bottom: -7px;
  height: 8px;
  left: 38%;
  position: absolute;
  transform: rotateZ(-2deg);
  width: 29px;
  z-index: 2;
`;

const RemoveEl = keyframes`
  to {
    background-color: #0f0f10;
  }
  
`;

const Shadow = styled.div`
  animation: ${RemoveEl} 0.2s 4s forwards linear;
  background-color: ${theme.color.day11Border};
  border-radius: 50%;
  bottom: -84px;
  height: 96px;
  left: -32%;
  opacity: 0.4;
  position: absolute;
  transform: rotate3d(1, 0, 0, 73deg);
  width: 136px;
`;

const TearAnimation = keyframes`
  from {
    transform: rotate(60deg) scale(0) translate(0, -7px);
  }

  to {
    transform: rotate(60deg) scale(1) translate(14px, 8px);
  }

`;

const TearDrop = styled.div`
  animation: ${TearAnimation} 1.5s 1.5s forwards ease-in;
  animation-name: ${TearAnimation};
  background-color: ${theme.color.day11TearDropLighter};
  border: 3px solid ${theme.color.day11Border};
  border-radius: 0 50% 50%;
  box-shadow: inset 0 -3px 4px 0 ${theme.color.day11TearDrop};
  height: 18px;
  margin-top: 20px;
  transform: rotate(60deg) scale(0);
  width: 18px;
  z-index: 3;
`;

const BlobAnimation = keyframes`
  0%,
  100% {
    opacity: 0;
    visibility: hidden;
  }

`;

const Blob = styled.div`
  align-items: center;
  animation: ${BlobAnimation} 0.2s 4s forwards linear;
  background-color: ${theme.color.main};
  border: 4px solid ${theme.color.day11Border};
  border-radius: 40%;
  color: ${theme.color.day11Border};
  display: flex;
  font-size: ${theme.fontSize.xs};
  font-weight: 600;
  height: 80px;
  justify-content: center;
  padding: 8px;
  position: absolute;
  right: 12px;
  text-align: center;
  top: 16px;
  width: 136px;

  &::after {
    border-bottom: 8px solid transparent;
    border-left: 31px solid ${theme.color.day11Border};
    border-top: 8px solid transparent;
    bottom: 25px;
    content: '';
    height: 0;
    position: absolute;
    right: -8px;
    transform: translate3d(16px, 27px, -5px) rotate(36deg);
    width: 0;
  }
`;

const PlayAgainAnimation = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
    visibility: visible;
  }

`;

const PlayAgain = styled.div`
  align-items: center;
  animation: ${PlayAgainAnimation} 1s 7s forwards linear;
  bottom: 25%;
  color: ${theme.color.main};
  cursor: pointer;
  display: flex;
  letter-spacing: 2px;
  opacity: 0;
  position: absolute;
  visibility: hidden;
`;

const EndGameMessageAnimation = keyframes`
  0% {
    visibility: visible;
  }
  
  100% {
    visibility: visible;
  }

`;

const EndGameMessage = styled.div<{ color: string }>`
  align-items: center;
  animation: ${EndGameMessageAnimation} 3s 7s forwards linear;
  color: ${theme.color.main};
  display: flex;
  font-weight: 600;
  justify-content: center;
  position: absolute;
  visibility: hidden;
  white-space: nowrap;

  > span {
    color: ${props => props.color};
    padding-right: 6px;
  }
`;

const EndGameMessageOverlayAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  
  100% {
    transform: translateX(100%);
  }

`;


const EndGameMessageOverlay = styled.div`
  animation: ${EndGameMessageOverlayAnimation} 3s 7s forwards linear;
  background-color: #0f0f10;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const Day11 = () => {
  const getRandomItemFromArr = (arr: Array<any>) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const [crewmate, setCrewmate] = useState(getRandomItemFromArr(Characters));
  const [blob, setBlob] = useState(getRandomItemFromArr(Messages));

  const restartDay = () => {
    setCrewmate(getRandomItemFromArr(Characters));
    setBlob(getRandomItemFromArr(Messages));
  };

  return (
    <Box title="Day 11" link="day11" componentName="Day11">
      <Container key={crewmate.name}>
        <Crewmate crewmate={crewmate} />
        <Blob>{blob.getMessage(crewmate.name)}</Blob>
        <EndGameMessage color={crewmate.colors[0]}>
          <EndGameMessageOverlay />
          <span>{crewmate.name}{' '}</span>
          was not An Impostor
        </EndGameMessage>
        <PlayAgain onClick={() => restartDay()}>
          Play Again <RiArrowGoBackLine style={{ marginLeft: '4px' }} />
        </PlayAgain>
      </Container>
    </Box>
  );
};

const Crewmate = ({ crewmate }: { crewmate: ICharacter }) => {
  return (
    <Body colors={crewmate.colors}>
      <Eyes />
      <TearDrop />
      <LegUp side="l" colors={crewmate.colors} />
      <LegDown side="l" colors={crewmate.colors} />
      <LegUp side="r" colors={crewmate.colors} />
      <LegDown side="r" colors={crewmate.colors} />
      <Backpack colors={crewmate.colors} />
      <Shadow />
      <BetweenLegs />
    </Body>
  );
};
