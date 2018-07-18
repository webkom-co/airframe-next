import React from 'react';
import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { withPageConfig } from './../Layout';

const SidebarTrigger = (props) => {
    const { tag: Tag } = props;
    return (
        <Tag
            onClick={ () => { props.pageConfig.toggleSidebar(); return false; } }
            active={ props.pageConfig.sidebarCollapsed }
        >
            <i className="fa fa-bars fa-fw"></i>
        </Tag>
    )
};
SidebarTrigger.propTypes = {
    tag: PropTypes.any,
    children: PropTypes.node
}
SidebarTrigger.defaultProps = {
    tag: NavLink,
    children: <i className="fa fa-bars fa-fw"></i>
}

const cfgSidebarTrigger = withPageConfig(SidebarTrigger);

export {
    cfgSidebarTrigger as SidebarTrigger
}
