import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withState, withStateHandlers, compose, withHandlers } from 'recompose';

/**
 * SidebarMenuItemLink - renders a collapse trigger or a ReactRouter Link 
 */
const SidebarMenuItemLink = (props) => (
    props.to ? (
        <Link to={ props.to } className={`${props.classBase}__entry__link`}>
            { props.children }
        </Link>
    ) : (
        <a
            href="javascript:;"
            className={`${props.classBase}__entry__link`}
            onClick={ props.onToggle() }
        >
            { props.children }
        </a>
    )
)
SidebarMenuItemLink.propTypes = {
    to: PropTypes.string,
    active: PropTypes.bool,
    onToggle: PropTypes.func,
    children: PropTypes.node,
    classBase: PropTypes.string
}

/**
 * SidebarMenuItem - the main component determining what needs to be rendered
 */
const SidebarMenuItem = (props) => {
    const classBase = props.isSubNode ? "sidebar-submenu" : "sidebar-menu";
    const itemClass = classNames(`${classBase}__entry`, {
        [`${classBase}__entry--nested`]: !!props.children
    });

    if (props.currentUrl !== props.lastCurrentUrl) {
        props.setActive(props.currentUrl === props.to);
        props.setLastCurrentUrl(props.currentUrl);
    }
    return (
        <li className={ itemClass }>
            <SidebarMenuItemLink
                to={ props.to || null }
                onToggle={ props.onToggle || function() { } }
                classBase={ classBase }
            >
                {
                    props.icon && React.cloneElement(props.icon, {
                        className: classNames(
                            props.icon.props.className,
                            `${classBase}__entry__icon`
                        )
                    })
                }
                {
                    typeof props.title === 'string' ?
                        <span>{ props.title }</span> :
                        props.title
                }
            </SidebarMenuItemLink>
            {
                props.children && (
                    <ul className="sidebar-submenu">
                    {
                        React.Children.map(props.children, (child) =>
                            React.cloneElement(child, { isSubNode: true }))
                    }
                    </ul>
                )
            }
        </li>
    );
}
SidebarMenuItem.propTypes = {
    active: PropTypes.bool,
    onToggle: PropTypes.func,
    children: PropTypes.node,
    isSubNode: PropTypes.bool,
    icon: PropTypes.node,
    title: PropTypes.string,
    currentUrl: PropTypes.string,
    to: PropTypes.string,

    // State Extension
    isOpen: PropTypes.bool,
    isActive: PropTypes.bool,
    lastCurrentUrl: PropTypes.string,
    setActive: PropTypes.func,
    setOpen: PropTypes.func,
    setLastCurrentUrl: PropTypes.func
}

const stateExtender = compose(
    withState('isOpen', 'setOpen', false),
    withState('isActive', 'setActive', false),
    withState('lastCurrentUrl', 'setLastCurrentUrl', ''),
    withHandlers({
        setActive: ({ setActive }) => (active) => { setActive(active) },
        setOpen: ({ setOpen }) => (open) => { setOpen(open) },
        setLastCurrentUrl: ({ setLastCurrentUrl }) => (url) => { setLastCurrentUrl(url) }
    })
);

const extendedSidebarMenuItem = stateExtender(SidebarMenuItem);

export {
    extendedSidebarMenuItem as SidebarMenuItem
};
