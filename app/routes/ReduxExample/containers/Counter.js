import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CounterDisplay from './../components/CounterDisplay'
import { actions, selectors } from './../modules/counter';

class CounterContainer extends React.Component {
    static propTypes = {
        counterValue: PropTypes.number.isRequired,
        setValue: PropTypes.func.isRequired
    }

    _timer = null;

    componentDidMount() {
        this._timer = setInterval(() => {
            const { counterValue, setValue } = this.props;

            setValue(counterValue + 1);
        }, 1000);
    }

    componentWillUnmount() {
        if(this._timer) {
            clearInterval(this._timer);
        }
    }

    render() {
        const { counterValue } = this.props;

        return (
            <CounterDisplay value={ counterValue } />
        )
    }
}

export default connect(state => ({
    counterValue: selectors.counterValue(state)
}), actions)(CounterContainer);