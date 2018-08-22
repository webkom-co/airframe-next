import React from 'react';
import { 
    Pie, 
    ResponsiveContainer,
    Cell,
    PieChart,
    PieValueLabel
} from './../../../../components/recharts';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200}
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const PieChartWithCustomizedLabel = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <PieChart>
            <Pie
                data={data} 
                labelLine={false}
                label={<PieValueLabel />}
                outerRadius={80} 
                fill="#8884d8"
            >
                {
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
        </PieChart>
    </ResponsiveContainer>
);
