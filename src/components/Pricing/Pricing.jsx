import React from 'react';
import { IconContext } from 'react-icons/lib';

import {
  GiRock,
  GiCutDiamond,
  GiCrystalBars,
} from 'react-icons/gi';

import { Button } from '../../globalStyles';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from './Pricing.elements';

export default function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#19b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>

          <PricingContainer>
            <PricingCard
              to="/sign-up"
            >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>

                <PricingCardPlan>
                  Starter Pack
                </PricingCardPlan>

                <PricingCardCost>
                  $99.99
                </PricingCardCost>

                <PricingCardLength>
                  per month
                </PricingCardLength>

                <PricingCardFeatures>
                  <PricingCardFeature>
                    100 New Users
                  </PricingCardFeature>

                  <PricingCardFeature>
                    $10,000 Budget
                  </PricingCardFeature>

                  <PricingCardFeature>
                    Retargeting analytics
                  </PricingCardFeature>
                </PricingCardFeatures>

                <Button
                  primary
                >
                  Choose Plan
                </Button>

              </PricingCardInfo>
            </PricingCard>

            <PricingCard
              to="/sign-up"
            >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>

                <PricingCardPlan>
                  Gold Rush
                </PricingCardPlan>

                <PricingCardCost>
                  $299.99
                </PricingCardCost>

                <PricingCardLength>
                  per month
                </PricingCardLength>

                <PricingCardFeatures>
                  <PricingCardFeature>
                    1000 New Users
                  </PricingCardFeature>

                  <PricingCardFeature>
                    $50,000 Budget
                  </PricingCardFeature>

                  <PricingCardFeature>
                    Lead Gen Analytics
                  </PricingCardFeature>
                </PricingCardFeatures>

                <Button
                  primary
                >
                  Choose Plan
                </Button>

              </PricingCardInfo>
            </PricingCard>

            <PricingCard
              to="/sign-up"
            >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>

                <PricingCardPlan>
                  Diamond Kings
                </PricingCardPlan>

                <PricingCardCost>
                  $999.99
                </PricingCardCost>

                <PricingCardLength>
                  per month
                </PricingCardLength>

                <PricingCardFeatures>
                  <PricingCardFeature>
                    Unlimited Users
                  </PricingCardFeature>

                  <PricingCardFeature>
                    Unlimited Budget
                  </PricingCardFeature>

                  <PricingCardFeature>
                    14/7 Support
                  </PricingCardFeature>
                </PricingCardFeatures>

                <Button
                  primary
                >
                  Choose Plan
                </Button>

              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};
