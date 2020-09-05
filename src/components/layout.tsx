import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../style/resets.scss';

const Container = styled.div``;

export const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Container>{children}</Container>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
