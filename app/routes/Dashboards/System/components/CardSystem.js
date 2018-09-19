import React from 'react';
import PropTypes from 'prop-types';

import {  
    Card, 
    CardBody,
    Badge
} from './../../../../components';

import {
    TinyDonutChart
} from "./TinyDonutChart"
import {
    TinyBarChart
} from "./TinyBarChart"

const CardSystem = (props) => (
    <Card>
       <CardBody>
           <div className="d-flex">
               <span>
                    <Badge pill className="mb-3" color={ props.badgeColor } >
                        <i className="fa fa-fw fa-caret-down" />
                        12%
                    </Badge>
                    <h6 className="mb-0">Memory</h6>
                    <h2 className="mb-3">
                        25 %
                    </h2>
                </span>
                <span className="text-right ml-auto">
                    <TinyDonutChart 
                        pieColor={props.pieColor}
                    />
                </span>
            </div>
            <TinyBarChart />
       </CardBody>
    </Card>
);

CardSystem.propTypes = {
    badgeColor: PropTypes.spring,
    pieColor: PropTypes.spring
};
CardSystem.defaultProps = {
    badgeColor: "secondary",
    pieColor: "500"
};

export { CardSystem };
