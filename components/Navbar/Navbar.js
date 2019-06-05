import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Navbar as BSNavbar, Container } from 'reactstrap';

const Navbar = ({ themed, fluid, shadow, className, children, ...otherProps }) => {
    const navbarClass = classNames({
        'navbar-themed': themed,
        'navbar-shadow': shadow,
    }, 'navbar-multi-collapse', className);

    return (
        <BSNavbar className={ navbarClass } { ...otherProps }>
            <Container className="navbar-collapse-wrap" fluid={ fluid }>
                { children }
            </Container>
        </BSNavbar>
    )
};
Navbar.propTypes = {
    themed: PropTypes.bool,
    fluid: PropTypes.bool,
    shadow: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
}
Navbar.defaultProps = {
    fluid: false,
    themed: false,
}

export { Navbar };
