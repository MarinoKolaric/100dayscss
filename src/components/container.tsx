import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Layout = styled.div`
  align-items: center;
  background-color: #3faf82;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  position: relative;
  width: 400px;
`;

const DayLink = styled(Link)`
  left: 0;
  position: absolute;
  top: -32px;
`;

export const Container = ({
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
    <Layout>
      <DayLink to={`/${link}`} state={{ component }}>
        {title}
      </DayLink>
      {children}
    </Layout>
  );
};
