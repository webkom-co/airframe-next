import React from 'react';

import { 
    Sidebar,
    Tools,
    UncontrolledButtonDropdown,
    DropdownToggle,
    UncontrolledPopover,
    PopoverBody
} from './../../../components';

import { SwitchVersion } from '../Dropdowns/SwitchVersion';
import { FooterAuth } from '../Pages/FooterAuth';
import { FooterText } from '../FooterText';

const SidebarBottomA = () => (
    <React.Fragment>
        { /* START Sidebar BOTTOM: A */ }
        <Sidebar.Section>
            { /* START DESKTOP View */ }
            <Tools.DefaultOnly>
                <UncontrolledButtonDropdown direction="up" className="mb-3">
                    <DropdownToggle color="link" className="btn-switch-version text-left pl-0 pb-0">
                        React 1.0.0 <i className="fa fa-angle-up ml-2"></i>
                        <br />
                        <span className="small">
                            Sun, Jun 12, 2018 4:43:12 PM
                        </span>
                    </DropdownToggle>
                    <SwitchVersion />
                </UncontrolledButtonDropdown>
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
