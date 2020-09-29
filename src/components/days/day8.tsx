import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@style';
import { Box } from '@components';
// Date : 8.9.2020

interface IPlan {
  title: string;
  price: number;
  users: number;
  data: number;
  projects: number;
}

const plans: Array<IPlan> = [
  {
    title: 'Basic',
    price: 5,
    users: 5,
    data: 20,
    projects: 3,
  },
  {
    title: 'Pro',
    price: 10,
    users: 30,
    data: 150,
    projects: 25,
  },
  {
    title: 'Premium',
    price: 20,
    users: 100,
    data: 200,
    projects: 50,
  },
];

const Container = styled.div`
  background-color: ${theme.color.day8Background};
  color: ${theme.color.day8Text};
  font-family: 'Open Sans';
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const PlanFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  ${theme.mediaQueries('mobileLarge')(`
    padding: 24px;
  `)}
`;

const PlanHeader = styled.div`
  background-color: ${theme.color.day8Blue};
  color: ${theme.color.main};
  font-size: ${theme.fontSize.xs};
  font-weight: 600;
  padding: 8px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  width: 100%;
`;

const PlanPrice = styled.div`
  font-size: ${theme.fontSize.xxs};
  padding: 12px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  > span {
    display: block;
    font-size: ${theme.fontSize.xl};
    font-weight: 600;
  }
`;

const Plan = styled.div`
  ${theme.boxShadowSmall};
  background-color: ${theme.color.main};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  width: 96px;

  ${theme.mediaQueries('mobileLarge')(`
    width: 112px;
  `)}

  &:hover {
    transform: scale(1.09);
    ${PlanHeader} {
      background-color: ${theme.color.day8BlueDark};
    }
    ${PlanPrice} {
      color: ${theme.color.day8BlueDark};
    }
  }
`;

const PlanLineWrapper = styled.div`
  padding: 0 24px 12px;
`;

const PlanLine = styled.div<{ w: number }>`
  background-color: ${theme.color.day8Background};
  height: 3px;
  margin: 6px auto;
  width: ${props => `${props.w}%`};
`;

const InfoWrapper = styled.div`
  ${theme.boxShadowSmall};
  background-color: ${theme.color.main};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize.xxs};
  justify-content: space-between;
  margin: 12px;
  overflow: hidden;
  padding: 12px;
`;

const Info = styled.div`
  padding: 4px 0;
  width: 100;
`;

const InfoLabels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const InfoLine = styled.div`
  background-color: ${theme.color.day8Background};
  border-radius: 4px;
  height: 8px;
  margin: 4px 0 12px;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:last-of-type {
    margin: 4px 0 0;
  }
`;

const InfoLineFiller = styled.div<{ data: number | undefined }>`
  background-color: ${theme.color.day8Blue};
  border-radius: 4px;
  height: 100%;
  position: relative;
  transform: ${props => (props.data ? `scaleX(${props.data})` : `scaleX(0)`)};
  transform-origin: 0 50%;
  transition: all 0.3s ease-in-out;
  width: 100%;
`;

export const Day8 = () => {
  const [planData, setPlanData] = useState<IPlan | null>(null);

  return (
    <Box title="Day 8" link="day8" componentName="Day8">
      <Container>
        <PlanFlex>
          {plans.map((plan, i) => (
            <Plan
              key={i}
              onMouseOver={() => setPlanData(plan)}
              onMouseLeave={() => setPlanData(null)}
            >
              <PlanHeader>{plan.title}</PlanHeader>
              <PlanPrice>
                <span>${plan.price}</span> per month
              </PlanPrice>
              <PlanLineWrapper>
                <PlanLine w={100} />
                <PlanLine w={80} />
                <PlanLine w={100} />
                <PlanLine w={80} />
              </PlanLineWrapper>
            </Plan>
          ))}
        </PlanFlex>
        <InfoWrapper>
          <Info>
            <InfoLabels>
              <span>5 Users</span>
              <span>100 Users</span>
            </InfoLabels>
            <InfoLine>
              <InfoLineFiller data={planData?.users && planData.users / 100} />
            </InfoLine>
            <InfoLabels>
              <span>20 GB</span>
              <span>200 GB</span>
            </InfoLabels>
            <InfoLine>
              <InfoLineFiller data={planData?.data && planData.data / 200} />
            </InfoLine>
            <InfoLabels>
              <span>1 Project</span>
              <span>50 Projects</span>
            </InfoLabels>
            <InfoLine>
              <InfoLineFiller
                data={planData?.projects && planData.projects / 50}
              />
            </InfoLine>
          </Info>
        </InfoWrapper>
      </Container>
    </Box>
  );
};
