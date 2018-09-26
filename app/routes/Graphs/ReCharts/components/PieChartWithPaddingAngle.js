import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200}
];

const COLORS = [ colors['info'], colors['info-06'], colors['primary'], colors['purple']];

export const PieChartWithPaddingAngle = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <PieChart>
            <Pie
                data={data}
                dataKey="value"
                stroke={ colors['white'] }
                innerRadius={60}
                outerRadius={80} 
                fill="#8884d8"
                paddingAngle={5}
            >
                {
                    data.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
        </PieChart>
    </ResponsiveContainer>
);
