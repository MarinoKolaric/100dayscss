import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { theme } from '@style';
import '../../style/days/day19.scss';
import { Box } from '@components';
import { BiHeart, BiComment, BiLike } from 'react-icons/bi';
import img1 from '@images/day19Img1.jpg';
import img2 from '@images/day19Img2.jpg';
import img3 from '@images/day19Img3.jpg';
import img4 from '@images/day19Img4.jpg';
// Date : 25.10.2020

type person = {
  name: string;
  img: string | any;
};

const persons: Array<person> = [
  {
    name: 'Michaela Pratt',
    img: img1,
  },
  {
    name: 'Connor Walsh',
    img: img2,
  },
  {
    name: 'Tegan Price',
    img: img3,
  },
  {
    name: 'Laurel Castillo',
    img: img4,
  },
];

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day19Background};
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  width: 100%;
`;

export const Day19 = () => {
  const [selected, setSelected] = useState<person>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const data = useStaticQuery(graphql`
    query {
      day19: file(relativePath: { eq: "day19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box title="Day 19" link="day19" componentName="Day19">
      <Container className="day19">
        <div className="grid">
          {persons.map((person, i) => (
            <div
              key={i}
              className="img-wrapper"
              onClick={() => {
                setIsOpen(true);
                setSelected(person);
              }}
            >
              <div className="overlay"></div>
              <div className="plus"></div>
              <img src={person.img} alt={person.img} className="img" />
            </div>
          ))}
        </div>

        <div className={`profile ${isOpen ? 'active' : ''}`} id="profile-1">
          <div className="header">
            <Img
              fluid={data.day19.childImageSharp.fluid}
              alt="background image"
            />
          </div>
          <div className="footer">
            <h1 className="name">{selected?.name}</h1>
            <div className="actions">
              <BiLike className="icon" />
              <BiComment className="icon" />
              <BiHeart className="icon" />
            </div>
          </div>
          <div className="profile-img">
            {selected && (
              <img src={selected.img} alt={selected.name} className="img" />
            )}
          </div>
          <div className="close" onClick={() => setIsOpen(false)}></div>
        </div>
      </Container>
    </Box>
  );
};
