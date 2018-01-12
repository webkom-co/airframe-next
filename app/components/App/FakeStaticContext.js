import React from 'react';
import PropTypes from 'prop-types';

export default class FakeStaticContext extends React.Component {
    static childContextTypes = {
        router: PropTypes.object.isRequired,
    }
  
    getChildContext() {
        return {
            router: {
                staticContext: {},
            },
        }
    }
  
    render() {
        return this.props.children
    }
}