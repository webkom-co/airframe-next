import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, CardBody } from './..'

import { Consumer } from './context';

export const AccordionBody = (props) => (
    <Consumer>
    {
        ({ isOpen }) => (
            <Collapse isOpen={ isOpen }>
                <CardBody className={ props.className }>
                    { props.children }
                </CardBody>
            </Collapse>
        )
    }
    </Consumer>
);
AccordionBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
