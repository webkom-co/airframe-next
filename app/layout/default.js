import React from 'react';
import PropTypes from 'prop-types';
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';

import {
    Avatar,
    AvatarAddOn,
    Layout,
    Progress,
    Sidebar,
    SidebarMenu,
    SidebarTrigger,
    Tools
} from './../components';

import './../styles/main.scss';
import './../styles/bootstrap/bootstrap.scss';
import './../styles/plugins/plugins.scss';

import avatarImg from './../images/avatars/avatar-1.jpg';

class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        
        return (
            <Layout sidebarSlim>
                { /* --------- Navbar ----------- */ }
                <Layout.Navbar>
                    <Navbar light color="light">
                        <Nav>
                            <NavItem>
                                <SidebarTrigger/>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Layout.Navbar>

                { /* -------- Sidebar ------------*/ }
                <Layout.Sidebar>
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
                            { /* -------- Sidebar Menu ---------*/ }
                            <SidebarMenu>
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-home"></i> }
                                    title="Home"
                                    to='/'
                                />
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-user"></i> }
                                    title="Avatars"
                                    to='/avatars'
                                />
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-clone"></i> }
                                    title="Cards"
                                    to='/cards'
                                />
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-list"></i> }
                                    title="Params"
                                    to='/params'
                                />
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-question"></i> }
                                    title="Help"
                                >
                                    <SidebarMenu.Item title="Tutorial">
                                        <SidebarMenu.Item
                                            title="First Tutorial"
                                            to="/redux-example"
                                            exact
                                        />
                                        <SidebarMenu.Item
                                            title="Second Tutorial"
                                            to="/splitted"
                                        />
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item
                                        title="Training Videos"
                                    />
                                </SidebarMenu.Item>
                            </SidebarMenu>
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
                </Layout.Sidebar>

                { /* -------- Content ------------*/ }
                <Layout.Content>
                    { children }
                </Layout.Content>
            </Layout>
        )        
    }
}

export default AppLayout;
