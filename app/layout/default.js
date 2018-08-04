import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import faker from 'faker';

import {
    Avatar,
    AvatarAddOn,
    Badge,
    Button,
    ExtendedDropdown,
    UncontrolledDropdown,
    DropdownToggle,
    IconWithBadge,
    Input,
    InputGroup,
    InputGroupAddon,
    Layout,
    ListGroup,
    ListGroupItem,
    Navbar,
    Nav,
    NavItem,
    Media,
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

/*eslint-disable */
const activityFeedIcons = [
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-success"></i>
        <i className="fa fa-check fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-danger"></i>
        <i className="fa fa-close fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-warning"></i>
        <i className="fa fa-exclamation fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-primary"></i>
        <i className="fa fa-info fa-stack-1x fa-fw text-white"></i>
    </span>
];

const messagesColors = [
    "text-success",
    "text-danger",
    "text-warning"
];
/*eslint-enable */

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
                    <Navbar light color="none" expand="xs">
                        <Nav navbar>
                            <NavItem>
                                <SidebarTrigger/>
                            </NavItem>
                        </Nav>
                        <Nav navbar className="ml-auto">
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav>
                                    <IconWithBadge
                                        badge={ <Badge pill color="primary">6</Badge> }
                                    >
                                        <i className="fa fa-bell-o fa-fw" />
                                    </IconWithBadge>
                                </DropdownToggle>
                                <ExtendedDropdown right>
                                    <ExtendedDropdown.Section className="d-flex justify-content-between align-items-center">
                                        <span>Activity Feed</span>
                                        <Badge pill>4</Badge>
                                    </ExtendedDropdown.Section>

                                    <ExtendedDropdown.Section list>
                                        <ListGroup>
                                        {
                                            _.times(4, (index) => (
                                                <ListGroupItem key={ index }>
                                                    <Media>
                                                        <Media left>
                                                            { activityFeedIcons[index] }
                                                        </Media>
                                                        <Media body>
                                                            <span className="h6">
                                                                { faker.name.firstName() } { faker.name.lastName() }
                                                            </span> changed Description to &quot;{ faker.random.words() }&quot;
                                                            <p className="mt-2 mb-1">
                                                                { faker.lorem.sentence() }
                                                            </p>
                                                            <div className="small mt-2">
                                                                { faker.date.past().toString() }
                                                            </div>
                                                        </Media>
                                                    </Media>
                                                </ListGroupItem>
                                            ))
                                        }
                                        </ListGroup>
                                    </ExtendedDropdown.Section>

                                    <ExtendedDropdown.Section className="text-center" tag="a" href="javascript:;">
                                        See All Notifications
                                        <i className="fa fa-angle-right fa-fw ml-2" />
                                    </ExtendedDropdown.Section>
                                </ExtendedDropdown>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar className="ml-2">
                                <DropdownToggle nav>
                                    <IconWithBadge
                                        badge={ <Badge pill color="warning">6</Badge> }
                                    >
                                        <i className="fa fa-envelope-o fa-fw" />
                                    </IconWithBadge>
                                </DropdownToggle>
                                <ExtendedDropdown right>
                                    <ExtendedDropdown.Section className="d-flex justify-content-between align-items-center">
                                        <span>Messages</span>
                                        <a href="javascript:;">
                                            <i className="fa fa-pencil" />
                                        </a>
                                    </ExtendedDropdown.Section>
                                    <ExtendedDropdown.Section>
                                        <InputGroup>
                                            <Input placeholder="Search Messages..." />
                                            <InputGroupAddon addonType="append">
                                                <Button color="white">
                                                    <i className="fa fa-search" />
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </ExtendedDropdown.Section>

                                    <ExtendedDropdown.Section list>
                                        <ListGroup>
                                        {
                                            _.times(3, (index) => (
                                                <ListGroupItem key={ index }>
                                                    <Media>
                                                        <Media left>
                                                            <Avatar.Image
                                                                src={ faker.image.avatar() }
                                                                className='mr-4'
                                                            />
                                                        </Media>
                                                        <Media body>
                                                            <span className="d-flex justify-content-start">
                                                                <i
                                                                    className={`fa fa-circle small ${messagesColors[index]} mr-2 d-flex align-items-center`}
                                                                />
                                                                <span className="h6 pb-0 mb-0 d-flex align-items-center">
                                                                    { faker.name.firstName() } { faker.name.lastName() }
                                                                </span>
                                                                
                                                                <span className="ml-1 small">(23)</span>
                                                                <span className="ml-auto small">Now</span>
                                                            </span>
                                                            <p className="mt-2 mb-1">
                                                                { faker.lorem.sentences() }
                                                            </p>
                                                        </Media>
                                                    </Media>
                                                </ListGroupItem>
                                            ))
                                        }
                                        </ListGroup>
                                    </ExtendedDropdown.Section>

                                    <ExtendedDropdown.Section className="text-center" tag="a" href="javascript:;">
                                        View All
                                        <i className="fa fa-angle-right fa-fw ml-2" />
                                    </ExtendedDropdown.Section>
                                </ExtendedDropdown>
                            </UncontrolledDropdown>
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
                                    icon={ <i className="fa fa-fw fa-list"></i> }
                                    title="Params"
                                    to='/params/0'
                                />
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-clone"></i> }
                                    title="Cards"
                                >
                                    <SidebarMenu.Item
                                        title="Cards"
                                        to='/cards'
                                        exact
                                    />
                                </SidebarMenu.Item>
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-toggle-on"></i> }
                                    title="Interface"
                                >
                                    <SidebarMenu.Item
                                        title="Colors"
                                        to='/colors'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Typography"
                                        to='/typography'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Buttons"
                                        to='/buttons'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Paginations"
                                        to='/Paginations'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Images"
                                        to='/interface/images'
                                    />
                                    <SidebarMenu.Item
                                        title="Avatars"
                                        to='/avatars'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Progress Bars"
                                        to='/progressbars'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Badges & Labels"
                                        to='/badgeslabels'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Media Objects"
                                        to='/mediaobjects'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="List Groups"
                                        to='/listgroups'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Alerts"
                                        to='/alerts'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Accordions"
                                        to='/accordions'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Tabs Pills"
                                        to='/tabspills'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Tooltips & Popovers"
                                        to='/tooltipspopovers'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Dropdowns"
                                        to='/dropdowns'
                                        exact
                                    />
                                </SidebarMenu.Item>
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-check-square-o"></i> }
                                    title="Forms"
                                >
                                    <SidebarMenu.Item
                                        title="Forms"
                                        to='/forms'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Forms Layouts"
                                        to='/formslayouts'
                                        exact
                                    />
                                    <SidebarMenu.Item
                                        title="Input Groups"
                                        to='/inputgroups'
                                        exact
                                    />
                                </SidebarMenu.Item>
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-trello"></i> }
                                    title="Tables"
                                >
                                    <SidebarMenu.Item
                                        title="Tables"
                                        to='/tables'
                                        exact
                                    />
                                </SidebarMenu.Item>
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-mouse-pointer"></i> }
                                    title="Apps"
                                >
                                    <SidebarMenu.Item title="Projects">
                                        <SidebarMenu.Item
                                            title="Projects List"
                                            to="/projects/list"
                                            exact
                                        />
                                        <SidebarMenu.Item
                                            title="Projects Grid"
                                            to="/projects/grid"
                                            exact
                                        />
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item title="Tasks">
                                        <SidebarMenu.Item
                                            title="Tasks List"
                                            to="/tasks/list"
                                            exact
                                        />
                                        <SidebarMenu.Item
                                            title="Tasks Grid"
                                            to="/tasks/grid"
                                            exact
                                        />
                                        <SidebarMenu.Item
                                            title="Tasks Kanban"
                                            to="/taskskanban"
                                            exact
                                        />
                                        <SidebarMenu.Item
                                            title="Tasks Details"
                                            to="/tasksdetails"
                                            exact
                                        />
                                    </SidebarMenu.Item>
                                </SidebarMenu.Item>
                                
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-copy"></i> }
                                    title="Pages"
                                >
                                    <SidebarMenu.Item
                                        title="Register"
                                        to="/pages/register"
                                    />
                                    <SidebarMenu.Item
                                        title="Login"
                                        to="/pages/login"
                                    />
                                    <SidebarMenu.Item
                                        title="Forgot Password"
                                        to="/pages/forgotpassword"
                                    />
                                    <SidebarMenu.Item
                                        title="Lock Screen"
                                        to="/pages/lockscreen"
                                    />
                                    <SidebarMenu.Item
                                        title="Error 404"
                                        to="/pages/error404"
                                    />
                                </SidebarMenu.Item>

                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-question"></i> }
                                    title="Example"
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
