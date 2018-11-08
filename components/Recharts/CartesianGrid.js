import React from 'react';
import { CartesianGrid as RCCartesianGrid } from 'recharts';

import styleConfig from './config';

export const CartesianGrid = (props) =>
    <RCCartesianGrid { ...props } { ...styleConfig.grid } />;
