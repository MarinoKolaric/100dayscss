import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()}, project
      <p>100dayscss</p>
    </FooterContainer>
  );
};
