import React from 'react';

import { 
    Sidebar,
    UncontrolledButtonDropdown,
    DropdownToggle,
    UncontrolledPopover,
    PopoverBody
} from './../../components';

import { SwitchVersion } from '../Dropdowns/SwitchVersion';
import { FooterAuth } from '../Pages/FooterAuth';
import { FooterText } from '../FooterText';
import { VersionSelector } from '../VersionSelector/VersionSelector';

const SidebarBottomA = () => (
    <React.Fragment>
        { /* START Sidebar BOTTOM: A */ }
        <Sidebar.Section>
            { /* START DESKTOP View */ }
            <Sidebar.HideSlim>
                <div>
                    <VersionSelector dashboard="Master" />
                    <FooterAuth />
                </div>
            </Sidebar.HideSlim>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <div className="text-center">
                    <UncontrolledButtonDropdown direction="right" className="mb-3 d-flex justify-content-center ">
                        <DropdownToggle color="link" className="pb-0">
                            <i className="fa fa-fw fa-toggle-on"></i>
                        </DropdownToggle>
                        <SwitchVersion />
                    </UncontrolledButtonDropdown>
                </div>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View  */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <div className="text-center">
                    <i className="fa fa-fw fa-question-circle-o" id="UncontrolledSidebarPopoverFooter"></i>
                    <UncontrolledPopover placement="left-end" target="UncontrolledSidebarPopoverFooter">
                        <PopoverBody>
                            <FooterText />
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View */ }
        </Sidebar.Section>
    </React.Fragment>
)

export { SidebarBottomA };
