import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import {  
    ResponsiveContainer,
    BarChart, 
    Bar
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = _.times(20, () => ({ pv: Math.random() * 100 }));

const TinyBarChart = (props) => (
    <ResponsiveContainer width='100%' height={ 80 }>
        <BarChart data={data}>
            <Bar dataKey='pv' fill={ colors[ props.barColor ] } />
        </BarChart>
    </ResponsiveContainer>
);

TinyBarChart.propTypes = {
    barColor: PropTypes.spring
};
TinyBarChart.defaultProps = {
    barColor: "200"
};

export { TinyBarChart };
