import React from 'react';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    AreaChart, 
    Area
} from './../../components/recharts';

import colors from './../../core/colors';

const data = _.times(20, () => ({ pv: Math.random() * 100 }));

const TinyAreaChart = () => (
    <ResponsiveContainer width='100%' height={ 40 }>
        <AreaChart data={data}>
            <Area dataKey='pv' stroke={ colors['primary'] } fill={ colors['primary-04'] } />
        </AreaChart>
    </ResponsiveContainer>
);

export { TinyAreaChart };