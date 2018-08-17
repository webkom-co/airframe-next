import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const NestedDropdownSubmenu = (props) => {
    const { tag: Tag, subMenuTag: SubMenuTag, title, children, className } = props;
    const itemClass = classNames(className, 'nested-dropdown__submenu-item',
        'dropdown-item');
    
    return (
        <Tag className={ itemClass }>
            <a href="javascript:;" className="nested-dropdown__submenu-item__link">
                { title }
            </a>
            <div className="nested-dropdown__submenu-item__menu-wrap">
                <SubMenuTag className="nested-dropdown__submenu-item__menu dropdown-menu">
                    { children }
                </SubMenuTag>
            </div>
        </Tag>
    );
}
NestedDropdownSubmenu.propTypes = {
    children: PropTypes.node,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    subMenuTag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    className: PropTypes.string
};
NestedDropdownSubmenu.defaultProps = {
    tag: "div",
    subMenuTag: "div"
};
