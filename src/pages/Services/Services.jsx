import React from 'react';

import {
  HomeObjFour,
} from './Data';

import { InfoSection } from '../../components';
import Pricing from '../../components/Pricing/Pricing';

export default function Home() {
  return (
    <>
      <Pricing />
      <InfoSection {...HomeObjFour} />
    </>
  );
};
