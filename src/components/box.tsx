import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'gatsby';
import { theme } from '@style';

const Container = styled.div`
  background-color: #222;
  height: 400px;
  position: relative;
  width: 100%;

  ${theme.mediaQueries('mobileLarge')`
    width: 400px;
  `}
`;

const DayLinkAnimation = keyframes`
  0% {
    opacity: 0;
    top: 0;
  }

  75% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    top: -20px;
  }
`;

const DayLink = styled(Link)<{ $hasFocus: boolean }>`
  align-items: center;
  cursor: pointer;
  display: flex;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  white-space: nowrap;
  z-index: 0;

  ${props =>
    props.$hasFocus &&
    css`
      animation: ${DayLinkAnimation} 0.7s ease-in forwards;
    `}
`;

export const Box = ({
  title,
  link,
  componentName,
  children,
}: {
  title: string;
  link: string;
  componentName: string;
  children: React.ReactNode;
}) => {
  const [hasFocus, setHasFocus] = React.useState(false);
  return (
    <Container
      onMouseOver={() => setHasFocus(true)}
      onMouseLeave={() => setHasFocus(false)}
      onTouchStart={() => setHasFocus(true)}
      onTouchEnd={() => setHasFocus(true)}
    >
      <DayLink
        to={`/days/${link}`}
        state={{ componentName }}
        $hasFocus={hasFocus}
      >
        {title}
        <RiArrowRightSLine />
      </DayLink>
      {children}
    </Container>
  );
};
