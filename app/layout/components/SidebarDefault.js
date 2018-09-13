import React from 'react';
import { Link } from 'react-router-dom';

import {
    Sidebar,
    SidebarTrigger,
    Tools
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
        
        <Sidebar.Section>
            { /* START Logo */ }
            <Tools.DefaultOnly>
                <Link to="/" className="h4 fw-600 text-primary">
                    react.bs4
                </Link>
            </Tools.DefaultOnly>
            { /* END Logo */ }
        </Sidebar.Section>

        <Sidebar.MobileFluid>
            <SidebarTopA />
            
            <Sidebar.Section fluid cover>
                { /* Sidebar Menu */ }
                <SidebarNavMenu />
            </Sidebar.Section>

            <SidebarBottomA />
        </Sidebar.MobileFluid>
    </Sidebar>
);
