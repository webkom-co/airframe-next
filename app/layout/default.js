import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import faker from 'faker';
import { Link } from 'react-router-dom';

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
    NavLink,
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

                                    <ExtendedDropdown.Section className="text-center" tag={ Link} to="/apps/widgets">
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
                                        <Link to="/apps/new-email">
                                            <i className="fa fa-pencil" />
                                        </Link>
                                    </ExtendedDropdown.Section>
                                    <ExtendedDropdown.Section>
                                        <InputGroup>
                                            <Input placeholder="Search Messages..." />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" outline>
                                                    <i className="fa fa-search" />
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </ExtendedDropdown.Section>

                                    <ExtendedDropdown.Section list>
                                        <ListGroup>
                                        {
                                            _.times(3, (index) => (
                                                <ListGroupItem tag={ Link } to="/apps/email-details" key={ index }>
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

                                    <ExtendedDropdown.Section className="text-center" tag={ Link } to="/apps/inbox">
                                        View All
                                        <i className="fa fa-angle-right fa-fw ml-2" />
                                    </ExtendedDropdown.Section>
                                </ExtendedDropdown>
                            </UncontrolledDropdown>

                            <NavItem className="ml-2">
                                <NavLink tag={ Link } to="/pages/login">
                                    <i className="fa fa-power-off"></i>
                                </NavLink>
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
                                    title="Dashboards"
                                >
                                    <SidebarMenu.Item title="Analytics" to='/dashboards/analytics' exact />
                                    <SidebarMenu.Item title="Projects" to='/dashboards/projects' exact />
                                </SidebarMenu.Item>
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-home"></i> }
                                    title="Home"
                                    to='/'
                                />
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-th"></i> }
                                    title="Widgets"
                                    to='/widgets'
                                />
                                { /* -------- Cards ---------*/ }
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-clone"></i> }
                                    title="Cards"
                                >
                                    <SidebarMenu.Item title="Cards" to='/cards/cards' exact />
                                    <SidebarMenu.Item title="Cards Headers" to='/cards/cardsheaders' exact />
                                </SidebarMenu.Item>
                                { /* -------- Interface ---------*/ }
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-toggle-on"></i> }
                                    title="Interface"
                                >
                                    <SidebarMenu.Item title="Colors" to='/interface/colors' />
                                    <SidebarMenu.Item title="Typography" to='/interface/typography' />
                                    <SidebarMenu.Item title="Buttons" to='/interface/buttons' />
                                    <SidebarMenu.Item title="Paginations" to='/interface/paginations' />
                                    <SidebarMenu.Item title="Images" to='/interface/images' />
                                    <SidebarMenu.Item title="Avatars" to='/interface/avatars' />
                                    <SidebarMenu.Item title="Progress Bars" to='/interface/progress-bars' />
                                    <SidebarMenu.Item title="Badges & Labels" to='/interface/badges-and-labels' />
                                    <SidebarMenu.Item title="Media Objects" to='/interface/media-objects' />
                                    <SidebarMenu.Item title="List Groups" to='/interface/list-groups' />
                                    <SidebarMenu.Item title="Alerts" to='/interface/alerts' />
                                    <SidebarMenu.Item title="Accordions" to='/interface/accordions' />
                                    <SidebarMenu.Item title="Tabs Pills" to='/interface/tabs-pills' />
                                    <SidebarMenu.Item title="Tooltips & Popovers" to='/interface/tooltips-and-popovers' />
                                    <SidebarMenu.Item title="Dropdowns" to='/interface/dropdowns' />
                                    <SidebarMenu.Item title="Modals" to='/interface/modals'/>
                                    <SidebarMenu.Item title="Breadcrumbs" to='/interface/breadcrumbs'/>
                                    <SidebarMenu.Item title="Navbars" to='/interface/navbars'/>
                                </SidebarMenu.Item>
                                { /* -------- Graphs ---------*/ }
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-pie-chart"></i> }
                                    title="Graphs"
                                >
                                    <SidebarMenu.Item title="ReCharts" to='/graphs/re-charts' />
                                </SidebarMenu.Item>
                                { /* -------- Forms ---------*/ }
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-check-square-o"></i> }
                                    title="Forms"
                                >
                                    <SidebarMenu.Item title="Forms" to='/forms/forms' />
                                    <SidebarMenu.Item title="Forms Layouts" to='/forms/forms-layouts' />
                                    <SidebarMenu.Item title="Input Groups" to='/forms/input-groups' />
                                </SidebarMenu.Item>
                                { /* -------- Tables ---------*/ }
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-trello"></i> }
                                    title="Tables"
                                >
                                    <SidebarMenu.Item title="Tables" to='/tables/tables' />
                                </SidebarMenu.Item>
                                { /* -------- Apps ---------*/ }
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-mouse-pointer"></i> }
                                    title="Apps"
                                >
                                    <SidebarMenu.Item title="Projects">
                                        <SidebarMenu.Item title="Projects List" to="/apps/projects/list" />
                                        <SidebarMenu.Item title="Projects Grid" to="/apps/projects/grid" />
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item title="Tasks">
                                        <SidebarMenu.Item title="Tasks List" to="/apps/tasks/list" />
                                        <SidebarMenu.Item title="Tasks Grid" to="/apps/tasks/grid" />
                                        <SidebarMenu.Item title="Tasks Kanban" to="/apps/tasks-kanban" />
                                        <SidebarMenu.Item title="Tasks Details" to="/apps/task-details" />
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item title="Files">
                                        <SidebarMenu.Item title="Files List" to="/apps/files/list" />
                                        <SidebarMenu.Item title="Files Grid" to="/apps/files/grid" />
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item title="Search Results">
                                        <SidebarMenu.Item title="Search Results" to="/apps/search-results" />
                                        <SidebarMenu.Item title="Images Results" to="/apps/images-results" />
                                        <SidebarMenu.Item title="Videos Results" to="/apps/videos-results" />
                                        <SidebarMenu.Item title="Users Results" to="/apps/users-results" /> 
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item title="Users">
                                        <SidebarMenu.Item title="Users List" to="/apps/users/list" />
                                        <SidebarMenu.Item title="Users Grid" to="/apps/users/grid" />
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item title="Gallery">
                                        <SidebarMenu.Item title="Gallery Grid" to="/apps/gallery-grid" />
                                        <SidebarMenu.Item title="Gallery Table" to="/apps/gallery-table" />
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item title="Mailbox">
                                        <SidebarMenu.Item title="Inbox" to="/apps/inbox" />
                                        <SidebarMenu.Item title="New Email" to="/apps/new-email" />
                                        <SidebarMenu.Item title="Email Details" to="/apps/email-details" />
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item title="Profile">
                                        <SidebarMenu.Item title="Profile Details" to="/apps/profile-details" />
                                        <SidebarMenu.Item title="Profile Edit" to="/apps/profile-edit" />
                                        <SidebarMenu.Item title="Account Edit" to="/apps/account-edit" />
                                        <SidebarMenu.Item title="Billing Edit" to="/apps/billing-edit" />
                                        <SidebarMenu.Item title="Settings Edit" to="/apps/settings-edit" />
                                        <SidebarMenu.Item title="Sessions Edit" to="/apps/sessions-edit" />
                                    </SidebarMenu.Item>
                                    <SidebarMenu.Item title="Clients" to="/apps/clients" exact />
                                    <SidebarMenu.Item title="Chat" to="/apps/chat" exact />
                                </SidebarMenu.Item>
                                { /* -------- Pages ---------*/ }
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-copy"></i> }
                                    title="Pages"
                                >
                                    <SidebarMenu.Item title="Register" to="/pages/register" />
                                    <SidebarMenu.Item title="Login" to="/pages/login" />
                                    <SidebarMenu.Item title="Forgot Password" to="/pages/forgot-password" />
                                    <SidebarMenu.Item title="Lock Screen" to="/pages/lock-screen" />
                                    <SidebarMenu.Item title="Error 404" to="/pages/error-404" />
                                    <SidebarMenu.Item title="Confirmation" to="/pages/confirmation" />
                                    <SidebarMenu.Item title="Success" to="/pages/success" />
                                    <SidebarMenu.Item title="Danger" to="/pages/danger" />
                                    <SidebarMenu.Item title="Coming Soon" to="/pages/coming-soon" />
                                </SidebarMenu.Item>
                                <SidebarMenu.Item
                                    icon={ <i className="fa fa-fw fa-star-o"></i> }
                                    title="Icons"
                                    to='/icons'
                                />
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
