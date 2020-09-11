import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import { Box } from '@components';
import { theme } from '@style';
//Date: 9.9.2020

const Container = styled.div`
  align-items: center;
  background: ${theme.color.day5Background};
  background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
  color: ${theme.color.day5Color};
  display: flex;
  font-family: 'Open Sans';
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Frame = styled.div`
  background-color: #fff;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  height: 300px;
  width: 320px;
`;

const Profile = styled.div`
  height: 100%;
  width: 200px;
`;

const ProfileImgWrapper = styled.div`
  border-radius: 50%;
  cursor: pointer;
  margin: 32px auto 12px;
  position: relative;
  width: 84px;

  &:hover > :first-child {
    transform: rotate(360deg);
  }

  &:hover > :nth-child(2) {
    transform: rotate(-360deg);
  }
`;
const ProfileBorderInner = styled.div`
  border: 1px solid;
  border-color: ${theme.color.day5Color} ${theme.color.day5Color}
    ${theme.color.day5Color} transparent;
  border-radius: 50%;
  height: calc(100% + 6px);
  left: -3px;
  position: absolute;
  top: -3px;
  transition: all 1.5s ease-in-out;
  width: calc(100% + 6px);
`;
const ProfileBorderOuter = styled.div`
  border: 1px solid;
  border-color: ${theme.color.day5Color} transparent ${theme.color.day5Color}
    ${theme.color.day5Color};
  border-radius: 50%;
  height: calc(100% + 12px);
  left: -6px;
  position: absolute;
  top: -6px;
  transition: all 1.5s ease-in-out;
  width: calc(100% + 12px);
`;

const ProfileImg = styled(Img)<GatsbyImageProps>`
  border-radius: 50%;
  height: 84px;
  overflow: hidden;
  width: 84px;
`;

const ProfileName = styled.h3`
  font-size: ${theme.fontSize.md};
  font-weight: 600;
  text-align: center;
`;
const ProfileJobTitle = styled.p`
  font-size: ${theme.fontSize.xs};
  padding-bottom: 28px;
  text-align: center;
`;
const Button = styled.button`
  border: 1px solid ${theme.color.day5Color};
  border-radius: 15px;
  display: block;
  font-size: ${theme.fontSize.xs};
  font-weight: 600;
  margin: 8px auto;
  padding: 8px;
  transition: all 0.3s ease-in-out;
  width: 120px;

  &:hover {
    background-color: ${theme.color.day5Color};
    color: #fff;
  }
`;

const Stats = styled.div`
  display: grid;
  flex-grow: 1;
  grid-gap: 1px;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
`;

const StatsField = styled.div`
  background-color: ${theme.color.day5StatsBackground};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.color.day5StatsBackgroundHover};
  }
`;

const StatsFieldNumber = styled.span`
  font-size: ${theme.fontSize.md};
  font-weight: 600;
`;
const StatsFieldLabel = styled.span`
  font-size: ${theme.fontSize.xs};
`;

export const Day5 = () => {
  const data = useStaticQuery(graphql`
    query {
      day5: file(relativePath: { eq: "day5.png" }) {
        childImageSharp {
          fluid(maxWidth: 85) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box title="Day 5" link="day5" component="Day5">
      <Container>
        <Frame>
          <Profile>
            <ProfileImgWrapper>
              <ProfileBorderOuter />
              <ProfileBorderInner />
              <ProfileImg fluid={data.day5.childImageSharp.fluid} />
            </ProfileImgWrapper>
            <ProfileName>Marino Kolarić</ProfileName>
            <ProfileJobTitle>Web developer</ProfileJobTitle>
            <Button>Follow</Button>
            <Button>Message</Button>
          </Profile>
          <Stats>
            <StatsField>
              <StatsFieldNumber>73</StatsFieldNumber>
              <StatsFieldLabel>Posts</StatsFieldLabel>
            </StatsField>
            <StatsField>
              <StatsFieldNumber>1387</StatsFieldNumber>
              <StatsFieldLabel>Likes</StatsFieldLabel>
            </StatsField>
            <StatsField>
              <StatsFieldNumber>212</StatsFieldNumber>
              <StatsFieldLabel>Followers</StatsFieldLabel>
            </StatsField>
          </Stats>
        </Frame>
      </Container>
    </Box>
  );
};
