import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Holder from 'holderjs';
import _ from 'lodash';
import qs from 'query-string';

import colors from './../../colors';

class HolderTextProvider extends React.Component {
    static propTypes = {
        bg: PropTypes.string,
        fg: PropTypes.string,
        text: PropTypes.string,
        size: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        font: PropTypes.string,
        align: PropTypes.string,
        outline: PropTypes.bool,
        lineWrap: PropTypes.number,
        children: PropTypes.node
    }
    static defaultProps = {
        width: '100p',
        height: 220,
        bg: colors['200'],
        fg: colors['500']
    }

    componentDidMount() {
        this.initPlaceholder();
    }

    componentDidUpdate() {
        this.initPlaceholder();
    }

    initPlaceholder() {
        if (
            typeof window !== 'undefined',
            typeof document !== 'undefined'
        ) {
            const domElement = ReactDOM.findDOMNode(this.childRef);

            if (domElement) {
                Holder.run({
                    domain: 'holder.js',
                    images: domElement,
                    object: null,
                    bgnodes: null,
                    stylenodes: null
                })

                return true;
            }
        }

        return false;
    }

    render() {
        const onlyChild = React.Children.only(this.props.children);

        const phProps = _.omit(this.props, ['children', 'width', 'height']);
        const phPropsQuery = qs.stringify(phProps);

        return React.cloneElement(onlyChild, {
            ref: (ref) => { this.childRef = ref; },
            'data-src': `holder.js/${this.props.width}x${this.props.height}?${phPropsQuery}`
        });
    }
}

export { HolderTextProvider };

