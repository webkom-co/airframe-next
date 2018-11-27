import React from 'react';
import {
    Avatar,
    AvatarAddOn,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Link,
    Media,
    PopoverBody,
    Sidebar,
    Tools,
    UncontrolledButtonDropdown,
    UncontrolledPopover
} from './../../../components';

const year = (new Date()).getFullYear();

const FooterText = () => (
    <p className="small text-muted">
        (C) { year } All Rights Reserved. This is the &quot;Admin Theme&quot; built with Bootstrap 4, React16+ &amp; Webpack. 
        Designed and implemented by <a href="http://www.webkom.co" target="_blank" rel="noopener noreferrer"> www.webkom.co</a>
    </p>
);

const DropdownProfile = () => (
    <React.Fragment>
        <DropdownMenu>
            <DropdownItem header>
                Jane Doe
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={ Link } to="/">
                My Profile
            </DropdownItem>
            <DropdownItem tag={ Link } to="/">
                Settings
            </DropdownItem>
            <DropdownItem tag={ Link } to="/">
                Billings
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={ Link } to="/">
                <i className="fa fa-fw fa-sign-out mr-2"></i>
                Sign Out
            </DropdownItem>
        </DropdownMenu>
    </React.Fragment>
);

export const SidebarBottom = () => (
    <Sidebar.Section>
        { /* START DESKTOP View */ }
        <Tools.DefaultOnly>
            <UncontrolledButtonDropdown direction="up" className="mb-3">
                <DropdownToggle color="link" className="btn-profile text-left pl-0 pb-0">
                        <Media>
                            <Media left middle className="mr-3">
                                <Avatar.Image
                                    size="md"
                                    src="/static/images/avatars/example.jpg"
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
                            </Media>
                            <Media body>
                                <span className="mt-0 d-flex h6 mb-1 text-truncate">
                                    Jane Doe <i className="fa fa-fw fa-angle-up ml-1"></i>
                                </span>
                                <p className="small text-truncate">
                                    Web Developer
                                </p>
                            </Media>
                        </Media>
                </DropdownToggle>
                <DropdownProfile />
            </UncontrolledButtonDropdown>
        </Tools.DefaultOnly>
        { /* END DESKTOP View */ }
        { /* START SLIM Only View */ }
        <Tools.SlimOnly>
            <div className="text-center">
                <UncontrolledButtonDropdown direction="right" className="mb-3">
                    <DropdownToggle color="link" className="text-left pl-0 pb-0">
                        <Avatar.Image
                            size="sm"
                            src="/static/images/avatars/example.jpg"
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
                    </DropdownToggle>
                    <DropdownProfile />
                </UncontrolledButtonDropdown>
            </div>
        </Tools.SlimOnly>
        { /* END SLIM Only View  */ }
        { /* START DESKTOP View */ }
        <Tools.DefaultOnly>
            <FooterText />
        </Tools.DefaultOnly>
        { /* END DESKTOP View */ }
        { /* START SLIM Only View */ }
        <Tools.SlimOnly>
            <div className="text-center">
                <i className="fa fa-fw fa-question-circle-o" id="UncontrolledSidebarPopoverFooter"></i>
                <UncontrolledPopover placement="left-end" target="UncontrolledSidebarPopoverFooter">
                    <PopoverBody>
                        <FooterText />
                    </PopoverBody>
                </UncontrolledPopover>
            </div>
        </Tools.SlimOnly>
        { /* END SLIM Only View */ }
    </Sidebar.Section>
);