import React from 'react';

import {
  HomeObjTwo,
  HomeObjThree,
  HomeObjFour,
} from './Data';

import { InfoSection } from '../../components';
import Pricing from '../../components/Pricing/Pricing';

export default function Home() {
  return (
    <>
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <Pricing />
      <InfoSection {...HomeObjFour} />
    </>
  );
};
