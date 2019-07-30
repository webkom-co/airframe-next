  
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

export const Link = ({ to, children, onClick, prefetch, ...otherProps }) => {
    const clickHandler = () => {
        if (onClick) {
            onClick();
        }
        return false;
    }

    return (
        <NextLink href={ to } prefetch={ prefetch }>
            <a href={ to } onClick={clickHandler} {...otherProps}>
                { children }
            </a>
        </NextLink>
    )
};

Link.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    onClick: PropTypes.func,
    prefetch: PropTypes.bool
}
