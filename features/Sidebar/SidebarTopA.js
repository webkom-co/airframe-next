import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

import { 
    Sidebar,
    Tools,
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

const avatarImg = randomAvatar();

const SidebarTopA = ({ isInteractive }) => (
    <React.Fragment>
        { /* START Sidebar TOP: A */ }
        <Sidebar.Section className="pt-0">
            { /* START SIDEBAR-SLIM: Avatar */ }
            <Link to="/">
                <Tools.SlimProps
                    slimProps={{ size: 'sm' }}
                >
                    <Avatar.Image
                        size="lg"
                        src={ avatarImg }
                        addOns={[
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
                        ]}
                    />
                </Tools.SlimProps>
            </Link>
            { /* END SIDEBAR-SLIM: Avatar */ }
            <br />
            { /* START SIDEBAR-DEFAULT: Dropdown */ }
            <Tools.DefaultOnly>
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" className="pl-0 pb-0 btn-profile" disabled={!isInteractive}>
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
                <br />
                <span className="small">
                    { faker.name.jobTitle() }
                </span>
            </Tools.DefaultOnly>
            { /* END SIDEBAR-DEFAULT: Dropdown */ }
        </Sidebar.Section>
        { /* END Sidebar TOP: A */ }
    </React.Fragment>
);
SidebarTopA.propTypes = {
    isInteractive: PropTypes.bool
};
const SidebarTopAConnected = isInteractive(SidebarTopA);

export { SidebarTopAConnected as SidebarTopA };
