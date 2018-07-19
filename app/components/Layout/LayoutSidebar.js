import React from 'react';
import PropTypes from 'prop-types';

const LayoutSidebar = (props) => (
    <div className="layout__sidebar">
        { props.children }
    </div>
);

LayoutSidebar.propTypes = {
    children: PropTypes.node
};
LayoutSidebar.layoutPartName = "sidebar";

export {
    LayoutSidebar
};
