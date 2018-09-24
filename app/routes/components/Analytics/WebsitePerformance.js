import React from 'react';
import faker from 'faker';

import PropTypes from 'prop-types';

import { 
    Row,
    Col
} from './../../../components';

import {
    TinyAreaChart
} from "./../../Graphs/ReCharts/components/TinyAreaChart";

const WebsitePerformance = (props) => (
    <React.Fragment>
        <Row className="flex-column-reverse flex-lg-row">
            <Col sm={ 12 } lg={ 8 } className="d-flex align-items-start flex-column">
                <h6 className="mb-auto">
                    { props.title }
                </h6>
                <TinyAreaChart />
            </Col>
            <Col sm={ 12 } lg={ 4 } className="text-center text-lg-right">
                <h2>
                    { props.value }
                </h2>
                <div className={ `mb-1 ${ props.valuePercentColor }` }>
                    <i className={ `fa mr-1 fa-${ props.valuePercentIcon }` }></i>
                    { props.valuePercent }%
                </div>
                <div className="text-muted">
                    vs { faker.finance .amount() } (prev.)
                </div>
            </Col>
        </Row>
    </React.Fragment>
)
WebsitePerformance.propTypes = {
    title: PropTypes.node,
    value: PropTypes.node,
    valuePercentColor: PropTypes.node,
    valuePercentIcon: PropTypes.node,
    valuePercent: PropTypes.node
};
WebsitePerformance.defaultProps = {
    title: "Title",
    value: "00.000",
    valuePercentColor: "text-muted",
    valuePercentIcon: "caret-down",
    valuePercent: "00,00"
};


export { WebsitePerformance };
