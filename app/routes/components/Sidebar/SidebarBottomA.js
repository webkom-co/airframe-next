import React from 'react';

import { 
    Sidebar,
    Tools,
    UncontrolledButtonDropdown,
    DropdownToggle
} from './../../../components';

import { SwitchVersion } from '../Dropdowns/SwitchVersion';
import { FooterAuth } from '../Pages/FooterAuth';

const SidebarBottomA = () => (
    <React.Fragment>
        { /* START Sidebar BOTTOM: A */ }
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
                    <SwitchVersion />
                </UncontrolledButtonDropdown>
                <FooterAuth />
            </Tools.DefaultOnly>
        </Sidebar.Section>
        { /* END Sidebar BOTTOM: A */ }
    </React.Fragment>
)

export { SidebarBottomA };
