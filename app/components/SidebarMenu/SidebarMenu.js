import React from 'react';
import PropTypes from 'prop-types';

export class SidebarMenu extends React.Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <ul className="sidebar-menu">
                { this.props.children }
            </ul>
        )
    }
}