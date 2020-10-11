import React, { useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { theme } from '@style';
import { Box } from '@components';
// Date : 30.9.2020

const Container = styled.div`
  align-items: center;
  background: linear-gradient(
    170deg,
    ${theme.color.day10Background} 35%,
    ${theme.color.day10Background2} 100%
  );
  color: ${theme.color.day8Text};
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  height: 100%;
  overflow: hidden;
  padding: 16px;
  width: 100%;
`;

const Headline = styled.div`
  color: ${theme.color.main};
  font-size: ${theme.fontSize.md};
  letter-spacing: 2px;
  padding: 16px 0;
  text-align: center;
  text-transform: uppercase;

  span {
    display: block;
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
  }
`;

const PrimaryCircleWrapper = styled.div`
  height: 140px;
  position: relative;
  width: 100%;
`;
const SecondaryCircleWrapper = styled.div`
  height: 140px;
  position: relative;
  width: 100%;
`;

const SecondRow = styled.div`
  display: flex;
  width: 100%;
`;

const ValueText = styled.div<{ size: 's' | 'm' }>`
  color: ${theme.color.main};
  font-size: ${props =>
    props.size === 's' ? theme.fontSize.md : theme.fontSize.lg};
  font-weight: 600;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);

  span {
    display: block;
    font-size: ${props =>
      props.size === 's' ? theme.fontSize.xxs : theme.fontSize.md};
    font-weight: 400;
    opacity: 0.7;
  }
`;

const Svg = styled.svg`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const animateCircle = (x: number, y: number) => keyframes`
  from {
    stroke-dashoffset: ${x};
  }

  to {
    stroke-dashoffset: ${y};
  }
`;

const Circle = styled.circle<{
  goal: number;
  offset: number;
  isBig?: boolean;
  isEmpty?: boolean;
}>`
  fill: transparent;
  stroke: ${theme.color.day10Circle};
  stroke-width: ${props => (props.isBig ? '10' : '6')};
  transform: rotate(-90deg);
  transform-origin: center;

  ${props =>
    !props.isEmpty &&
    css<{
      goal: number;
      offset: number;
      isBig?: boolean;
    }>`
      animation: ${animateCircle(props.offset * 1.5, props.offset)} 2s
        ease-in-out;
      stroke: ${props =>
        props.isBig ? theme.color.day10Green : theme.color.day10Blue};
      stroke-dashoffset: ${props.offset};
      stroke-linecap: round;
    `};
`;

type statsDataType = {
  name: string;
  dailyGoal: number;
  current: number;
};

export const Day10 = () => {
  const [kcal] = useState<statsDataType>({
    name: 'kcal',
    dailyGoal: 3200,
    current: 2387,
  });
  const [steps] = useState<statsDataType>({
    name: 'steps',
    dailyGoal: 10000,
    current: 8914,
  });

  const [kms] = useState<statsDataType>({
    name: 'km',
    dailyGoal: 10,
    current: 4.21,
  });

  return (
    <Box title="Day 10" link="day10" componentName="Day10">
      <Container>
        <Headline>
          your daily <span>progress</span>
        </Headline>
        <PrimaryCircleWrapper>
          <DataTextValue current={kcal.current} name={kcal.name} size="m" />
          <Svg>
            <CircleComponent
              r="60"
              dailyGoal={kcal.dailyGoal}
              current={kcal.current}
              isEmpty
              isBig
            />
            <CircleComponent
              r="60"
              dailyGoal={kcal.dailyGoal}
              current={kcal.current}
              isBig
            />
          </Svg>
        </PrimaryCircleWrapper>
        <SecondRow>
          <SecondaryCircleWrapper>
            <DataTextValue current={steps.current} name={steps.name} size="s" />

            <Svg>
              <CircleComponent
                r="50"
                dailyGoal={steps.dailyGoal}
                current={steps.current}
                isEmpty
              />
              <CircleComponent
                r="50"
                dailyGoal={steps.dailyGoal}
                current={steps.current}
              />
            </Svg>
          </SecondaryCircleWrapper>
          <SecondaryCircleWrapper>
            <DataTextValue
              current={kms.current}
              name={kms.name}
              size="s"
              isDecimal
            />
            <Svg>
              <CircleComponent
                r="50"
                dailyGoal={kms.dailyGoal}
                current={kms.current}
                isEmpty
              />
              <CircleComponent
                r="50"
                dailyGoal={kms.dailyGoal}
                current={kms.current}
              />
            </Svg>
          </SecondaryCircleWrapper>
        </SecondRow>
      </Container>
    </Box>
  );
};

type CircleComponentType = {
  r: string;
  dailyGoal: number;
  current: number;
  isEmpty?: boolean;
  isBig?: boolean;
};

const CircleComponent = ({
  r,
  dailyGoal,
  current,
  isEmpty,
  isBig,
}: CircleComponentType) => (
  <Circle
    cx="50%"
    cy="50%"
    r={r}
    pathLength={dailyGoal}
    strokeDasharray={dailyGoal}
    goal={dailyGoal}
    offset={dailyGoal - current}
    isEmpty={isEmpty}
    isBig={isBig}
  />
);

type DataTextValueType = {
  name: string;
  current: number;
  size: 'm' | 's';
  isDecimal?: boolean;
};
const DataTextValue = ({
  current,
  name,
  isDecimal,
  size,
}: DataTextValueType) => {
  const [dataValue, setDataValue] = useState(current);

  const upCount = useCallback(
    (
      from: number,
      to: number,
      setData: React.Dispatch<React.SetStateAction<number>>,
      isDecimal?: boolean
    ) => {
      let current = from;
      const totalToAdd: number = to - from;
      let addEachTime: number;

      if (isDecimal) {
        const num = (totalToAdd / 2000) * 100;

        addEachTime = Number(num.toFixed(2));
      } else {
        addEachTime = Math.round((totalToAdd / 2000) * 100);
      }

      const goUp = setInterval(() => {
        current += addEachTime;
        setData(isDecimal ? Number(current.toFixed(2)) : current);

        if (current >= to) {
          setData(to);
          clearInterval(goUp);
        }
      }, 100);
    },
    []
  );

  useEffect(() => {
    upCount(Math.round(dataValue * 0.5), dataValue, setDataValue, isDecimal);
  }, []);

  return (
    <ValueText size={size}>
      {dataValue} <span>{name}</span>
    </ValueText>
  );
};
