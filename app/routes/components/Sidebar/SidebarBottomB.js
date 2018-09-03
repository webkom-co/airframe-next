import React from 'react';
import faker from 'faker';

import { 
    Sidebar,
    Tools,
    UncontrolledButtonDropdown,
    DropdownToggle,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../components';

import { DropdownProfile } from '../Dropdowns/DropdownProfile';
import { FooterAuth } from '../Pages/FooterAuth';

const SidebarBottomB = () => (
    <React.Fragment>
        { /* START Sidebar BOTTOM: B */ }
        <Sidebar.Section>
            { /* Capacity / Storage (non-slim only) */ }
            <Tools.DefaultOnly>
                <UncontrolledButtonDropdown direction="up" className="mb-3">
                    <DropdownToggle color="link" className="text-left pl-0 pb-0">
                            <Media>
                                <Media left middle className="mr-3">
                                    <Avatar.Image
                                        size="md"
                                        src="http://bs4.webkom.co/img/avatars/2.jpg"
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
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() } <i className="fa fa-fw fa-angle-up ml-1"></i>
                                    </span>
                                    <p className="small">
                                        { faker.name.jobTitle() }
                                    </p>
                                </Media>
                            </Media>
                    </DropdownToggle>
                    <DropdownProfile />
                </UncontrolledButtonDropdown>
                <FooterAuth />
            </Tools.DefaultOnly>
        </Sidebar.Section>
        { /* END Sidebar BOTTOM: B */ }
    </React.Fragment>
)

export { SidebarBottomB };
