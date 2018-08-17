import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    UncontrolledDropdown
} from './..';

export const NestedDropdown = (props) => {
    const { tag: Tag, className, children, ...otherProps } = props;
    const dropdownClass = classNames(className, 'nested-dropdown');

    return (
        <Tag { ...otherProps } className={ dropdownClass } >
            { children }
        </Tag>
    );
}
NestedDropdown.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    className: PropTypes.string,
    children: PropTypes.node
};
NestedDropdown.defaultProps = {
    tag: UncontrolledDropdown
};
