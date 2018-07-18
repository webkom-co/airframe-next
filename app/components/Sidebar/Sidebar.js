import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withPageConfig } from './../Layout';

const Sidebar = (props) => {
    const sidebarClass = classNames('sidebar', {
        'sidebar--slim': props.slim,
        'sidebar--collapsed': props.collapsed || props.pageConfig.sidebarCollapsed
    });

    return (
        <div className={ sidebarClass }>
            { props.children }
        </div>
    );
};
Sidebar.propTypes = {
    children: PropTypes.node,
    slim: PropTypes.bool,
    collapsed: PropTypes.bool
};

const cfgSidebar = withPageConfig(Sidebar);

export {
    cfgSidebar as Sidebar
};
