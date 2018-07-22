import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = (props) => {
    const avatarClass = classNames(
        'avatar',
        `avatar--${ props.size }`,
        props.className
    );

    return (
        <div className={ avatarClass } style={ props.style }>
            <div className='avatar__content'>
                { props.children }
            </div>
        </div>
    );
};
Avatar.propTypes = {
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
    style: PropTypes.object
};
Avatar.defaultProps = {
    size: "md",
    style: {}
};

export { Avatar };