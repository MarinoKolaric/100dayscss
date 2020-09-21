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
  // const t = days.filter(Day => Day.name.toLowerCase() === data.file.name)[0];
  // const t2 = days.filter(Day => Day.name.toLowerCase() === data.file.name);
  // console.log('t', t);
  // console.log('t2', t2);

  return (
    <LayoutDay>
      {days
        .filter(day => day.name.toLowerCase() === data.file.name)
        .map(D => (
          <D />
        ))}
      <GoBack />
    </LayoutDay>
  );
};

export default Day;
