import React from 'react';

import {
    Sidebar,
    SidebarTrigger
} from './../../components';

import { SidebarNavMenu } from './SidebarNavMenu';

import { SidebarTopA } from '../../routes/components/Sidebar/SidebarTopA'
import { SidebarBottomA } from '../../routes/components/Sidebar/SidebarBottomA'

export const SidebarDefault = () => (
    <Sidebar>
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>
        <SidebarTopA />
        <Sidebar.Section fluid cover>
            { /* Sidebar Menu */ }
            <SidebarNavMenu />
        </Sidebar.Section>
        <SidebarBottomA />
    </Sidebar>
);
