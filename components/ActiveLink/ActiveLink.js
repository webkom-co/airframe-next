import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'next/router';

import Link from './../Link';

export const ActiveLink = withRouter(({ children, router, to, className, activeClassName, ...otherProps }) => {
    const linkClass = classNames(className, {
        [activeClassName]: router.pathname === to
    });

    return (
        <Link className={ linkClass } to={to} {...otherProps}>
            { children }
        </Link>
    );
});
ActiveLink.propTypes = {
    children: PropTypes.node,
    router: PropTypes.object,
    className: PropTypes.string,
    activeClassName: PropTypes.string
};
ActiveLink.defaultProps = {
    activeClassName: 'active'
};
