import React from 'react';

import {
    Link,
    Sidebar,
    SidebarTrigger,
} from './../../components';

import { SidebarMiddleNav } from './parts/SidebarMiddleNav';

import { LogoThemed } from './../LogoThemed/LogoThemed';
import { SidebarTop } from './parts/SidebarTop'
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
                { /* START SIDEBAR: Only for Desktop */ }
                <Link to="/" className="sidebar__brand">
                    <LogoThemed checkBackground />
                </Link>
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END SIDEBAR: Only for Desktop */ }

        { /* scrollable on mobile */ }
        <Sidebar.MobileFluid>
            <SidebarTop />
            
            <Sidebar.Section fluid cover>
                <SidebarMiddleNav />
            </Sidebar.Section>

            <SidebarBottom />
        </Sidebar.MobileFluid>
    </Sidebar>
);
