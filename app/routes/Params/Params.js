import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col
} from './../../components';

const Params = (props) => {
    const { param } = props.match.params;
    const paramVal = parseInt(param);

    return (
        <Container fluid>
            <Row>
                <Col lg={ 12 }>
                    <h1>
                        Route with params <small>(param: { paramVal })</small>
                    </h1>
                    <Link to={`/params/${paramVal - 1}`}>-</Link>
                    <Link to={`/params/${paramVal + 1}`}>+</Link>
                </Col>
            </Row>
        </Container>
    );
}

Params.propTypes = {
    match: PropTypes.object.isRequired
}

export default Params;