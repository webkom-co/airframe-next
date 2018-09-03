import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Sidebar,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    UncontrolledTooltip
} from './../../../components';

import { SwitchVersion } from '../Dropdowns/SwitchVersion';

const SidebarTopB = () => (
    <React.Fragment>
        { /* START Sidebar TOP: B */ }
        <Sidebar.Section>
            <div className="d-flex">
                <Link to="/" className="align-self-center" id="tooltipBackToHome">
                    <i className="fa fa-send fa-fw fa-2x text-primary"></i>
                </Link>
                <UncontrolledTooltip placement="right" target="tooltipBackToHome">
                    Back to Home
                </UncontrolledTooltip>
                <UncontrolledDropdown>
                    <DropdownToggle color="link">
                        <div className="h4 fw-600 sidebar-logo mb-1 text-left">airframe <i className="fa fa-angle-down ml-1"></i>
                        </div>
                        <div className="job-title small text-left">Version: Jquery, 1.0.0</div>
                    </DropdownToggle>
                    <SwitchVersion />
                </UncontrolledDropdown>
            </div>
        </Sidebar.Section>
        { /* END Sidebar TOP: B */ }
    </React.Fragment>
)

export { SidebarTopB };
