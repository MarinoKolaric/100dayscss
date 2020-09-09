import React from 'react';
import days, { Layout, SEO } from '@components';

const IndexPage = () => {
  const dayElements = days.map((Day, i) => (
    <Day key={i} />
  ));

  return (
    <Layout>
      <SEO title="Home" />
      {dayElements}
    </Layout>
  );
};

export default IndexPage;
