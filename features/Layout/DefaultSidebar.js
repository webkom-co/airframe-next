import React from 'react';
import PropTypes from 'prop-types';
import {
    Facebook as LoaderWithAvatar,
    BulletList as LoaderMenu,
    Code as LoaderFooter
} from 'react-content-loader';
import {
    Link,
    Sidebar,
    SidebarTrigger,
    Tools
} from './../../components';
import isInteractive from './../../components/IsInteractive';
import { SidebarMiddleNav } from './SidebarMiddleNav';

import { SidebarTopA } from './../Sidebar/SidebarTopA'
import { SidebarBottomA } from './../Sidebar/SidebarBottomA'

const DefaultSidebar = (props) => (
    <Sidebar>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        
        {
            props.isInteractive && (
                <Sidebar.Section>
                    { /* START SIDEBAR: Only for Desktop */ }
                    <Tools.DefaultOnly>
                        <Link to="/" className="h4 fw-600 text-primary">
                            react.bs4
                        </Link>
                    </Tools.DefaultOnly>
                    { /* START SIDEBAR: Only for Desktop */ }
                </Sidebar.Section>
            )
        }

        { /* START SIDEBAR: Only for Mobile */ }
        <Sidebar.MobileFluid>
            {
                /* Sidebar Top or Loader */
                props.isInteractive ? (
                    <SidebarTopA />
                ) : (
                    <Sidebar.Section>
                        <LoaderWithAvatar />
                    </Sidebar.Section>
                )
            }
            {
                /* Sidebar Menu or Loader */
                props.isInteractive ? (
                    <Sidebar.Section fluid cover>
                        <SidebarMiddleNav />
                    </Sidebar.Section>
                ) : (
                    <Sidebar.Section fluid>
                        <LoaderMenu/>
                    </Sidebar.Section>
                )
            }
            {
                /* Sidebar Footer or Loader */
                props.isInteractive ? (
                    <SidebarBottomA />
                ) : (
                    <Sidebar.Section>
                        <LoaderFooter />
                    </Sidebar.Section>
                )
            }
        </Sidebar.MobileFluid>
        { /* END SIDEBAR: Only for Mobile */ }
    </Sidebar>
);
DefaultSidebar.propTypes = {
    isInteractive: PropTypes.bool
}

const ConnectedDefaultSidebar = isInteractive(DefaultSidebar);

export { ConnectedDefaultSidebar as DefaultSidebar };
