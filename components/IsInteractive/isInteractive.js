import React from 'react';

export const isInteractive = (Component) =>
    class IsInteractive extends React.Component {
        constructor (props) {
            super(props);

            this.state = {
                isInteractive: false
            };
        }

        componentDidMount () {
            this.setState({ isInteractive: true });
        }

        render () {
            return (
                <Component { ...this.props } isInteractive={ this.state.isInteractive } />
            );
        }
    }
    