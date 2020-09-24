import React from 'react';
import { graphql } from 'gatsby';
import days, { LayoutDay, GoBack } from '@components';

export const query = graphql`
  query($dayId: String) {
    file(id: { eq: $dayId }) {
      name
    }
  }
`;

const Day = ({ data }) => {
  return (
    <LayoutDay>
      {days.map(Day => {
        if (Day().props.link === data.file.name) {
          return <Day />;
        }
        return null;
      })}
      <GoBack />
    </LayoutDay>
  );
};

export default Day;
