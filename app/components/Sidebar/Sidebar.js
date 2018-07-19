import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

import OuterClick from './../OuterClick';
import { withPageConfig } from './../Layout';

const Sidebar = (props) => {
    const sidebarClass = classNames('sidebar', {
        'sidebar--slim': props.slim,
        'sidebar--collapsed': props.collapsed || props.pageConfig.sidebarCollapsed
    });

    return (
        <React.Fragment>
            { /* Enable OuterClick only in sidebar overlay mode */}
            <MediaQuery maxDeviceWidth={ 767.9 }>
                <OuterClick
                    active={ !props.pageConfig.sidebarCollapsed }
                    onClickOutside={ () => props.pageConfig.toggleSidebar() }
                >
                    <div className={ sidebarClass }>
                        { props.children }
                    </div>
                </OuterClick>
            </MediaQuery>

            { /* Just render the content in non-overlay */ }
            <MediaQuery minDeviceWidth={ 768 }>
                <div className={ sidebarClass }>
                    { props.children }
                </div>
            </MediaQuery>
        </React.Fragment>
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
