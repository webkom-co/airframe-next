import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import OuterClick from './../OuterClick';
import { withPageConfig } from './../Layout';

const Sidebar = (props) => {
    const sidebarClass = classNames('sidebar', {
        'sidebar--slim': props.slim || props.pageConfig.sidebarSlim,
        'sidebar--collapsed': props.collapsed || props.pageConfig.sidebarCollapsed,
        'sidebar--animations-disabled': props.animationsDisabled || props.pageConfig.animationsDisabled
    });

    return (
        <React.Fragment>
            { /* Enable OuterClick only in sidebar overlay mode */}
            <OuterClick
                active={
                    !props.pageConfig.sidebarCollapsed && (
                        props.pageConfig.screenSize === 'xs' ||
                        props.pageConfig.screenSize === 'sm' ||
                        props.pageConfig.screenSize === 'md'
                    )
                }
                onClickOutside={ () => props.pageConfig.toggleSidebar() }
            >
                <div className={ sidebarClass }>
                    { props.children }
                </div>
            </OuterClick>
        </React.Fragment>
    );
};
Sidebar.propTypes = {
    children: PropTypes.node,
    slim: PropTypes.bool,
    collapsed: PropTypes.bool,
    animationsDisabled: PropTypes.bool,
    pageConfig: PropTypes.object
};

const cfgSidebar = withPageConfig(Sidebar);

export {
    cfgSidebar as Sidebar
};
