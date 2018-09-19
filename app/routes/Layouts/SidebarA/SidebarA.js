import React from 'react';
import faker from 'faker';

import {
    Container,
    Row,
    Col
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";

export const SidebarA = () => (
    <Container>
        <Row>
            <Col>
                <HeaderMain 
                    title="Sidebar A"
                    className="mb-5 mt-4"
                />

                <h4>Sidebar</h4>
                <p>
                    This sidebar uses <strong>Routes</strong>:
                </p>
                <ul>
                    <li>
                        Main Sidebar: <code>/app/layout/components/<strong>SidebarASidebar</strong></code>
                    </li>
                    <ul>
                        <li>
                            Top Fixed Section: <code>/app/routes/components/Sidebar/<strong>SidebarTopB</strong></code>
                        </li>
                        <li>
                            Middle Section <i>(navigation)</i>: <code>/app/layout/components/<strong>SidebarMiddleNav</strong></code>
                        </li>
                        <li>
                            Bottom Section <i>(footer)</i>: <code>/app/routes/components/Sidebar/<strong>SidebarBottomB</strong></code>
                        </li>
                    </ul>
                </ul>
                <hr/>
                <h6>Sidebar Code Example:</h6>
                <pre>
                    <code>
                    &lt;Sidebar&gt; <br />
                        &nbsp; /* START SIDEBAR-OVERLAY: Close (x) */ <br />
                        &nbsp; &lt;Sidebar.Close&gt;<br />
                        &nbsp; &nbsp; &lt;SidebarTrigger tag={ 'a' } href="javascript:;"&gt;<br />
                        &nbsp; &nbsp; &nbsp; &lt;i className="fa fa-times-circle fa-fw"&gt;&lt;/i&gt;<br />
                        &nbsp; &nbsp; &lt;/SidebarTrigger&gt;<br />
                        &nbsp; &lt;/Sidebar.Close&gt;<br />
                        &nbsp; /* END SIDEBAR-OVERLAY: Close (x) */<br />
                        <br />
                        &nbsp; /* START SIDEBAR: Fixed Section */<br />
                        &nbsp; &lt;Sidebar.Section&gt;<br />
                        &nbsp; &nbsp; <strong>&lt;SidebarTopB /&gt;</strong><br />
                        &nbsp; &lt;/Sidebar.Section&gt;<br />
                        &nbsp; /* END SIDEBAR: Fixed Section */<br />
                        <br />
                        &nbsp; /* START SIDEBAR: Mobile Scroll Wrapper */<br />
                        &nbsp; &lt; Sidebar.MobileFluid&gt;<br />
                        &nbsp; &nbsp; /* START SIDEBAR: Everywhere */<br />
                        &nbsp; &nbsp; &lt; Sidebar.Section fluid cover&gt;<br />
                        &nbsp; &nbsp; /* SIDEBAR: Menu */<br />
                        &nbsp; &nbsp; <strong>&lt;SidebarMiddleNav /&gt;</strong><br />
                        &nbsp; &nbsp; &lt;/Sidebar.Section&gt;<br />
                        &nbsp; &nbsp; /* END SIDEBAR: Everywhere */<br />
                        &nbsp; &nbsp; <strong>&lt;SidebarBottomB /&gt;</strong><br />
                        &nbsp; &lt;/Sidebar.MobileFluid&gt;<br />
                        &nbsp; /* END SIDEBAR: Mobile Scroll Wrapper */<br />
                    &lt;/Sidebar&gt;
                    </code>
                </pre>
                <hr/>
                <h4>Navbar</h4>
                <p>
                    This navbar uses <strong>Routes</strong>:
                </p>
                <ul>
                    <li>
                        Main Navbar: <code>/app/layout/components/<strong>SidebarANavbar</strong></code>
                    </li>
                    <ul>
                        <li>
                            Top Right <i>(icon bell with badge)</i>: <code>/app/layout/components/<strong>NavbarActivityFeed</strong></code>
                        </li>
                        <li>
                            Top Right <i>(icon envelope with badge)</i>: <code>/app/layout/components/<strong>NavbarMessages</strong></code>
                        </li>
                        <li>
                            Top Right <i>(icon power off)</i>: <code>/app/layout/components/<strong>NavbarUser</strong></code>
                        </li>
                    </ul>
                </ul>
                <h6>Navbar Code Example:</h6>
                <pre>
                    <code>
                        &lt;Navbar light color="none" expand="xs"&gt;<br />
                            &nbsp; &lt;Nav navbar&gt;<br />
                            &nbsp; &nbsp; &lt;NavItem className="mr-3"&gt;<br />
                            &nbsp; &nbsp; &nbsp; &lt;SidebarTrigger/&gt;<br />
                            &nbsp; &nbsp; &lt;/NavItem&gt;<br />
                            &nbsp; &lt;/Nav&gt;<br />
                            &nbsp; &lt;Nav navbar className="ml-auto"&gt;<br />
                            &nbsp; &nbsp; &lt;<strong>NavbarActivityFeed</strong> /&gt;<br />
                            &nbsp; &nbsp; &lt;<strong>NavbarMessages</strong> className="ml-2" /&gt;<br />
                            &nbsp; &nbsp; &lt;<strong>NavbarUser</strong> className="ml-2" /&gt;<br />
                            &nbsp; &lt;/Nav&gt;<br />
                        &lt;/Navbar&gt;<br />
                    </code>
                </pre>
            </Col>
        </Row>
    </Container>
);
