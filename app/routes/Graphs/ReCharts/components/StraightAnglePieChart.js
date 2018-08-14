import React from 'react';
import { 
    Pie, 
    ResponsiveContainer,
    PieChart
} from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const StraightAnglePieChart = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <PieChart>
            <Pie startAngle={180} endAngle={0} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
       </PieChart>
    </ResponsiveContainer>

)

export { StraightAnglePieChart };
