import React from 'react';
import PropTypes from 'prop-types';

const LayoutNavbar = (props) => (
    <div className="layout__navbar">
        { props.children }
    </div>
);

LayoutNavbar.propTypes = {
    children: PropTypes.node
};
LayoutNavbar.layoutPartName = "navbar";

export {
    LayoutNavbar
};
