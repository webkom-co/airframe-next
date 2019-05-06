import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

import { 
    Sidebar,
    UncontrolledButtonDropdown,
    Avatar,
    AvatarAddOn,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Link
} from './../../components';
import isInteractive from './../../components/IsInteractive';
import { randomAvatar } from './../../core/utilities';

const commonAvatarProps = {
    src: randomAvatar(),
    addOns: [
        <AvatarAddOn.Icon 
            className="fa fa-circle"
            color="white"
            key="avatar-icon-bg"
        />,
        <AvatarAddOn.Icon 
            className="fa fa-circle"
            color="success"
            key="avatar-icon-fg"
        />
    ]
}

const SidebarTopA = ({ isInteractive }) => (
    <React.Fragment>
        { /* START: Sidebar Default */ }
        <Sidebar.HideSlim>
            <Sidebar.Section className="pt-0">
                <Link to="/" className="d-block">
                    <Sidebar.HideSlim>
                        <Avatar.Image
                            size="lg"
                            { ...commonAvatarProps }
                        />
                    </Sidebar.HideSlim>
                </Link>
                
                <UncontrolledButtonDropdown>
                    <DropdownToggle
                        color="link"
                        className="pl-0 pb-0 btn-profile sidebar__link"
                        disabled={ !isInteractive }
                    >
                        { faker.name.firstName() } { faker.name.lastName() }
                        <i className="fa fa-angle-down ml-2"></i>
                    </DropdownToggle>
                    <DropdownMenu persist>
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
                </UncontrolledButtonDropdown>
                <div className="small">
                    { faker.name.jobTitle() }
                </div>
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END: Sidebar Default */ }

        { /* START: Sidebar Slim */ }
        <Sidebar.ShowSlim>
            <Sidebar.Section>
                <Avatar.Image
                    size="sm"
                    { ...commonAvatarProps }
                />
            </Sidebar.Section>
        </Sidebar.ShowSlim>
        { /* END: Sidebar Slim */ }
    </React.Fragment>
);
SidebarTopA.propTypes = {
    isInteractive: PropTypes.bool
};
const SidebarTopAConnected = isInteractive(SidebarTopA);

export { SidebarTopAConnected as SidebarTopA };
