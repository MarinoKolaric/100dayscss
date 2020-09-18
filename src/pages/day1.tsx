import React from 'react';
import { PageProps, graphql } from 'gatsby';
import days, { LayoutDay, SEO, GoBack } from '@components';

type TLocationState = { component: string };
type IndexPageProps = PageProps<{}, {}, TLocationState>;

const Day1Page: React.FC<IndexPageProps> = ({ location }) => {
  const { state } = location;
  const DayElement = days.filter(Day => Day.name === state.component)[0];

  return (
    <LayoutDay>
      <SEO title={DayElement ? DayElement.name : 'nothing'} />
      {DayElement ? <DayElement /> : <h1>NoElement</h1>}
      <GoBack />
    </LayoutDay>
  );
};

export default Day1Page;
