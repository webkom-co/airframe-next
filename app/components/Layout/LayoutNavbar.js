import React from 'react';
import PropTypes from 'prop-types';

const LayoutNavbar = (props) => {
    const navbar = React.Children.only(props.children);

    return (
        <div className="layout__navbar">
        {
            React.cloneElement(navbar, { fixed: false })
        }
        </div>
    );
};

LayoutNavbar.propTypes = {
    children: PropTypes.node
};
LayoutNavbar.layoutPartName = "navbar";

export {
    LayoutNavbar
};
