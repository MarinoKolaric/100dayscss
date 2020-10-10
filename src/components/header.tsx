import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { theme } from '@style';

const HeaderWrapper = styled.header`
  align-items: center;
  background: ${theme.color.gray1};
  display: flex;
  height: 140px;
  /* overflow-x: hidden; */
  position: relative;
`;

const Title = styled.h1`
  bottom: -20px;
  color: ${theme.color.background};
  font-size: 50rem;
  left: 13px;
  letter-spacing: -6px;
  max-width: 100%;
  position: absolute;
  white-space: nowrap;

  ${theme.mediaQueries('mobileLarge')`
    bottom: -30px;
    font-size: 84rem;
    left: 8px;
  `}
  ${theme.mediaQueries('tablet')`
    bottom: -34px;
    font-size: 100rem;
    left: 5px;
  `}
  ${theme.mediaQueries('laptop')`
    bottom: -43px;
    font-size: 130rem;
    left: 0;
  `}
`;

export const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Title>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Title>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
