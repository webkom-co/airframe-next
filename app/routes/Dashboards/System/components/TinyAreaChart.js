import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    AreaChart, 
    Area
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = _.times(20, () => ({ pv: Math.random() * 100 }));


const TinyAreaChart = (props) => (
    <ResponsiveContainer width='100%' height={ 40 }>
        <AreaChart data={data}>
            <Area type='monotone' dataKey='pv' stroke={ colors[ props.strokeColor ] } fill={ colors[ props.fillColor ] } />
        </AreaChart>
    </ResponsiveContainer>
);

TinyAreaChart.propTypes = {
    strokeColor: PropTypes.spring,
    fillColor: PropTypes.spring
};
TinyAreaChart.defaultProps = {
    strokeColor: "600",
    fillColor: "200",
};

export { TinyAreaChart };
