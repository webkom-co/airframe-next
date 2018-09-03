import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    DropdownMenu,
    DropdownItem
} from './../../../components';

const DropdownProfile = () => (
    <React.Fragment>
        <DropdownMenu>
            <DropdownItem header>
                { faker.name.firstName() } { faker.name.lastName() }
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={ Link } to="/apps/profile-details">
                My Profile
            </DropdownItem>
            <DropdownItem tag={ Link } to="/apps/settings-edit">
                Settings
            </DropdownItem>
            <DropdownItem tag={ Link } to="/apps/billing-edit">
                Billings
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={ Link } to="/pages/login">
                <i className="fa fa-fw fa-sign-out mr-2"></i>
                Sign Out
            </DropdownItem>
        </DropdownMenu>
    </React.Fragment>
)

export { DropdownProfile };
