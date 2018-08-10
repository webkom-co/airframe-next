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

    constructor(props) {
        super(props);

        this.childRef = React.createRef();
    }

    componentDidMount() {
        this.initPlaceholder();
    }

    componentDidUpdate() {
        this.initPlaceholder();

        if (typeof window !== 'undefined') {
            window.onload(this.initPlaceholder.bind(this));
        }
    }

    initPlaceholder() {
        if (
            typeof window !== 'undefined' &&
            typeof document !== 'undefined' &&
            document.readyState === 'complete'
        ) {
            const domElement = ReactDOM.findDOMNode(this.childRef.current);

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
            ref: this.childRef,
            'data-src': `holder.js/${this.props.width}x${this.props.height}?${phPropsQuery}`
        });
    }
}

export { HolderTextProvider };

