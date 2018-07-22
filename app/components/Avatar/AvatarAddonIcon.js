import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AvatarAddonIcon = (props) => {
    const addOnClass = classNames('avatar__icon', {
        'avatar__icon--small': props.small
    });

    return (
        <div className={ addOnClass }>
            { children }
        </div>
    );
};
AvatarAddonIcon.propTypes = {
    small: PropTypes.bool,
    children: PropTypes.node
};

export { AvatarAddonIcon };