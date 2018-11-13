import React from 'react';
import PropTypes from 'prop-types';
import MobileDetect from 'mobile-detect';
import MatchMedia from 'react-responsive';

const breakpoints = {
    phone: 767.98,
    tablet: 991.98,
    desktop: 1199.98
};

/**
 *  Match media running on server and client
 *  unfortunetly doesn't work beacause of
 *  getInitialProps isn't called on child components
 */
export class UniversalMatchMedia extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node
    }

    static getInitialProps({ ctx }) {
        const { req } = ctx;
        const md = new MobileDetect(req.headers['user-agent']);

        if (md.phone()) {
            return { reqWidth: breakpoints.phone };
        }
        if (md.tablet()) {
            return { reqWidth: breakpoints.tablet };
        }
        return { reqWidth: Number.MAX_VALUE };
    }

    constructor() {
        super();
        
        this.state = {
            onServer: true
        }
    }

    componentDidMount() {
        this.setState({ onServer: false });
    }

    render() {
        const { onServer } = this.state;
        const { children, reqWidth, ...otherProps } = this.props;

        if (onServer) {
            const deviceWidth = reqWidth || 1200;
            return (
                <MatchMedia { ...otherProps } values={{ deviceWidth }}>
                    { children }
                </MatchMedia> 
            )
        }

        return (
            <MatchMedia { ...otherProps }>
                { children }
            </MatchMedia>
        );
    }
}
