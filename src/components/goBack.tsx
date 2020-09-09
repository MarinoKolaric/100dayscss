import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import styled from 'styled-components';
import { theme } from '@style';
import { Link } from 'gatsby';

const LinkWrapper = styled(Link)`
  align-items: center;
  display: flex;
  font-size: ${theme.fontSize.lg};
  padding-top: 24px;
`;

export const GoBack = () => {
  return (
    <LinkWrapper to="/">
      <MdArrowBack /> <p>Return</p>
    </LinkWrapper>
  );
};
