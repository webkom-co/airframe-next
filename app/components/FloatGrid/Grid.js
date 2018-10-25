import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Grid as ReactGrid } from './../';
import { FloatGridContext } from './floatGridContext';
import classes from './common.scss';

export class Grid extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        children: PropTypes.node,
        fluid: PropTypes.bool,
        rowHeight: PropTypes.number
    }

    static defaultProps = {
        active: true,
        fluid: false,
        rowHeight: 100
    }

    state = {
        gridSize: { width: 0, height: 0 }
    }
    _gridRef = React.createRef();
    _resizeDebounceTimeout = 0;

    componentDidMount() {
        this.setState({
            gridSize: {
                width: this._gridRef.current.clientWidth,
                height: this._gridRef.current.clientHeight
            }
        });

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this._resizeHandler);
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this._resizeHandler);
        }
    }

    render() {
        const { active, children, fluid, className, rowHeight, ...otherProps } = this.props;
        const { gridSize } = this.state;
        const modifiedChildren = React.Children.map(children, child => (
            React.cloneElement(child, {
                active
            })
        ));

        const floatWrapClasses = classNames({
            [classes.static]: !fluid
        }, className, classes.floatGridParent);

        return(
            active ? (
                <FloatGridContext.Provider
                    value={{
                        gridUnitsToPx: (w, h) => {
                            return {
                                wPx: w / 12 * gridSize.width,
                                hPx: h * rowHeight
                            }
                        },
                        rowHeight,
                        gridSize
                    }}
                >
                    <div
                        className={ floatWrapClasses }
                        ref={ this._gridRef }
                        { ...otherProps }
                    >
                        <div className={ classes.floatGridWrap }>
                            { modifiedChildren }
                        </div>
                    </div>
                </FloatGridContext.Provider>
            ) : (
                <ReactGrid fluid={ fluid } className={ className } { ...otherProps }>
                    { modifiedChildren }
                </ReactGrid>
            )
        );
    }

    _resizeHandler = () => {
        clearInterval(this._resizeDebounceTimeout);

        this._resizeDebounceTimeout = setInterval(() => {
            this.setState({
                gridSize: {
                    w: this._gridRef.current.clientWidth,
                    h: this._gridRef.current.clientHeight
                }
            });
        }, 1000 / 60 * 10); //Every 10 frames debounce
    }
}
