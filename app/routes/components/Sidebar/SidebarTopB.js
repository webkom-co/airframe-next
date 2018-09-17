import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Sidebar,
    Tools,
    UncontrolledDropdown,
    DropdownToggle,
    UncontrolledTooltip
} from './../../../components';

import { SwitchVersion } from '../Dropdowns/SwitchVersion';

const SidebarTopB = () => (
    <React.Fragment>
        { /* START Sidebar TOP: B */ }
            { /* START DESKTOP View */ }
            <Tools.DefaultOnly>
                <div className="d-flex">
                    <Link to="/" className="align-self-center" id="tooltipBackToHome">
                        <i className="fa fa-send fa-fw fa-2x text-primary"></i>
                    </Link>
                    <UncontrolledTooltip placement="right" target="tooltipBackToHome">
                        Back to Home
                    </UncontrolledTooltip>
                    <UncontrolledDropdown>
                        <DropdownToggle color="link">
                            <div className="h4 fw-600 sidebar-logo mb-1 text-left">
                                react.bs4 <i className="fa fa-angle-down ml-1"></i>
                            </div>
                            <div className="job-title small text-left">Version: Jquery, 1.0.0</div>
                        </DropdownToggle>
                        <SwitchVersion />
                    </UncontrolledDropdown>
                </div>
            </Tools.DefaultOnly>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Tools.SlimOnly>
                <div className="text-center">
                    <Link to="/">
                        <i className="fa fa-send fa-fw text-primary" id="tooltipBackToHomeSlim"></i>
                    </Link>
                    <UncontrolledTooltip placement="right" target="tooltipBackToHomeSlim">
                        Back to Home
                    </UncontrolledTooltip>
                </div>
            </Tools.SlimOnly>
            { /* END SLIM Only View  */ }
        { /* END Sidebar TOP: B */ }
    </React.Fragment>
)

export { SidebarTopB };
