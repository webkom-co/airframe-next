import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ThemeConsumer } from '../../components/Theme';

const logos = {
    'white': '/static/images/logos/logo-white.svg',
    'primary': '/static/images/logos/logo-primary.svg',
    'success': '/static/images/logos/logo-success.svg',
    'warning': '/static/images/logos/logo-warning.svg',
    'danger': '/static/images/logos/logo-danger.svg',
    'info': '/static/images/logos/logo-info.svg',
    'indigo': '/static/images/logos/logo-indigo.svg',
    'purple': '/static/images/logos/logo-purple.svg',
    'pink': '/static/images/logos/logo-pink.svg',
    'yellow': '/static/images/logos/logo-yellow.svg'
}

const getLogoUrl = (style, color) => {
    return logos[color];
}

// Check for background
const getLogoUrlBackground = (style, color) => {
    if (style === 'color') {
        return logos['white'];
    } else {
        return getLogoUrl(style, color);
    }
}

const LogoThemed = ({ checkBackground, className, ...otherProps }) => (
    <ThemeConsumer>
    {
        ({ style, color }) => (
            <img
                src={
                    checkBackground ?
                        getLogoUrlBackground(style, color) :
                        getLogoUrl(style, color)
                }
                className={ classNames('d-block', className) }
                alt="Airframe Logo"
                { ...otherProps }
            />
        )
    }
    </ThemeConsumer>
);
LogoThemed.propTypes = {
    checkBackground: PropTypes.bool,
    className: PropTypes.string,
};

export { LogoThemed };
