import React from 'react';
import { PolarGrid as RCPolarGrid } from 'recharts';

import styleConfig from './config';

export const PolarGrid = (props) =>
    <RCPolarGrid { ...props } { ...styleConfig.polarGrid } />;
