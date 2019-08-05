import React from 'react';

import { SidebarMenu, Badge } from './../../../components';

/**
 * Here are the Sidebar Navigation entries.
 * In this starter most of them are missing a "to" property
 * which should normally point to specific routes.
 */
export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Starter"
            to="/"
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-th"></i>}
            title={(
                <React.Fragment>
                    <span>Widgets</span>
                    <Badge color="secondary">New</Badge>
                </React.Fragment>
            )}
        />
        { /* -------- Cards ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-clone"></i>}
            title="Cards"
        >
            <SidebarMenu.Item title="Cards" />
            <SidebarMenu.Item title="Cards Headers" />
        </SidebarMenu.Item>
        { /* -------- Layouts ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Layouts"
        >
            <SidebarMenu.Item title="Navbar" />
            <SidebarMenu.Item title="Sidebar" />
            <SidebarMenu.Item title="Sidebar With Navbar" />
        </SidebarMenu.Item>
        { /* -------- Interface ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-toggle-on"></i>}
            title="Interface"
        >
            <SidebarMenu.Item title="Colors" />
            <SidebarMenu.Item title="Typography" />
            <SidebarMenu.Item title="Buttons" />
            <SidebarMenu.Item title="Paginations" />
            <SidebarMenu.Item title="Images" />
            <SidebarMenu.Item title="Avatars" />
            <SidebarMenu.Item title="Progress Bars" />
            <SidebarMenu.Item title="Badges &amp; Labels" />
            <SidebarMenu.Item title="Media Objects" />
            <SidebarMenu.Item title="List Groups" />
            <SidebarMenu.Item title="Alerts" />
            <SidebarMenu.Item title="Accordions" />
            <SidebarMenu.Item title="Tabs Pills" />
            <SidebarMenu.Item title="Tooltips &amp; Popovers" />
            <SidebarMenu.Item title="Dropdowns" />
            <SidebarMenu.Item title="Modals" />
            <SidebarMenu.Item title="Breadcrumbs" />
            <SidebarMenu.Item title="Navbars" />
            <SidebarMenu.Item title="Notifications" />
            <SidebarMenu.Item title="Crop Image" />
            <SidebarMenu.Item title="Drag &amp; Drop Elements" />
            <SidebarMenu.Item title="Calendar" />
        </SidebarMenu.Item>
        { /* -------- Graphs ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-pie-chart"></i>}
            title="Graphs"
        >
            <SidebarMenu.Item title="ReCharts" />
        </SidebarMenu.Item>
        { /* -------- Forms ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-check-square-o"></i>}
            noCaret
            title={(
                <React.Fragment>
                    <span>Forms</span>
                    <Badge color="theme" pill>34</Badge>
                </React.Fragment>
            )}
        >
            <SidebarMenu.Item title="Forms" />
            <SidebarMenu.Item title="Forms Layouts" />
            <SidebarMenu.Item title="Input Groups" />
            <SidebarMenu.Item title="Wizard" />
            <SidebarMenu.Item title="Text Mask" />
            <SidebarMenu.Item title="Typeahead" />
            <SidebarMenu.Item title="Toggles" />
            <SidebarMenu.Item title="Editor" />
            <SidebarMenu.Item title="Date Picker" />
            <SidebarMenu.Item title="Dropzone" />
            <SidebarMenu.Item title="Sliders" />
        </SidebarMenu.Item>
        { /* -------- Tables ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-trello"></i>}
            title="Tables"
        >
            <SidebarMenu.Item title="Tables" />
            <SidebarMenu.Item title="Extended Tables" />
        </SidebarMenu.Item>
        { /* -------- Apps ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-mouse-pointer"></i>}
            title="Apps"
        >
            <SidebarMenu.Item title="Projects">
                <SidebarMenu.Item title="Projects List" />
                <SidebarMenu.Item title="Projects Grid" />
            </SidebarMenu.Item>
            <SidebarMenu.Item title="Tasks">
                <SidebarMenu.Item title="Tasks List" />
                <SidebarMenu.Item title="Tasks Grid" />
                <SidebarMenu.Item title="Tasks Kanban" />
                <SidebarMenu.Item title="Tasks Details" />
            </SidebarMenu.Item>
            <SidebarMenu.Item title="Files">
                <SidebarMenu.Item title="Files List" />
                <SidebarMenu.Item title="Files Grid" />
            </SidebarMenu.Item>
            <SidebarMenu.Item title="Search Results">
                <SidebarMenu.Item title="Search Results" />
                <SidebarMenu.Item title="Images Results" />
                <SidebarMenu.Item title="Videos Results" />
                <SidebarMenu.Item title="Users Results" />
            </SidebarMenu.Item>
            <SidebarMenu.Item title="Users">
                <SidebarMenu.Item title="Users List" />
                <SidebarMenu.Item title="Users Grid" />
            </SidebarMenu.Item>
            <SidebarMenu.Item title="Gallery">
                <SidebarMenu.Item title="Gallery Grid" />
                <SidebarMenu.Item title="Gallery Table" />
            </SidebarMenu.Item>
            <SidebarMenu.Item title="Mailbox">
                <SidebarMenu.Item title="Inbox" />
                <SidebarMenu.Item title="New Email" />
                <SidebarMenu.Item title="Email Details" />
            </SidebarMenu.Item>
            <SidebarMenu.Item title="Profile">
                <SidebarMenu.Item title="Profile Details" />
                <SidebarMenu.Item title="Profile Edit" />
                <SidebarMenu.Item title="Account Edit" />
                <SidebarMenu.Item title="Billing Edit" />
                <SidebarMenu.Item title="Settings Edit" />
                <SidebarMenu.Item title="Sessions Edit" />
            </SidebarMenu.Item>
            <SidebarMenu.Item title="Clients" exact />
            <SidebarMenu.Item title="Chat" exact />
        </SidebarMenu.Item>
        { /* -------- Pages ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-copy"></i>}
            title="Pages"
        >
            <SidebarMenu.Item title="Register" />
            <SidebarMenu.Item title="Login" />
            <SidebarMenu.Item title="Forgot Password" />
            <SidebarMenu.Item title="Lock Screen" />
            <SidebarMenu.Item title="Error 404" />
            <SidebarMenu.Item title="Confirmation" />
            <SidebarMenu.Item title="Success" />
            <SidebarMenu.Item title="Danger" />
            <SidebarMenu.Item title="Coming Soon" />
            <SidebarMenu.Item title="Timeline" />
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-star-o"></i>}
            title="Icons"
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-bookmark-o"></i>}
            title="Docs"
            to='https://webkom.gitbook.io/spin/v/airframe/airframe-next.js/documentation-next.js'
        />
        { /* -------- Versions ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-folder-open-o"></i>}
            title="Versions"
        >
            <SidebarMenu.Item title="NextJS (React)" href='http://airframe.nextjs.webkom.co/' />
            <SidebarMenu.Item title="React" href='http://dashboards.webkom.co/react/airframe' />
            <SidebarMenu.Item title="jQuery" to="http://dashboards.webkom.co/jquery/airframe/" />
            <SidebarMenu.Item title="Vue" to="http://dashboards.webkom.co/vue/airframe" />
            <SidebarMenu.Item title="Angular" to="http://dashboards.webkom.co/angular/airframe" />
            <SidebarMenu.Item title=".NET MVC" to="http://dashboards.webkom.co/net-mvc/airframe" />
        </SidebarMenu.Item>
    </SidebarMenu >
);
