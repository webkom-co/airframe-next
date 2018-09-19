import React from 'react';
import PropTypes from 'prop-types';
import {  
    PieChart, 
    Pie,
    Cell
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300}
];

const TinyDonutChart = (props) => (
    <PieChart width={ 80 } height={ 80 }>
        <Pie
            data={data}
            stroke={ colors['white'] }
            innerRadius={ 26 }
            outerRadius={ 35 } 
            fill={ colors[ props.pieBg ] }
        >
        <Cell fill={ colors[ props.pieColor ] } />
        </Pie>
    </PieChart>
);

TinyDonutChart.propTypes = {
    pieColor: PropTypes.spring,
    pieBg: PropTypes.spring
};
TinyDonutChart.defaultProps = {
    pieColor: "primary",
    pieBg: "200"
};

export { TinyDonutChart };
