import React from 'react';

import {
    Sidebar,
    SidebarTrigger
} from './../../components';

import { SidebarNavMenu } from './SidebarNavMenu';

import { SidebarTopB } from '../../routes/components/Sidebar/SidebarTopB'
import { SidebarBottomB } from '../../routes/components/Sidebar/SidebarBottomB'

export const SidebarDefault = () => (
    <Sidebar>
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>
        <SidebarTopB />
        <Sidebar.Section fluid cover>
            { /* Sidebar Menu */ }
            <SidebarNavMenu />
        </Sidebar.Section>
        <SidebarBottomB />
    </Sidebar>
);
