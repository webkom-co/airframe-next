import React from 'react';

import { 
    Sidebar,
    Tools,
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
            <Tools.DefaultOnly>
                <VersionSelector dashboard="Master" />
                <FooterAuth />
            </Tools.DefaultOnly>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Tools.SlimOnly>
                <div className="text-center">
                    <UncontrolledButtonDropdown direction="right" className="mb-3 d-flex justify-content-center ">
                        <DropdownToggle color="link" className="pb-0">
                            <i className="fa fa-fw fa-toggle-on"></i>
                        </DropdownToggle>
                        <SwitchVersion />
                    </UncontrolledButtonDropdown>
                </div>
            </Tools.SlimOnly>
            { /* END SLIM Only View  */ }
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
    </React.Fragment>
)

export { SidebarBottomA };
