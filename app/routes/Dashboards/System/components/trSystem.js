import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {  
    Progress,
    Badge
} from './../../../../components';

import {
    TinyAreaChart
} from "./TinyAreaChart"

const TrSystem = (props) => (
    <tr>
        <td style={{ width: '20%' }}>
            <span className="d-flex mb-2">
                <h6 className="mb-0 mr-5">
                    Apache
                </h6>
                <Badge pill className="ml-auto align-self-center">
                    v. 12.02
                </Badge>
            </span>
            <Progress value="25" style={{height: "4px"}} className="mb-2" />
            <span className="d-flex">
                <span className="text-inverse">
                    95%
                </span>
                <span className="ml-auto text-right">
                    1,200 GB Left
                </span>
            </span>
        </td>
        {
            _.map(props.colors, (color,index)=>(
                <td style={{ width: '20%' }} key={index}>
                    <h6 className="mb-0">
                        14
                    </h6>
                    <TinyAreaChart 
                        strokeColor={color.stroke} 
                        fillColor={color.fill} 
                    />
                </td>
            ))
        }
    </tr>
);

TrSystem.propTypes = {
    colors: PropTypes.array
};
TrSystem.defaultProps = {
    colors: [ 
        {
            fill: "400",
            stroke: "primary"
        },
        {
            fill: "yellow",
            stroke: "400"
        },
        {
            fill: "purple",
            stroke: "info"
        },
        {
            fill: "success",
            stroke: "500"
        }
    ]
};

export { TrSystem };
