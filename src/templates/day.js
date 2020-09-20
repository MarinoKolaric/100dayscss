import React from 'react'
import { graphql } from 'gatsby'
import days, {LayoutDay, GoBack} from '@components'

export const query = graphql`
  query($dayId: String) {
    file(id: {eq: $dayId}) {
      name
    }
}
`

const Day = ({ data }) => { 
  const DayElement = days.filter(Day => Day.name.toLowerCase() === data.file.name)[0];
  return  (
    <LayoutDay>
      {DayElement ? <DayElement /> : <h1>NoElement</h1>}
      <GoBack />
    </LayoutDay>
  )
}

export default Day
