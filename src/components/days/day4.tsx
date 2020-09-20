import React from 'react';
import styled from 'styled-components';
import { Box } from '@components';
import { theme } from '@style';
//Date: 12.9.2020

const Container = styled.div`
  align-items: center;
  background: ${theme.color.day4Background};

  display: flex;
  font-family: 'Open Sans';
  height: 100%;
  justify-content: center;
  overflow: auto;
  position: relative;
  width: 100%;
`;

const Card = styled.div`
  background-color: ${theme.color.main};
  border-radius: 4px;
  box-shadow: ${theme.boxShadow};
  min-width: 280px;
  overflow: hidden;
  width: 280px;
`;

const Header = styled.div`
  background-color: ${theme.color.day4Yellow};
  color: #fff;
  display: flex;
  font-size: ${theme.fontSize.xs};
  font-weight: 600;
  justify-content: space-between;
  padding: 12px 16px;
`;
const HeaderInfo = styled.div``;

const HeaderTitle = styled.h1`
  text-transform: uppercase;
`;
const HeaderWeek = styled.p`
  font-size: ${theme.fontSize.xxs};
  font-weight: 400;
`;
const HeaderRevenue = styled.div`
  text-align: right;
`;
const HeaderRevenueTitle = styled.p`
  font-size: ${theme.fontSize.xxs};
  font-weight: 400;
`;
const HeaderRevenueMoney = styled.p`
  font-size: ${theme.fontSize.xs};
`;

const Body = styled.div`
  padding: 16px 12px;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 12px;
`;

const Label = styled.p<{ color: string }>`
  align-items: center;
  color: ${theme.color.gray1};
  display: flex;
  font-size: ${theme.fontSize.xxs};
  padding-left: 32px;
  position: relative;

  &::before {
    background-color: ${props => props.color};
    border-radius: 4px;
    content: '';
    display: block;
    height: 4px;
    left: 16px;
    position: absolute;
    width: 12px;
  }
`;

const Statistics = styled.div`
  position: relative;
`;

const Svg = styled.svg`
  fill: none;
  stroke-width: 2;
`;

const Line = styled.line`
  stroke: ${theme.color.gray4};
  stroke-width: 0.3;
`;

const Polyline = styled.polyline<{ color: string }>`
  stroke: ${props => props.color};
`;

const Dot = styled.div<{ x: number; y: number; color: string }>`
  background-color: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;
  height: 8px;
  /* stylelint-disable-next-line */
  left: ${props => `${props.x}px`};
  position: absolute;
  /* stylelint-disable-next-line */
  top: ${props => `${props.y}px`};
  width: 8px;

  &:hover div {
    display: block;
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
    visibility: visible;
  }
`;

const DotTooltip = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 4px;
  color: #fff;
  font-size: ${theme.fontSize.xxs};
  font-weight: 600;
  left: 50%;
  opacity: 0;
  padding: 2px 4px;
  position: absolute;
  text-align: center;
  top: -24px;
  transform: translate3d(-50%, 50%, 0);
  transition: transform 0.4s ease-out 0s, opacity 0.4s ease-out 0s;

  &::after {
    background-color: ${props => props.color};
    bottom: -2px;
    content: '';
    height: 4px;
    left: calc(50% - 2px);
    position: absolute;
    transform: rotate(45deg);
    width: 4px;
  }
`;

const Days = styled.div`
  color: ${theme.color.gray3};
  display: flex;
  font-size: ${theme.fontSize.xxs};
  justify-content: space-between;
  text-transform: uppercase;
`;

export const Day4 = () => {
  const daysInWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const polylinePointsRed = [
    [2, 60],
    [38, 20],
    [74, 30],
    [110, 20],
    [146, 46],
    [182, 56],
    [218, 32],
    [254, 14],
  ];
  const polylinePointsBlue = [
    [2, 70],
    [38, 55],
    [74, 75],
    [110, 65],
    [146, 84],
    [182, 95],
    [218, 82],
    [254, 58],
  ];

  return (
    <Box title="Day 4" link="day4" componentName="Day4">
      <Container>
        <Card>
          <Header>
            <HeaderInfo>
              <HeaderTitle>Weekly Report</HeaderTitle>
              <HeaderWeek>01 Feb - 07 Feb</HeaderWeek>
            </HeaderInfo>
            <HeaderRevenue>
              <HeaderRevenueTitle>Revenue</HeaderRevenueTitle>
              <HeaderRevenueMoney>$ 3621.79</HeaderRevenueMoney>
            </HeaderRevenue>
          </Header>
          <Body>
            <LabelWrapper>
              <Label color={theme.color.day4Red}>Views</Label>
              <Label color={theme.color.day4Blue}>Purchases</Label>
            </LabelWrapper>
            <Statistics>
              <Svg height="100px" width="100%">
                <Line x1="0" y1="0" x2="256" y2="0" />
                <Line x1="0" y1="50" x2="256" y2="50" />
                <Line x1="0" y1="100" x2="256" y2="100" />
                <Polyline
                  points={polylinePointsRed}
                  color={theme.color.day4Red}
                />
                <Polyline
                  points={polylinePointsBlue}
                  color={theme.color.day4Blue}
                />
              </Svg>
              {polylinePointsRed.map((el: Array<number>, i) => (
                <Dot key={i} x={el[0] - 3} y={el[1] - 3} color={theme.color.day4Red}>
                  <DotTooltip color={theme.color.day4Red}>{el[1]}</DotTooltip>
                </Dot>
              ))}
              {polylinePointsBlue.map((el: Array<number>, i) => (
                <Dot key={i} x={el[0] - 3} y={el[1] - 3} color={theme.color.day4Blue}>
                  <DotTooltip color={theme.color.day4Blue}>{el[1]}</DotTooltip>
                </Dot>
              ))}
            </Statistics>
            <Days>
              {daysInWeek.map((day, i) => (
                <p key={i}>{day}</p>
              ))}
            </Days>
          </Body>
        </Card>
      </Container>
    </Box>
  );
};
