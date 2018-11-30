import React from 'react';

import {
    Sidebar,
    SidebarTrigger,
} from './../../components';

import { SidebarMiddleNav } from './parts/SidebarMiddleNav';

import { SidebarTop } from './parts/SidebarTop'
import { SidebarBottom } from './parts/SidebarBottom'

export const SidebarDefault = () => (
    <Sidebar>
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>
        
        <SidebarTop />

        { /* scrollable on mobile */ }
        <Sidebar.MobileFluid>
            <Sidebar.Section fluid cover>
                <SidebarMiddleNav />
            </Sidebar.Section>

            <SidebarBottom />
        </Sidebar.MobileFluid>
    </Sidebar>
);
