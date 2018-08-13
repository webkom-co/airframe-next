import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { 
    Nav,
    NavItem,
    NavLink
} from './../../../components';

const ProfileLeftNav = () => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <Nav pills vertical>
                <NavItem>
                    <NavLink tag={ RouterNavLink } to="/profileedit">
                        Profile Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ RouterNavLink } to="/accountedit">
                        Account Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ RouterNavLink } to="/billingedit">
                        Billing Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ RouterNavLink } to="/settingsedit">
                        Settings Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ RouterNavLink } to="/sessionsedit">
                        Sessions Edit
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { ProfileLeftNav };
