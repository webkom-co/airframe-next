import React from 'react';

import {
    Link,
    Sidebar,
    SidebarTrigger,
} from './../../components';

import { SidebarMiddleNav } from './parts/SidebarMiddleNav';
import { SidebarBottom } from './parts/SidebarBottom'

export const SidebarDefault = () => (
    <Sidebar>
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>
        
        { /* START SIDEBAR: Only for Desktop */ }
        <Sidebar.HideSlim>
            <Sidebar.Section>
                <Link to="/" className="h4 fw-600 sidebar__brand">
                    react.bs4
                </Link>
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END SIDEBAR: Only for Desktop */ }

        { /* scrollable on mobile */ }
        <Sidebar.MobileFluid>
            <Sidebar.Section fluid cover>
                <SidebarMiddleNav />
            </Sidebar.Section>

            <SidebarBottom />
        </Sidebar.MobileFluid>
    </Sidebar>
);
