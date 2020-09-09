import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { theme } from '@style';

const HeaderWrapper = styled.header`
  background: ${theme.color.gray1};
  padding: 44rem;
`;

const Container = styled.div`
  max-width: 960px;
`;

const Title = styled.h1`
  font-size: 36rem;
`

export const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <Title>
        <Link
          to="/"
          style={{
            color: theme.color.main,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

