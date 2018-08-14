import React from 'react';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    BarChart, 
    Bar
} from 'recharts';

const data = _.times(20, () => ({ pv: Math.random() * 100 }));

const TinyBarChart = () => (
    <ResponsiveContainer width='100%' height={ 40 }>
        <BarChart data={data}>
            <Bar dataKey='pv' fill='#8884d8'/>
        </BarChart>
    </ResponsiveContainer>
);

export { TinyBarChart };
