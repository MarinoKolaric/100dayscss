import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { theme } from '@style';
import days, { LayoutDay, DayText } from '@components';
import { getColorStrings } from '@utils';

export const query = graphql`
  query($dayId: String) {
    file(id: { eq: $dayId }) {
      name
    }
  }
`;

const NavigationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  width: calc(100% + 24px);
  z-index: 2;
`;

type NavDayType = {
  $dayColor: string;
  direction: 'back' | 'forward';
};

const NavDay = styled(Link)<NavDayType>`
  align-items: center;
  background-color: ${props => theme.color[props.$dayColor]};
  color: #fff;
  display: flex;
  font-size: 32rem;
  height: 40px;
  justify-content: center;
  letter-spacing: -4px;
  padding: 0 8px;
  position: relative;
  text-align: center;
  transition: 0.3s all ease-in-out;
  width: 50%;

  &:hover {
    width: 100%;
  }

  ${props =>
    props.direction === 'back' &&
    css<NavDayType>`
      margin-left: 20px;

      &::after {
        border-bottom: 20px solid transparent;
        border-right: 20px solid ${props => theme.color[props.$dayColor]};
        border-top: 20px solid transparent;
        bottom: 0;
        content: '';
        height: 0;
        left: -20px;
        position: absolute;
        width: 0;
      }
    `}
  ${props =>
    props.direction === 'forward' &&
    css<NavDayType>`
      margin-right: 20px;

      &::after {
        border-bottom: 20px solid transparent;
        border-left: 20px solid ${props => theme.color[props.$dayColor]};
        border-top: 20px solid transparent;
        bottom: 0;
        content: '';
        height: 0;
        position: absolute;
        right: -20px;
        width: 0;
      }
    `}
`;

const Day = ({ data }) => {
  const [dayColors] = useState<[string, string]>(
    getColorStrings(data.file.name)
  );

  return (
    <>
      <DayText text={data.file.name} />
      <LayoutDay>
        {days.map((Day, i) => {
          if (Day().props.link === data.file.name) {
            return <Day key={i} />;
          }
          return null;
        })}
        <NavigationWrapper>
          <NavDay
            to={`/days/${dayColors[0]}`}
            $dayColor={`${dayColors[0]}Background`}
            direction="back"
          >
            Previous
          </NavDay>
          <NavDay
            to={`/days/${dayColors[1]}`}
            $dayColor={`${dayColors[1]}Background`}
            direction="forward"
          >
            Next
          </NavDay>
        </NavigationWrapper>
      </LayoutDay>
    </>
  );
};

export default Day;
