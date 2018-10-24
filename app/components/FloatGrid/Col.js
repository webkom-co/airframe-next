import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

import { Col as BootstrapCol } from './../';
import classes from './common.scss';

export class Col extends React.Component {
    static propTypes = {
        active: PropTypes.bool,

        lg: PropTypes.number,
        md: PropTypes.number,
        sm: PropTypes.number,
        xs: PropTypes.number,

        lgH: PropTypes.number,
        mdH: PropTypes.number,
        smH: PropTypes.number,
        xsH: PropTypes.number,

        lgX: PropTypes.number,
        mdX: PropTypes.number,
        smX: PropTypes.number,
        xsX: PropTypes.number,

        lgY: PropTypes.number,
        mdY: PropTypes.number,
        smY: PropTypes.number,
        xsY: PropTypes.number,

        children: PropTypes.node
    }

    static defaultProps = {
        active: true
    }

    render() {
        const { active, children, className } = this.props;
        const bsColumnProps = _.pick(this.props, ['lg', 'md', 'sm', 'xs']);
        const otherProps = _.omit(this.props, [..._.keys(Col.propTypes),
            'minW', 'maxW', 'minH', 'moved', 'static', 'isDraggable', 'isResizable']);

        const floatColClasses = classNames(className, classes.floatCol, 'float-column');

        return (
            active ? (
                <div { ...otherProps } className={ floatColClasses }>
                    { children }
                </div>
            ) : (
                <BootstrapCol { ...(_.extend(bsColumnProps, otherProps)) } className={ className }>
                    { children }
                </BootstrapCol>
            )
        );
    }
}
