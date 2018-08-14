import React from 'react';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    AreaChart, 
    Area
} from 'recharts';

const data = _.times(20, () => ({ pv: Math.random() * 100 }));

const TinyAreaChart = () => (
    <ResponsiveContainer width='100%' height={ 40 }>
        <AreaChart data={data}>
            <Area type='monotone' dataKey='pv' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
    </ResponsiveContainer>
);

export { TinyAreaChart };
