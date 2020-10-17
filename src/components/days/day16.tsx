import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '@style';
import fontFiles from '@style/fonts';
import { Box } from '@components';
// Date : 15.10.2020

type StarType = {
  x: number;
  y: number;
  s: number;
};

const Stars: Array<StarType> = [
  {
    x: 26,
    y: 12,
    s: 10,
  },
  {
    x: 50,
    y: 8,
    s: 10,
  },
  {
    x: 75,
    y: 12,
    s: 10,
  },
  {
    x: 62,
    y: 4,
    s: 6,
  },
  {
    x: 32,
    y: 28,
    s: 9,
  },
  {
    x: 60,
    y: 22,
    s: 5,
  },
  {
    x: 10,
    y: 48,
    s: 5,
  },
  {
    x: 29,
    y: 47,
    s: 5,
  },
  {
    x: 53,
    y: 42,
    s: 10,
  },
  {
    x: 70,
    y: 54,
    s: 3,
  },
  {
    x: 85,
    y: 42,
    s: 3,
  },
  {
    x: 82,
    y: 58,
    s: 4,
  },
  {
    x: 15,
    y: 70,
    s: 5,
  },
  {
    x: 25,
    y: 62,
    s: 8,
  },
  {
    x: 38,
    y: 75,
    s: 6,
  },
  {
    x: 48,
    y: 71,
    s: 5,
  },
  {
    x: 72,
    y: 70,
    s: 5,
  },
  {
    x: 94,
    y: 75,
    s: 5,
  },
  {
    x: 6,
    y: 84,
    s: 5,
  },
];

const Container = styled.div`
  @font-face {
    font-family: 'Elevate';
    font-style: normal;
    font-weight: normal;
    src: local('Elevate'), url(${fontFiles.ElevateWOFF}) format('woff'),
      url(${fontFiles.ElevateEOT}) format('eot'),
      url(${fontFiles.ElevateSVG}) format('svg');
  }

  align-items: center;
  background-color: ${theme.color.day16Background};
  display: flex;
  flex-direction: column;
  font-family: 'Elevate';
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 100%;
  z-index: 0;
`;

const BadgeWrapper = styled.div<{ isDay: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  transform: perspective(880px)
    ${props => (props.isDay ? 'rotateY(1turn)' : 'rotateY(0.5turn)')};
  transform-style: preserve-3d;
  transition: all 1.5s ease-in-out;
  width: 100%;
`;

const Badge = styled.div`
  backface-visibility: hidden;

  border: 12px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 320px;
  overflow: hidden;
  position: absolute;

  width: 320px;

  &:last-child {
    transform: rotateY(0.5turn);
  }
`;

const Sky = styled.div`
  background: linear-gradient(
    to bottom,
    ${props => props.theme.day16Stripe5} 20%,
    ${props => props.theme.day16Stripe4} 20% 40%,
    ${props => props.theme.day16Stripe3} 40% 60%,
    ${props => props.theme.day16Stripe2} 60% 80%,
    ${props => props.theme.day16Stripe1} 80%
  );
  flex-grow: 3;
  position: relative;
`;

const Ground = styled.div`
  background-color: ${theme.color.day16Sand};
  flex-grow: 2;
  position: relative;
`;

const Sun = styled.div`
  --size: 26px;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.day16Sun} 50%,
    transparent 50%
  );
  border-radius: 50%;
  bottom: calc(var(--size) / 2 * -1);
  content: '';
  height: var(--size);
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: var(--size);
`;

const Cactus = styled.div<{ size: number; x: number; y: number }>`
  background-color: ${theme.color.day16Cactus};
  border-radius: 20px;
  height: 100%;
  left: ${props => `${props.x}%`};
  position: absolute;
  top: ${props => `${props.y}%`};
  transform: scale(${props => props.size});
  transform-origin: bottom;
`;

const CactusBody = styled.div`
  background-color: ${theme.color.day16Cactus};
  border-radius: 20px;
  height: 54px;
  position: absolute;
  width: 6px;
`;

const CactusArm = styled.div<{ side: 'l' | 'r' }>`
  background-color: ${theme.color.day16Cactus};
  border-radius: 20px;
  height: 20px;
  left: ${props => props.side === 'l' && '-12px'};
  position: absolute;
  right: ${props => props.side === 'r' && '-18px'};
  top: ${props => (props.side === 'r' ? '4%' : '13%')};
  width: 6px;

  :first-of-type {
    top: 6%;
  }

  &::before {
    background-color: ${theme.color.day16Cactus};
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    bottom: 0;
    content: '';
    height: 6px;
    position: absolute;
    right: ${props => props.side === 'r' && '0'};
    width: 18px;
  }
`;

const Road = styled.div`
  background-color: ${theme.color.day16Road};
  height: 100%;
  left: 50%;
  position: absolute;
  transform: perspective(880px) translateX(-50%)
    matrix3d(1, 0, 0, 0, 29, 24, 342, 0, 0, 0, 1, 0, 0, 2, 1, 1);
  width: 150px;
`;

const RoadLine = styled.div`
  border-left: 6px solid ${props => props.theme.day16RoadLine};
  border-right: 6px solid ${props => props.theme.day16RoadLine};
  height: 100%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 16px;
`;

const TextWrapper = styled.div`
  color: ${theme.color.main};
  font-size: 55rem;
  left: 50%;
  position: absolute;
  top: 13%;
  transform: translateX(-50%);
`;

const Subtitle = styled.div`
  font-family: 'Oswald';
  font-size: 46rem;
  left: 50%;
  position: absolute;
  top: 75%;
  transform: translateX(-50%);

  &::before {
    background-color: ${theme.color.main};
    border-radius: 50%;
    content: '';
    height: 8px;
    left: -12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
  }

  &::after {
    background-color: ${theme.color.main};
    border-radius: 50%;
    content: '';
    height: 8px;
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
  }
`;

const Star = styled.div<StarType>`
  font-family: 'Open Sans';
  font-size: ${props => props.s}rem;

  &::before {
    color: ${theme.color.main};
    content: '+';
    left: ${props => props.x}%;
    position: absolute;
    top: ${props => props.y}%;
  }
`;

const dayTheme = {
  day16Stripe1: '#ff5e27',
  day16Stripe2: '#ffa527',
  day16Stripe3: '#0099e7',
  day16Stripe4: '#0072ac',
  day16Stripe5: '#00599b',
  day16Sun: '#ffd527',
  day16RoadLine: '#cc8c31',
};

const nightTheme = {
  day16Stripe1: '#2c3e71',
  day16Stripe2: '#243463',
  day16Stripe3: '#182751',
  day16Stripe4: '#142041',
  day16Stripe5: '#001631',
  day16Sun: '#ffe3b8',
  day16RoadLine: '#95723c',
};

export const Day16 = () => {
  const [isDay, setIsDay] = useState(false);

  return (
    <Box title="Day 16" link="day16" componentName="Day16">
      <Container>
        <BadgeWrapper onClick={() => setIsDay(!isDay)} isDay={isDay}>
          <ThemeProvider theme={dayTheme}>
            <Badge key={1}>
              <Sky>
                <TextWrapper>
                  <div>Route</div>
                  <Subtitle>66</Subtitle>
                </TextWrapper>
                <Sun />
              </Sky>
              <Ground>
                <Road>
                  <RoadLine />
                </Road>
                <Cactus size={0.9} x={13} y={-13}>
                  <CactusBody />
                  <CactusArm side="l" />
                  <CactusArm side="r" />
                </Cactus>
                <Cactus size={0.4} x={35} y={-62}>
                  <CactusBody />
                  <CactusArm side="r" />
                  <CactusArm side="l" />
                </Cactus>
                <Cactus size={0.3} x={61} y={-75}>
                  <CactusBody />
                  <CactusArm side="r" />
                  <CactusArm side="l" />
                </Cactus>
                <Cactus size={0.7} x={88} y={-37}>
                  <CactusBody />
                  <CactusArm side="r" />
                  <CactusArm side="l" />
                </Cactus>
                <Cactus size={1} x={78} y={11}>
                  <CactusBody />
                  <CactusArm side="l" />
                  <CactusArm side="r" />
                </Cactus>
              </Ground>
            </Badge>
          </ThemeProvider>
          <ThemeProvider theme={nightTheme}>
            <Badge key={2}>
              <Sky>
                {Stars.map((star: StarType, i) => (
                  <Star key={i} x={star.x} y={star.y} s={star.s}></Star>
                ))}
                <TextWrapper>
                  <div>Route</div>
                  <Subtitle>66</Subtitle>
                </TextWrapper>
                <Sun />
              </Sky>
              <Ground>
                <Road>
                  <RoadLine />
                </Road>
                <Cactus size={0.9} x={13} y={-13}>
                  <CactusBody />
                  <CactusArm side="l" />
                  <CactusArm side="r" />
                </Cactus>
                <Cactus size={0.4} x={35} y={-62}>
                  <CactusBody />
                  <CactusArm side="r" />
                  <CactusArm side="l" />
                </Cactus>
                <Cactus size={0.3} x={61} y={-75}>
                  <CactusBody />
                  <CactusArm side="r" />
                  <CactusArm side="l" />
                </Cactus>
                <Cactus size={0.7} x={88} y={-37}>
                  <CactusBody />
                  <CactusArm side="r" />
                  <CactusArm side="l" />
                </Cactus>
                <Cactus size={1} x={78} y={11}>
                  <CactusBody />
                  <CactusArm side="l" />
                  <CactusArm side="r" />
                </Cactus>
              </Ground>
            </Badge>
          </ThemeProvider>
        </BadgeWrapper>
      </Container>
    </Box>
  );
};
