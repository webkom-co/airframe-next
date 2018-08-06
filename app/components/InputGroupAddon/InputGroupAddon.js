import React from 'react';
import _ from 'lodash';

import {
    InputGroupAddon as BsInputGroupAddon
} from 'reactstrap';

const InputGroupAddon = (props) => {
    const { children, ...otherProps } = props;
    const childArr = React.Children.toArray(children);
    const isFa = _.some(childArr, (child) =>
        React.isValidElement(child) && child.props.className && _.includes(child.props.className, 'fa'));
    const isCheckRadio = _.some(childArr, (child) =>
        React.isValidElement(child) && (child.props.type === 'radio' || child.props.type === 'checkbox'));
    const isCustomCheckRadio = _.some(childArr, (child) => 
        React.isValidElement(child) && (
            _.includes(child.props.className, 'custom-control-input')
        )
    );

    let child = children;
    if (isFa) {
        child = (
            <span className="input-group-text">
                { children }
            </span>
        );
    }
    if (isCheckRadio) {
        child = (
            <div className="input-group-text">
                {
                    React.cloneElement(children, {
                        style: {
                            margin: 0,
                            position: 'static'
                        }
                    })
                }
            </div>
        );
    }
    // TODO: Make custom radios/inputs to work
    if (isCustomCheckRadio) {
        child = (
            <div>
                { children }
            </div>
        )
    }

    return (
        <BsInputGroupAddon { ...otherProps }>
            { child }
        </BsInputGroupAddon>
    );
}
InputGroupAddon.propTypes = BsInputGroupAddon.propTypes;
InputGroupAddon.defaultProps = BsInputGroupAddon.defaultProps;

export { InputGroupAddon };
