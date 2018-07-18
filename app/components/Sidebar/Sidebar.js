import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Sidebar = (props) => {
    const sidebarClass = classNames({
        'sidebar--slim': props.slim
    });

    return (
        <div class={ sidebarClass }>
            { props.children }
        </div>
    );
};

Sidebar.propTypes = {
    children: PropTypes.node,
    slim: PropTypes.bool
};

export {
    Sidebar
};
