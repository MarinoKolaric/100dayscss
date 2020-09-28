import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Box } from '@components';
import { theme } from '@style';
//Date: 24-26.9.2020

interface IDrop {
  size: 'small' | 'medium' | 'large';
  dropTime: number;
}

interface ICrater {
  size: number;
  left: number;
  top: number;
}

interface IHill {
  type: 'fg' | 'bg';
  w: number;
  h: number;
  b: number;
  l?: () => number | string;
  r?: () => number | string;
}

const drops: Array<IDrop> = [
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
  {
    size: 'small',
    dropTime: 1.9,
  },
  {
    size: 'medium',
    dropTime: 1.3,
  },
  {
    size: 'large',
    dropTime: 0.7,
  },
];

const craters: Array<ICrater> = [
  {
    size: 12,
    left: 6,
    top: 4,
  },
  {
    size: 16,
    left: 18,
    top: 10,
  },
  {
    size: 10,
    left: 60,
    top: 24,
  },
  {
    size: 10,
    left: 44,
    top: 0,
  },
  {
    size: 12,
    left: 36,
    top: 38,
  },
  {
    size: 8,
    left: 12,
    top: 34,
  },
  {
    size: 10,
    left: 32,
    top: 58,
  },
  {
    size: 14,
    left: 6,
    top: 56,
  },
  {
    size: 16,
    left: 56,
    top: 44,
  },
];

const hills: Array<IHill> = [
  {
    type: 'fg',
    w: 330,
    h: 270,
    b: -172,
    l: function () {
      return 50 % -(this.w / 2);
    },
  },
  {
    type: 'fg',
    w: 260,
    h: 200,
    b: -124,
    l: function () {
      return -100;
    },
  },
  {
    type: 'fg',
    w: 280,
    h: 180,
    b: -120,
    r: function () {
      return -150;
    },
  },
  {
    type: 'bg',
    w: 338,
    h: 280,
    b: -140,
    r: function () {
      return -120;
    },
  },
  {
    type: 'bg',
    w: 368,
    h: 170,
    b: -40,
    l: function () {
      return -150;
    },
  },
];

const rise = keyframes`
  0% {
    transform: translate(-50%, 220%);
  }

  100% {
    transform: translate(0, 0);
  }

`;

const drop = keyframes`
    0% {
      transform: translate3d(40px, -320px, 0) scaleX(1) scaleY(1) rotate(17deg);
    }

    85% {
      transform: translate3d(0, 0, 0) scaleX(1) scaleY(1) rotate(17deg);
    }

    100% {
      transform: translate3d(0, 0, 0) scaleX(3) scaleY(0) rotate(0deg);
    }

`;

const Container = styled.div`
  align-items: center;
  ${theme.boxShadow}
  background: ${theme.color.day7Background};
  color: ${theme.color.day7Text};
  font-family: 'Open Sans';
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Hero = styled.div`
  display: flex;
  flex: 2 0;
  overflow: hidden;
  position: relative;
`;

const Info = styled.div`
  align-items: center;
  background-color: ${theme.color.main};
  display: flex;
  font-size: ${theme.fontSize.xs};
  height: 92px;
  padding: 0 12px;

  ${theme.mediaQueries('mobileLarge')(`
    font-size: ${theme.fontSize.sm};
    padding: 0 16px;
  `)}
`;

const Temp = styled.h1`
  font-size: 45rem;
`;

const WeatherInfo = styled.div`
  padding: 0 12px;
`;

const InfoDays = styled.div`
  margin-left: auto;
`;

const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Day = styled.div`
  display: inline-block;
  padding-right: 8px;
  text-transform: uppercase;
`;

const DayTemp = styled.div`
  display: inline-block;
  font-weight: 600;
  text-align: right;
`;

const Hill = styled.div<IHill>`
  background-color: ${props =>
    props.type === 'fg' ? theme.color.day7HillFg : theme.color.day7HillBg};
  border-radius: 50%;
  bottom: ${props => `${props.b}px`};
  height: ${props => `${props.h}px`};
  left: ${props => `${props.l}px`};
  right: ${props => `${props.r}px`};
  position: absolute;
  width: ${props => `${props.w}px`};
  z-index: ${props => (props.type === 'fg' ? 3 : 2)};
`;

const Moon = styled.div`
  animation: ${rise} 2s ease-out;
  background-color: ${theme.color.day7Moon};
  border-radius: 80px;
  box-shadow: 0 0 10px 0 ${theme.color.day7Moon};
  height: 72px;
  left: 56px;
  overflow: hidden;
  position: absolute;
  top: 40px;
  width: 72px;
`;

const Crater = styled.div<ICrater>`
  background-color: ${theme.color.day7MoonCrater};
  border-radius: 50%;
  position: absolute;
  height: ${props => `${props.size}px`};
  left: ${props => `${props.left}px`};
  top: ${props => `${props.top}px`};
  width: ${props => `${props.size}px`};
`;

////////////////////////////////////////////
interface IDropExtended extends IDrop {
  delayTime: number;
  i: number;
}

const Drop = styled.div.attrs<IDropExtended>(props => ({
  style: {
    animationDelay: `${props.delayTime}s`,
    animationDuration: `${props.dropTime}s`,
  },
}))<IDropExtended>`
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: ${drop};
  animation-timing-function: linear;
  background-color: ${theme.color.day7Drop};
  border-radius: 50%;
  bottom: 0;
  height: 8px;
  left: calc((-20 + 38) * ${props => `${props.i}px`});
  position: absolute;
  transform-origin: 50% 100%;
  width: 8px;
  z-index: 10;

  ${props =>
    props.size === 'medium' &&
    css`
      height: 6px;
      opacity: 0.6;
      width: 6px;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      height: 4px;
      opacity: 0.3;
      width: 4px;
    `}

  &::before {
    background-color: ${theme.color.day7Drop};
    border-radius: 3px;
    content: '';
    display: block;
    height: 6px;
    left: 1px;
    position: absolute;
    top: -2px;
    width: 6px;
  }

  &::after {
    background-color: ${theme.color.day7Drop};
    border-radius: 50%;
    content: '';
    display: block;
    height: 10px;
    left: 2px;
    position: absolute;
    top: -5px;
    width: 4px;
  }
`;

export const Day7 = () => {
  return (
    <Box title="Day 7" link="day7" componentName="Day7">
      <Container>
        <Frame>
          <Hero>
            {drops.map((drop, i) => (
              <Drop
                key={i}
                size={drop.size}
                i={i}
                dropTime={drop.dropTime + (Math.random() * 2) / 10}
                delayTime={(Math.random() * 50) / 25}
              />
            ))}
            <Moon>
              {craters.map((crater, i) => (
                <Crater
                  key={i}
                  size={crater.size}
                  left={crater.left}
                  top={crater.top}
                />
              ))}
            </Moon>
            {hills.map((hill, i) => (
              <Hill
                key={i}
                type={hill.type}
                w={hill.w}
                h={hill.h}
                b={hill.b}
                l={hill.l && hill.l()}
                r={hill.r && hill.r()}
              />
            ))}
          </Hero>
          <Info>
            <Temp>21°</Temp>
            <WeatherInfo>
              <div>Wind: E 7 km/h</div>
              <div>Humidity: 87%</div>
            </WeatherInfo>
            <InfoDays>
              <DayWrapper>
                <Day>tue</Day>
                <DayTemp>21° / 9°</DayTemp>
              </DayWrapper>
              <DayWrapper>
                <Day>wed</Day>
                <DayTemp>23° / 11°</DayTemp>
              </DayWrapper>
            </InfoDays>
          </Info>
        </Frame>
      </Container>
    </Box>
  );
};
