import React from 'react';
import {
    Link,
    Sidebar,
    Tools,
    UncontrolledTooltip
} from './../../../components';

export const SidebarTop = () => (
    <Sidebar.Section>
        { /* START DESKTOP View */ }
        <Tools.DefaultOnly>
            <div className="d-flex">
                <Link to="/" className="align-self-center" id="tooltipBackToHome">
                    <i className="fa fa-send fa-fw fa-2x text-primary"></i>
                </Link>
                <UncontrolledTooltip placement="right" target="tooltipBackToHome">
                    Back to Home
                </UncontrolledTooltip>
                <div className="px-3 py-2">
                    <div className="h4 fw-600 sidebar-logo mb-1 text-left text-primary">
                        react.bs4
                    </div>
                    <div className="job-title small text-left">Version: React 1.0.0</div>
                </div>
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
    </Sidebar.Section>
);