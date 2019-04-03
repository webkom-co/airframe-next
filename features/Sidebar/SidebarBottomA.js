import React from 'react';

import { 
    Sidebar,
    UncontrolledPopover,
    PopoverBody
} from './../../components';

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
                    <VersionSelector dashboard="Master" sidebar/>
                    <FooterAuth />
                </div>
            </Sidebar.HideSlim>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <div className="text-center mb-3">
                    <VersionSelector dashboard="Master" sidebar render={() => (
                        <i className="fa fa-fw fa-toggle-on"></i>
                    )}/>
                </div>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View  */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <a className="text-center sidebar__link" href="javascript:;">
                    <i className="fa fa-fw fa-question-circle-o" id="UncontrolledSidebarPopoverFooter"></i>
                    <UncontrolledPopover placement="left-end" target="UncontrolledSidebarPopoverFooter">
                        <PopoverBody>
                            <FooterText />
                        </PopoverBody>
                    </UncontrolledPopover>
                </a>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View */ }
        </Sidebar.Section>
    </React.Fragment>
)

export { SidebarBottomA };
