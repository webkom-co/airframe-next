import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './ThemeContext';

const ThemeConsumer = ({ children }) =>
    <Consumer>
    {
        (providedTheme) => children(providedTheme || { style: 'light', color: 'primary' })
    }
    </Consumer>

ThemeConsumer.propTypes = {
    children: PropTypes.func
}

export { ThemeConsumer };