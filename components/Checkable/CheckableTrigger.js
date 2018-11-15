import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './context';

const CheckableTrigger = (props) => {
    const { children, tag, className, ...otherProps } = props;
    const Tag = tag;

    return (
        <Consumer>
        {
            (value) => (
                <Tag 
                    { ...otherProps }
                    className={ className }
                    style={{ cursor: 'pointer' }}
                    onClick={ () => { value.toggle() } }
                >
                    { children }
                </Tag>
            )
        }
        </Consumer>
    );
};
CheckableTrigger.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ])
};
CheckableTrigger.defaultProps = {
    tag: "div"
};

export { CheckableTrigger };