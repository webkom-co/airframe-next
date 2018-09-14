import React from 'react';
import PropTypes from 'prop-types';
import {
    CardHeader
} from './..';

import { Consumer } from './context';

export const AccordionHeader = (props) => (
    <Consumer>
    {
        ({ onToggle }) => (
            <CardHeader className="h6 bg-none bb-0">
                <a href="javascript:;" onClick={ onToggle } className='d-block'>
                    { props.children }
                </a>
            </CardHeader>
        )   
    }
    </Consumer>
);
AccordionHeader.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
};
