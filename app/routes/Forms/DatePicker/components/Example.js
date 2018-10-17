import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col,
    FormGroup,
    Label
} from './../../../../components';

export const Example = ({ title, exampleInput, children }) => (
    <Row>
        <Col sm={ 12 }>
            <h5>{ title }</h5>
        </Col>
        <Col md={ 6 }>
            <FormGroup>
                <Label>Example</Label>
                <div>
                    { exampleInput }
                </div>
            </FormGroup>
        </Col>
        <Col md={ 6 }>
            <FormGroup>
                <Label>Code</Label>
                <pre>
                    <code>
                        { children }
                    </code>
                </pre>
            </FormGroup>
        </Col>
    </Row>
);

Example.propTypes = {
    exampleInput: PropTypes.node.isRequired,
    children: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}