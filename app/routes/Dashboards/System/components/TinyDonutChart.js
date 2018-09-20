import React from 'react';
import PropTypes from 'prop-types';
import {  
    PieChart, 
    Pie,
    Cell
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
    {name: 'Group A', value: 900},
    {name: 'Group B', value: 300}
];

const TinyDonutChart = (props) => (
    <PieChart width={ 80 } height={ 80 }>
        <Pie
            data={data}
            stroke={ colors[ props.strokeColor ] }
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
    strokeColor: PropTypes.spring,
    pieBg: PropTypes.spring
};
TinyDonutChart.defaultProps = {
    pieColor: "primary",
    strokeColor: "white",
    pieBg: "200"
};

export { TinyDonutChart };
