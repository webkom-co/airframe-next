import React from 'react';
import PropTypes from 'prop-types';

import {
    Button
} from './../../../../components';

export const ButtonInput = (props) => (
    <Button
        onClick={props.onClick}
    >
        {props.value}
    </Button>
)

ButtonInput.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
}
