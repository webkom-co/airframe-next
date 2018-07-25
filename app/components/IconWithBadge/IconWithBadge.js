import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './IconWithBadge.scss';

const IconWithBadge = (props) => {
    const { badge, children, className } = props;
    const adjustedBadge = React.cloneElement(badge, {
        className: classNames(
            badge.props.className,
            classes['icon-with-badge__badge']
        )
    });
    const wrapClass = classNames(className, classes['icon-with-badge']);
    return (
        <div className={ wrapClass }>
            { children }
            { adjustedBadge }
        </div>
    );
};
IconWithBadge.propTypes = {
    badge: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string
};

export { IconWithBadge };
