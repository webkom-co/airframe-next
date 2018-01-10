import React from 'react';
import PropTypes from 'prop-types';

import classes from './CounterDisplay.scss';

const CounterDisplay = (props) => (
    <div className={ classes['counter'] }>
        { props.value }
    </div>
);

CounterDisplay.propTypes = {
    value: PropTypes.number
}

CounterDisplay.defaultProps = {
    value: 0
}

export default CounterDisplay;