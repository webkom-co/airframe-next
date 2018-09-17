import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ExtendedDropdownLink = (props, context) => {
    const { children, ...otherProps } = props;
    const toggle = context.toggle || function() { };

    return (
        <Link { ...otherProps } onClick={ () => { toggle(); } }>
            { children }
        </Link>
    );
};
ExtendedDropdownLink.propTypes = { ...Link.propTypes };
ExtendedDropdownLink.defaultProps = { ...Link.defaultProps };
ExtendedDropdownLink.contextTypes = {
    toggle: PropTypes.func
};

export { ExtendedDropdownLink };