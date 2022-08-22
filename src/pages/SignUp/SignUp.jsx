import React from 'react';

import {
  HomeObjThree,
} from './Data';

import { InfoSection } from '../../components';

export default function Home() {
  return (
    <>
      <InfoSection {...HomeObjThree} />
    </>
  );
};
