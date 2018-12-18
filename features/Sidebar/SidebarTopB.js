import React from 'react';

import {
    Link,
    Tools,
    UncontrolledDropdown,
    UncontrolledTooltip
} from './../../components';

import { VersionSelector } from '../VersionSelector/VersionSelector';

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
                        <VersionSelector down dashboard="Master" render={(currentVersion) => (
                            <React.Fragment>
                                <div className="h4 fw-600 sidebar-logo mb-1 text-left">
                                    react.bs4 <i className="fa fa-angle-down ml-1"></i>
                                </div>
                                <div className="job-title small text-left">Version: {currentVersion.label}, {currentVersion.version}</div>
                            </React.Fragment>
                        )}/>
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
