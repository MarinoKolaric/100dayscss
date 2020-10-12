import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import '../style/resets.scss';
import { theme } from '@style';
import { Header, Footer } from '@components';

const Main = styled.main`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 400px));
  justify-items: center;
  margin: 50px 12px;


  ${theme.mediaQueries('mobileLarge')(`
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  `)}
  ${theme.mediaQueries('laptop')(`
    grid-gap: 32px;
    justify-items: start;
    margin: 52px 100px;
  `)}
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};
