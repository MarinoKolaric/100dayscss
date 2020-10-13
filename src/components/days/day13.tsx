import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import { theme } from '@style';
import day13ItalySvg from '@images/day13Italy.svg';
import { Box } from '@components';
// Date : 13.10.2020

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day13Background};
  color: ${theme.color.day13Text};
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 100%;
`;

const BackgroundImg = styled.img`
  width: 100%;
`;

const MapPinWrapper = styled.div`
  position: absolute;
  top: 32%;
  transition: all 0.5s ease 0.4s;
  width: 40px;

  &.inactive {
    opacity: 0;
    transform: perspective(600px) rotateY(-90deg);
    transition: all 0.5s ease;
  }
`;

const MapPinAnimation = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-16px);
  }
`;

const MapPin = styled.div`
  animation: ${MapPinAnimation} 1s ease-in-out alternate infinite;
  background-color: transparent;
  border: 14px solid ${theme.color.day13Yellow};
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  position: absolute;
  top: 32%;
  transition: all 1.5s ease;
  width: 40px;

  &::after {
    border-left: 19px solid transparent;
    border-right: 19px solid transparent;
    border-top: 38px solid ${theme.color.day13Yellow};
    bottom: -38px;
    content: '';
    left: -13px;
    position: absolute;
  }
`;

const ShadowAnimation = keyframes`
  from {
    transform: rotateX(80deg);
  }

  to {
    transform: rotateX(80deg) scale(1.5);
  }
`;

const Shadow = styled.div`
  animation: ${ShadowAnimation} 1s ease-in-out alternate infinite;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  height: 20px;
  position: absolute;
  transform: rotateX(80deg);
  width: 20px;

  &.inactive {
    display: none;
  }
`;

const Card = styled.div`
  ${theme.boxShadow};
  background-color: ${theme.color.day13White};
  border-radius: 4px;
  left: 50%;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%) perspective(600px) rotateY(90deg);
  transition: all 0.5s ease;
  width: 240px;

  &.active {
    opacity: 1;
    pointer-events: all;
    transform: translate(-50%, -50%) perspective(600px) rotateY(0deg);
    transition: all 0.5s ease 0.4s;
  }
`;

const CardHeader = styled(Img)<GatsbyImageProps>`
  height: 60px;
  width: 100%;
`;

const CardBody = styled.div`
  font-size: ${theme.fontSize.xxs};
  padding: 20px 4px;
  text-align: center;
  width: 100%;

  > span {
    color: ${theme.color.day13Text};
    display: block;
    margin-bottom: 4px;

    &:first-of-type {
      font-size: ${theme.fontSize.xs};
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
`;

const FooterLink = styled.a`
  align-items: center;
  color: ${theme.color.day13Blue};
  font-size: ${theme.fontSize.xxs};
  padding: 12px 8px;
`;

const FooterDivider = styled.span`
  background-color: ${theme.color.day13Divider};
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
`;

export const Day13 = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const data = useStaticQuery(graphql`
    query {
      day13Vespa: file(relativePath: { eq: "day13Vespa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box title="Day 13" link="day13" componentName="Day13">
      <Container>
        <BackgroundImg src={day13ItalySvg} alt="italy flag" />
        <MapPinWrapper className={isActive ? 'inactive' : ''}>
          <MapPin onClick={() => setIsActive(true)} />
        </MapPinWrapper>
        <Shadow className={isActive ? 'inactive' : ''} />
      </Container>

      <Card
        onClick={() => setIsActive(false)}
        className={isActive ? 'active' : ''}
      >
        <CardHeader fluid={data.day13Vespa.childImageSharp.fluid} />
        <CardBody>
          <span>Vespa Scootershop</span>
          <span>Via Sedile di Porto 70</span>
          <span>35142 Padova</span>
        </CardBody>
        <CardFooter>
          <FooterLink href="#">Save</FooterLink>
          <FooterDivider />
          <FooterLink href="#">Route</FooterLink>
        </CardFooter>
      </Card>
    </Box>
  );
};
