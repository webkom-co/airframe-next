import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import {
    Layout,
    Sidebar,
    SidebarMenu,
    SidebarTrigger
} from './../components';

import './../styles/main.scss';
import './../styles/bootstrap/bootstrap.scss';
import './../styles/plugins/plugins.scss';

class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        
        return (
            <Layout>
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
                            <SidebarTrigger tag={ <a /> }>
                                <i className="fa fa-close"></i>
                            </SidebarTrigger>
                        </Sidebar.Close>

                        <Sidebar.Section>
                            Foo
                        </Sidebar.Section>

                        <Sidebar.Section fluid cover>
                            <SidebarMenu>
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-home"></i> }
                                    title="Home"
                                    to='/'
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
                            Bar
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
