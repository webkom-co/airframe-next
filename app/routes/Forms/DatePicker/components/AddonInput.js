import React from 'react';
import PropTypes from 'prop-types';

import {
    InputGroup,
    InputGroupAddon,
    Input
} from './../../../../components';

export const AddonInput = (props) => (
    <InputGroup className={props.className}>
        <InputGroupAddon addonType="prepend">
            <i className="fa fa-calendar-o"></i>
        </InputGroupAddon>
        <Input
            onClick={props.onClick}
            value={ props.value }
        />
    </InputGroup>
)

AddonInput.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string
}
