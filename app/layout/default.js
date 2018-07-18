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
    Sidebar,
    SidebarMenu
} from './../components';

import './../styles/main.scss';
import './../styles/bootstrap/bootstrap.scss';
import './../styles/plugins/plugins.scss';

class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        
        return (
            <div className="layout">
                <div className="layout__sidebar">
                    <Sidebar>
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
                </div>

                <div className="layout__wrap">
                    <div className="layout__navbar">
                        <Navbar light color="light">
                            <Nav>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/splitted">Splitted</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/params/0">Params</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/redux-example">Redux Example</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </div>

                    <div className="layout__content">
                        { children }
                    </div>
                </div>
            </div>
        )        
    }
}

export default Layout;
