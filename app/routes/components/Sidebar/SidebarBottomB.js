import React from 'react';
import faker from 'faker';

import { 
    Sidebar,
    Tools,
    UncontrolledButtonDropdown,
    DropdownToggle,
    UncontrolledPopover,
    PopoverBody,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../components';
import { randomAvatar } from './../../../utilities';

import { DropdownProfile } from '../Dropdowns/DropdownProfile';
import { FooterAuth } from '../Pages/FooterAuth';
import { FooterText } from '../FooterText';

const SidebarBottomB = () => (
    <React.Fragment>
        { /* START Sidebar BOTTOM: B */ }
        <Sidebar.Section>
            { /* START DESKTOP View */ }
            <Tools.DefaultOnly>
                <UncontrolledButtonDropdown direction="up" className="mb-3">
                    <DropdownToggle color="link" className="text-left pl-0 pb-0">
                            <Media>
                                <Media left middle className="mr-3">
                                    <Avatar.Image
                                        size="md"
                                        src={ randomAvatar() }
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
                                        { faker.name.firstName() } { faker.name.lastName() } <i className="fa fa-fw fa-angle-up ml-1"></i>
                                    </span>
                                    <p className="small text-truncate">
                                        { faker.name.jobTitle() }
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
                        <DropdownToggle color="link" className="btn-profile text-left pl-0 pb-0">
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
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
                <FooterAuth />
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
        { /* END Sidebar BOTTOM: B */ }
    </React.Fragment>
)

export { SidebarBottomB };
