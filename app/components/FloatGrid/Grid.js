import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Grid as ReactGrid } from './../';
import classes from './common.scss';

export class Grid extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        children: PropTypes.node,
        fluid: PropTypes.bool
    }

    static defaultProps = {
        active: true,
        fluid: false
    }

    render() {
        const { active, children, fluid, className, ...otherProps } = this.props;
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
                <div className={ floatWrapClasses } { ...otherProps } >
                    <div className={ classes.floatGridWrap }>
                        { modifiedChildren }
                    </div>
                </div>
            ) : (
                <ReactGrid fluid={ fluid } className={ className } { ...otherProps }>
                    { modifiedChildren }
                </ReactGrid>
            )
        );
    }
}
