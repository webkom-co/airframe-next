import React from 'react';
import { Link } from 'react-router-dom';

import {
    Sidebar,
    Tools,
    SidebarTrigger
} from './../../components';

import { DefaultSidebarNav } from './DefaultSidebarNav';

import { SidebarTopB } from '../../routes/components/Sidebar/SidebarTopB'
import { SidebarBottomB } from '../../routes/components/Sidebar/SidebarBottomB'

export const LayoutASidebar = () => (
    <Sidebar>
        { /* START SIDEBAR-OVERLAY: Close (x) */ }
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>
        { /* END SIDEBAR-OVERLAY: Close (x) */ }

        { /* START SIDEBAR: Fixed Section */ }
        <Sidebar.Section>
            <SidebarTopB />
        </Sidebar.Section>
        { /* END SIDEBAR: Fixed Section */ }

        { /* START SIDEBAR: Mobile Scroll Wrapper */ }
        <Sidebar.MobileFluid>
            { /* START SIDEBAR: Everywhere */ }
            <Sidebar.Section fluid cover>
                { /* SIDEBAR: Menu */ }
                <DefaultSidebarNav />
            </Sidebar.Section>
            { /* END SIDEBAR: Everywhere */ }
            <SidebarBottomB />
        </Sidebar.MobileFluid>
        { /* END SIDEBAR: Mobile Scroll Wrapper */ }

    </Sidebar>
);
