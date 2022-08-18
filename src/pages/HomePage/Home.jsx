import React from 'react';

import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
  HomeObjFour,
} from './Data';

import { InfoSection } from '../../components';

export default function Home() {
  return (
    <>
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <InfoSection {...HomeObjFour} />
    </>
  );
};
