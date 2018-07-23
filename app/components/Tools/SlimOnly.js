import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const SlimOnly = (props) => (
    <React.Fragment>
    {
        typeof props.children === 'string' ?
            <div className="sidebar__show-slim">
                { props.children }
            </div> :
            React.Children.map(props.children, (child) => 
                React.cloneElement(child, {
                    className: className(child.props.className, 'sidebar__show-slim')
                })
            )
    }
    </React.Fragment>
);
SlimOnly.propTypes = {
    children: PropTypes.node.isRequired,
    pageConfig: PropTypes.object
};

export {
    SlimOnly
};
