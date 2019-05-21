import React from 'react';

import {
    Link,
    Sidebar,
    SidebarTrigger,
} from './../../components';

import { SidebarMiddleNav } from './parts/SidebarMiddleNav';

import { SidebarTopA } from './../Sidebar/SidebarTopA'
import { SidebarBottomA } from './../Sidebar/SidebarBottomA'
import { LogoThemed } from './../LogoThemed/LogoThemed';

export const SidebarDefault = () => (
    <Sidebar>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        
        <Sidebar.HideSlim>
            <Sidebar.Section>
                { /* START SIDEBAR: Only for Desktop */ }
                <Link to="/" className="sidebar__brand">
                    <LogoThemed checkBackground />
                </Link>
                { /* START SIDEBAR: Only for Desktop */ }
            </Sidebar.Section>
        </Sidebar.HideSlim>        

        { /* START SIDEBAR: Only for Mobile */ }
        <Sidebar.MobileFluid>
            <SidebarTopA />
            
            <Sidebar.Section fluid cover>
                { /* SIDEBAR: Menu */ }
                <SidebarMiddleNav />
            </Sidebar.Section>

            <SidebarBottomA />
        </Sidebar.MobileFluid>
        { /* END SIDEBAR: Only for Mobile */ }
    </Sidebar>
);
