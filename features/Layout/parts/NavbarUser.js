import React from 'react';
import PropTypes from 'prop-types';

import {
    Link,
    NavItem,
    NavLink
} from './../../../components';

const NavbarUser = (props) => (
    <NavItem { ...props }>
        <NavLink tag={ Link } to="/pages/login">
            <i className="fa fa-power-off"></i>
        </NavLink>
    </NavItem>
);
NavbarUser.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarUser };
