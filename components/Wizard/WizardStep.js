import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './wizard.scss';

export const WizardStep = props => {
    const stepClass = classNames({
        [classes['wizard-step--active']]: props.active,
        [classes['wizard-step--complete']]: props.complete,
        [classes['wizard-step--disabled']]: props.disabled
    }, classes['wizard-step'], props.className);

    return (
        <a href="javascript:;" className={stepClass} onClick={() => !props.disabled && props.onClick()}>
            <div className={classes['wizard-step__icon']}>
                { !props.complete ? props.icon : props.successIcon }
            </div>
            <div className={classes['wizard-step__content']}>
                { props.children }
            </div>
        </a>
    )
};

WizardStep.defaultProps = {
    successIcon: (<i className='fa fa-check fa-fw'></i>),
    onClick: () => {}
}

WizardStep.propTypes = {
    active: PropTypes.bool,
    complete: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string.required,
    onClick: PropTypes.func.required,
    icon: PropTypes.node,
    successIcon: PropTypes.node,
    children: PropTypes.node
}
