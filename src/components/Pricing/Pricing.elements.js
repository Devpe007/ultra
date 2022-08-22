import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const PricingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 100px 0 160px;

  background: #4b59f7;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 30px;
  }
`;

export const PricingHeading = styled.h1`
  margin-bottom: 24px;

  font-size: 48px;

  color: #fff;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  width: 280px;
  height: 500px;

  border-radius: 4px;

  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);

  text-decoration: none;

  background: #242424;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;

    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;

  height: 500px;

  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;

  font-size: 14px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;

  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 16px 0 32px;

  list-style: none;

  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;
