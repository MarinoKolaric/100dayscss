import React from 'react';
import styled from 'styled-components';
import { LayoutDay, SEO, GoBack } from '@components';
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

const Svg = styled.svg``;

const SvgText = styled.text`
  font-size: 80rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const NotFoundPage = () => (
  <LayoutDay>
    <SEO title="404: Not found" />
    <Container>
      <Svg width="100%" height="100%">
        <defs>
          <linearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%">
            <stop stop-color="#FF5B99" offset="0%" />
            <stop stop-color="#FF5447" offset="20%" />
            <stop stop-color="#FF7B21" offset="40%" />
            <stop stop-color="#EAFC37" offset="60%" />
            <stop stop-color="#4FCB6B" offset="80%" />
            <stop stop-color="#51F7FE" offset="100%" />
          </linearGradient>
        </defs>
        <SvgText
          x="50%"
          y="30%"
          fill="url(#rainbow)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <tspan x="50%" dy="0">day</tspan>
          <tspan x="50%" dy="80">not</tspan>
          <tspan x='50%' dy="80">found</tspan>
        </SvgText>
      </Svg>
    </Container>
    <GoBack />
  </LayoutDay>
);

export default NotFoundPage;
