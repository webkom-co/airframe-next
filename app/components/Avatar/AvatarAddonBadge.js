import React from 'react';
import PropTypes from 'prop-types';

const AvatarAddonBadge = (props) => (
    <div className={ addOnClass }>
        { children }
    </div>
);
AvatarAddonBadge.propTypes = {
    children: PropTypes.node
};

export { AvatarAddonBadge };