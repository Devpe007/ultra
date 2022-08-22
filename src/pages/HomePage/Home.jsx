import React from 'react';

import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
  HomeObjFour,
} from './Data';

import { InfoSection } from '../../components';
import Pricing from '../../components/Pricing/Pricing';

export default function Home() {
  return (
    <>
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <Pricing />
      <InfoSection {...HomeObjFour} />
    </>
  );
};
