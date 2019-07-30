import React from 'react';

import { 
    Sidebar,
    UncontrolledButtonDropdown,
    Avatar,
    AvatarAddOn,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Link
} from './../../../components';

const avatarImg = '/static/images/avatars/example.jpg';

const SidebarTop = () => (
    <React.Fragment>
        { /* START: Sidebar Default */ }
        <Sidebar.HideSlim>
            <Sidebar.Section className="pt-0">
                <Link to="/" className="d-block">
                    <Sidebar.HideSlim>
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
                    </Sidebar.HideSlim>
                </Link>
                
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" className="pl-0 pb-0 btn-profile sidebar__link">
                        Jane Doe
                        <i className="fa fa-angle-down ml-2"></i>
                    </DropdownToggle>
                    <DropdownMenu persist>
                    <DropdownItem header>
                        Jane Doe
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        My Profile
                    </DropdownItem>
                    <DropdownItem>
                        Settings
                    </DropdownItem>
                    <DropdownItem>
                        Billings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/pages/login">
                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                        Sign Out
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <div className="small sidebar__link--muted">
                    Web Developer
                </div>
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END: Sidebar Default */ }

        { /* START: Sidebar Slim */ }
        <Sidebar.ShowSlim>
            <Sidebar.Section>
                <Avatar.Image
                    size="sm"
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
            </Sidebar.Section>
        </Sidebar.ShowSlim>
        { /* END: Sidebar Slim */ }
    </React.Fragment>
)

export { SidebarTop };
