import React from 'react';

import { 
    Nav,
    NavItem,
    NavLink,
    ActiveLink
} from './../../components';

const ProfileLeftNav = () => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <Nav pills vertical>
                <NavItem>
                    <NavLink tag={ ActiveLink } to="/apps/profile-edit">
                        Profile Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ ActiveLink } to="/apps/account-edit">
                        Account Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ ActiveLink } to="/apps/billing-edit">
                        Billing Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ ActiveLink } to="/apps/settings-edit">
                        Settings Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ ActiveLink } to="/apps/sessions-edit">
                        Sessions Edit
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { ProfileLeftNav };
