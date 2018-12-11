import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import {  
    ResponsiveContainer,
    ComposedChart, 
    CartesianGrid, 
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Area,
    Bar,
    Dot
} from './../../../../components/recharts';

import colors from './../../../../colors';

const CHART_LENGTH = 30;
const CHART_START_DATE = moment().subtract(CHART_LENGTH, 'months');

const dataGenerator = (index) => {
    const referenceValue = _.random(1500, 1800);
    const halfedRefVal = referenceValue / 2;

    return {
        key: index,
        month: moment(CHART_START_DATE).add(index, 'months').format('MMM YY'),
        "Tokyo": referenceValue,
        "New York": _.random(1200, 2200),
        "Berlin": referenceValue - _.random(halfedRefVal, halfedRefVal * 1.1),
    };
}

const data = _.times(CHART_LENGTH, dataGenerator);

const generateDot = ({stroke, ...other}) => (
    <Dot
        { ...other }
        fill={ stroke }
        stroke={ colors['white'] }
        strokeWidth={ 2 }
        r={ 5 }
    />
);

export const AudienceMetricsChart = () => (
    <ResponsiveContainer width='100%' aspect={ 3 / 1 }>
        <ComposedChart data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5' strokeDasharray={ 0 } vertical={ false }/>
          <XAxis dataKey="month"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='New York' barSize={6} fill={ colors['500'] } />
          <Area dataKey='Tokyo' fill={ colors['purple-04'] } stroke={ colors['purple'] } activeDot={ null } />
          <Area dataKey='Berlin' fill={ colors['primary-04'] } stroke={ colors['primary'] } activeDot={{r: 5}} dot={generateDot}  />
       </ComposedChart>
    </ResponsiveContainer>
);
