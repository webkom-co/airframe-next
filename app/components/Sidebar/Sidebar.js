import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Sidebar = (props) => {
    const sidebarClass = classNames('sidebar', {
        'sidebar--slim': props.slim,
        'sidebar--collapsed': props.collapsed
    });

    return (
        <div class={ sidebarClass }>
            { props.children }
        </div>
    );
};

Sidebar.propTypes = {
    children: PropTypes.node,
    slim: PropTypes.bool,
    collapsed: PropTypes.bool
};

export {
    Sidebar
};
