import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import '../style/resets.scss';
import { Header } from '@components';
import { theme } from '@style';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  margin: 0 auto;
  min-height: calc(100vh - 134px - 50px);
  padding: 52px 12px;
  width: 100%;

  ${theme.mediaQueries('mobileMedium')(`
    width: 400px;
  `)}
`;

export const LayoutDay = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query DayTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
      </Container>
    </>
  );
};
