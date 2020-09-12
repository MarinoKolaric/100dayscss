import React from 'react';
import styled from 'styled-components';
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

const DayLink = styled(Link)`
  left: 0;
  position: absolute;
  top: -24px;
`;

export const Box = ({
  title,
  link,
  component,
  children,
}: {
  title: string;
  link: string;
  component: string;
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <DayLink to={`/${link}`} state={{ component }}>
        {title}
      </DayLink>
      {children}
    </Container>
  );
};
