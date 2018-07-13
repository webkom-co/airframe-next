import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

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
                    <div className="sidebar">
                        <div className="sidebar__section">
                            Foo
                        </div>
                        <div className="sidebar__section sidebar__section--fluid sidebar__section--cover">
                            <ul className="sidebar-menu">
                                <li className="sidebar-menu__entry">
                                    <a className="sidebar-menu__entry__link" href="javascript:;">
                                        <i className="fa fa-fw fa-home"></i>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="sidebar-menu__entry sidebar-menu__entry--nested open">
                                    <a className="sidebar-menu__entry__link" href="javascript:;">
                                        <i className="fa fa-fw fa-question"></i>
                                        <span>Help</span>
                                    </a>
                                    <ul className="sidebar-submenu">
                                        <li className="sidebar-submenu__entry sidebar-submenu__entry--nested open">
                                            <a className="sidebar-submenu__entry__link" href="javascript:;'">
                                                <span>Tutorial</span>
                                            </a>
                                            <ul className="sidebar-submenu">
                                                <li className="sidebar-submenu__entry">
                                                    <a href="javascript:;" className="sidebar-submenu__entry__link">
                                                        First Tutorial
                                                    </a>
                                                </li>
                                                <li className="sidebar-submenu__entry">
                                                    <a href="javascript:;" className="sidebar-submenu__entry__link">
                                                        Secound Tutorial
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-submenu__entry">
                                            <a className="sidebar-submenu__entry__link" href="javascript:;'">
                                                <span>Training Videos</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar__section">
                            Bar
                        </div>
                    </div>
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
