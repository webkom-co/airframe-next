import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import {
    Sidebar,
    SidebarTrigger,
    Tools,
    Avatar,
    AvatarAddOn,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../components';

import { SidebarNavMenu } from './SidebarNavMenu';
import { FooterAuth } from '../../routes/components/Pages/FooterAuth';

import avatarImg from './../../images/avatars/avatar-1.jpg';

export const SidebarDefault = () => (
    <Sidebar>
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>

        <Sidebar.Section>
            { /* START Logo */ }
            <Tools.DefaultOnly>
                <div className="mb-4">
                    <Link to="/" className="h4 fw-600 text-primary">
                        airframe
                    </Link>
                </div>
            </Tools.DefaultOnly>
            { /* END Logo */ }
            { /* START Avatar */ }
            <Link to="/">
                <Tools.SlimProps
                    slimProps={{ size: 'md' }}
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
            { /* END Avatar */ }
            <br />
            { /* User Info (non-slim only) */ }
            <Tools.DefaultOnly>
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" className="pl-0 pb-0">
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
        </Sidebar.Section>

        <Sidebar.Section fluid cover>
            { /* Sidebar Menu */ }
            <SidebarNavMenu />
        </Sidebar.Section>

        <Sidebar.Section>
            { /* Capacity / Storage (non-slim only) */ }
            <Tools.DefaultOnly>
                <UncontrolledButtonDropdown direction="up" className="mb-3">
                    <DropdownToggle color="link" className="text-left pl-0 pb-0">
                        React 1.0.0 <i className="fa fa-angle-up ml-2"></i>
                        <br />
                        <span className="small">
                            Sun, Jun 12, 2018 4:43:12 PM
                        </span>
                    </DropdownToggle>
                    <DropdownMenu persist>
                        <DropdownItem header>
                            Choose Version
                        </DropdownItem>
                        <DropdownItem href="http://react.bs4.webkom.co" active>
                            React 1.0.0
                            <br />
                            <span className="small">
                                Sun, Jun 12, 2018 4:43:12 PM
                            </span>
                        </DropdownItem>
                        <DropdownItem href="http://angular.bs4.webkom.co">
                            Angular 1.0.0
                            <br />
                            <span className="small">
                                Sun, Jun 12, 2018 4:43:12 PM
                            </span>
                        </DropdownItem>
                        <DropdownItem href="http://bs4.webkom.co">
                            Jquery 1.0.0
                            <br />
                            <span className="small">
                                Sun, Jun 12, 2018 4:43:12 PM
                            </span>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <FooterAuth />
            </Tools.DefaultOnly>
        </Sidebar.Section>
    </Sidebar>
);
