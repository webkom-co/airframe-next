import React from 'react';

import {
    Sidebar,
    SidebarTrigger,
    Tools,
    Avatar,
    AvatarAddOn,
    Progress
} from './../../components';

import { SidebarNavMenu } from './SidebarNavMenu';

import avatarImg from './../../images/avatars/avatar-1.jpg';

export const SidebarDefault = () => (
    <Sidebar>
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>

        <Sidebar.Section>
            { /* Avatar */ }
            <Tools.SlimProps
                slimProps={{ size: 'md' }}
            >
                <Avatar.Image
                    size="lg"
                    src={ avatarImg }
                    addOns={[
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="success"
                            key="avatar-icon-fg"
                        />
                    ]}
                />
            </Tools.SlimProps>
            { /* User Info (non-slim only) */ }
            <Tools.DefaultOnly>
                <h6 className="mt-2">Craig Marsh</h6>
                <p className="mb-0">International Usability</p>
            </Tools.DefaultOnly>
        </Sidebar.Section>

        <Sidebar.Section fluid cover>
            { /* Sidebar Menu */ }
            <SidebarNavMenu />
        </Sidebar.Section>

        <Sidebar.Section>
            { /* Capacity / Storage (non-slim only) */ }
            <Tools.DefaultOnly>
                <div>
                    <Progress color="primary" slim value={ 40 }/>
                    <div className="d-flex justify-content-between">
                        <span>Capacity</span>
                        <span>40%</span>
                    </div>
                </div>
                <div className="mt-3">
                    <Progress color="warning" slim value={ 60 }/>
                    <div className="d-flex justify-content-between">
                        <span>Storage</span>
                        <span>60%</span>
                    </div>
                </div>
            </Tools.DefaultOnly>
        </Sidebar.Section>
    </Sidebar>
);
