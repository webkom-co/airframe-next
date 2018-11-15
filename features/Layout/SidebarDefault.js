import React from 'react';

import {
    Link,
    Sidebar,
    SidebarTrigger,
    Tools
} from './../../components';

import { SidebarMiddleNav } from './parts/SidebarMiddleNav';

import { SidebarTopA } from './../Sidebar/SidebarTopA'
import { SidebarBottomA } from './../Sidebar/SidebarBottomA'

export const SidebarDefault = () => (
    <Sidebar>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        
        <Sidebar.Section>
            { /* START SIDEBAR: Only for Desktop */ }
            <Tools.DefaultOnly>
                <Link to="/" className="h4 fw-600 text-primary">
                    react.bs4
                </Link>
            </Tools.DefaultOnly>
            { /* START SIDEBAR: Only for Desktop */ }
        </Sidebar.Section>

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
