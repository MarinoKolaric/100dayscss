import React from 'react';
import { PageProps } from 'gatsby';
import days, { LayoutDay, SEO, GoBack } from '@components';

type TLocationState = { component: string };
type IndexPageProps = PageProps<{}, {}, TLocationState>;

const Day4Page = (props: IndexPageProps) => {
  const { state } = props.location;

  const DayElement = days.filter(Day => Day.name === state.component)[0];

  return (
    <LayoutDay>
      <SEO title={DayElement.name} />
      {DayElement ? <DayElement /> : <h1>NoElement</h1>}
      <GoBack />
    </LayoutDay>
  );
};

export default Day4Page;
