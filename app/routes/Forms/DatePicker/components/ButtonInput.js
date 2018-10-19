import React from 'react';
import PropTypes from 'prop-types';

import {
    Button
} from './../../../../components';

export const ButtonInput = (props) => (
    <Button outline
        onClick={props.onClick}
    >
        <i className="fa fa-fw fa-calendar-o mr-1" />
        { props.value }
    </Button>
)

ButtonInput.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
}
