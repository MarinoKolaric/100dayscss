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
      <a href="https://100dayscss.com/">100dayscss</a>
    </FooterContainer>
  );
};
