import React from 'react';

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
                    <NavLink href="/profileedit">
                        Profile Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/accountedit">
                        Account Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/billingedit">
                        Billing Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/settingsedit">
                        Settings Edit
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/sessionsedit">
                        Sessions Edit
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { ProfileLeftNav };
