import React from 'react';
import _ from 'lodash';

import {
    InputGroupAddon as BsInputGroupAddon
} from 'reactstrap';

const InputGroupAddon = (props) => {
    const { children, ...otherProps } = props;
    const childArr = React.Children.toArray(children);
    const isFaInside = _.some(childArr, (child) =>
        React.isValidElement(child) && child.props.className && _.includes(child.props.className, 'fa'));

    return (
        <BsInputGroupAddon { ...otherProps }>
            {
                isFaInside ? (
                    <span className="input-group-text">
                        { children }
                    </span>
                ) : children
            }
        </BsInputGroupAddon>
    );
}
InputGroupAddon.propTypes = BsInputGroupAddon.propTypes;
InputGroupAddon.defaultProps = BsInputGroupAddon.defaultProps;

export { InputGroupAddon };
