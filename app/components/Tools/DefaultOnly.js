import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const DefaultOnly = (props) => (
    <React.Fragment>
    {
        typeof props.children === 'string' ?
            <div className="sidebar__hide-slim">
                { props.children }
            </div> :
            React.Children.map(props.children, (child) => 
                React.cloneElement(child, {
                    className: className(child.props.className, 'sidebar__hide-slim')
                })
            )
    }
    </React.Fragment>
);
DefaultOnly.propTypes = {
    children: PropTypes.node.isRequired,
    pageConfig: PropTypes.object
};

export {
    DefaultOnly
};