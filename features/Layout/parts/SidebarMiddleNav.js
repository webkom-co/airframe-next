import React from 'react';
import PropTypes from 'prop-types';

import { SidebarMenu } from './../../../components';
import isInteractive from './../../../components/IsInteractive';

const SidebarMiddleNav = ({ isInteractive }) => (
    <SidebarMenu disabled={ !isInteractive }>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Home"
            to='/'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-plug"></i>}
            title="Nested Routes"
        >
            <SidebarMenu.Item
                to="/nested-routes/nested-route"
                title="Lazy Loaded"
            />
            <SidebarMenu.Item
                title="Deeply Nested"
            >
                <SidebarMenu.Item
                    to="/nested-routes/deep/deep-nested-route-1"
                    title="First Eager Load"
                />
                <SidebarMenu.Item
                    to="/nested-routes/deep/deep-nested-route-1"
                    title="Second Eager Load"
                />
            </SidebarMenu.Item>
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-bookmark-o"></i>}
            title="Docs"
            href='https://webkom.gitbook.io/spin-next/'
        />
    </SidebarMenu >
);
SidebarMiddleNav.propTypes = {
    isInteractive: PropTypes.bool
};

const SidebarMiddleNavConnected = isInteractive(SidebarMiddleNav);

export { SidebarMiddleNavConnected as SidebarMiddleNav };
