import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Avatar } from './Avatar';

import avatarColors from './../../colors.scss';
import classes from './AvatarFont.scss';

const AvatarFont = (props) => {
    const {
        children,
        bgColor,
        fgColor,
        bgColorCustom,
        fgColorCustom,
        ...avatarProps
    } = props;
    const parentClass = classNames(classes['avatar-font'],
        classes[`avatar-font--${avatarProps.size}`],
        bgColor && avatarColors[`bg-color--${ bgColor }`]
    );
    const childClass = classNames(classes['avatar-font__text'],
        fgColor && avatarColors[`fg-color--${ fgColor }`]
    );
    const parentCustomStyle = bgColorCustom ? {
        backgroundColor: bgColorCustom
    } : { };
    const childCustomStyle = fgColorCustom ? {
        color: fgColorCustom
    } : { };
    const child = typeof children === 'string' ? 
        <span>
            { children }
        </span> :
        React.Children.only(children);
    return (
        <Avatar { ...avatarProps }>
            <div className={ parentClass } style={parentCustomStyle}>
            {
                React.cloneElement(child, {
                    style: childCustomStyle,
                    className: classNames(child.props.className, childClass)
                })
            }
            </div>
        </Avatar>
    );
};
AvatarFont.propTypes = {
    children: PropTypes.node,
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
    bgColorCustom: PropTypes.string,
    fgColorCustom: PropTypes.string,
    ...Avatar.propTypes
};
AvatarFont.defaultProps = {
    bgColor: '400',
    fgColor: 'white'
};

export { AvatarFont };