import React from 'react';
import { Link } from 'react-router-dom';

import {
    Sidebar,
    SidebarTrigger,
    Tools
} from './../../components';

import { SidebarMiddleNav } from './SidebarMiddleNav';

import { SidebarTopA } from '../../routes/components/Sidebar/SidebarTopA'
import { SidebarBottomA } from '../../routes/components/Sidebar/SidebarBottomA'

export const DefaultSidebar = () => (
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
