import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import faker from 'faker';
import _ from 'lodash';

import {
    Button,
    Media,
    FormGroup,
    CustomInput,
    Container
} from './../../../components';

const positions = [
    { label: 'top-left', value: 'top-left' },
    { label: 'top-right', value: 'top-right' },
    { label: 'top-center', value: 'top-center' },
    { label: 'bottom-left', value: 'bottom-left' },
    { label: 'bottom-right', value: 'bottom-right' },
    { label: 'bottom-center', value: 'bottom-center' },
];

const types = [
    { label: 'info', value: 'info' },
    { label: 'success', value: 'success' },
    { label: 'warning', value: 'warning' },
    { label: 'error', value: 'error' },
    { label: 'default', value: 'default' },
];

const initialState = {
    position: 'top-right',
    type: 'default'
}

// ========== Toast Contents: ============
// eslint-disable-next-line react/prop-types
const contentSuccess = ({ closeToast }) => (
    <Media>
        <Media middle left className="mr-3">
            <i className="fa fa-fw fa-2x fa-check"></i>
        </Media>
        <Media body>
            <Media heading tag="h6">
                Success!
            </Media>
            <p>
                You successfully read this important alert message.
            </p>
            <div className="d-flex mt-2">
                <Button color="success" onClick={() => { closeToast }} >
                    I Understand
                </Button>
                <Button color="link" onClick={() => { closeToast }}  className="ml-2 text-success">
                    Cancel
                </Button>
            </div>
        </Media>
    </Media>
);
// eslint-disable-next-line react/prop-types
const contentError = ({ closeToast }) => (
    <Media>
        <Media middle left>
            <i className="fa fa-fw fa-2x fa-times text-white"></i>
        </Media>
        <Media body>
            <Media heading>
                Error Heading
            </Media>
            { faker.lorem.sentence() }
            <div className="d-flex mt-2">
                <Button color="light" outline onClick={() => { closeToast }} size="sm">
                    Dismiss
                </Button>
                <Button color="danger" outline onClick={() => { closeToast }} size="sm" className="ml-2">
                    OK
                </Button>
            </div>
        </Media>
    </Media>
);
// eslint-disable-next-line react/prop-types
const contentInfo = ({ closeToast }) => (
    <Media>
        <Media middle left>
            <i className="fa fa-fw fa-2x fa-info text-white"></i>
        </Media>
        <Media body>
            <Media heading>
                Info Heading
            </Media>
            { faker.lorem.sentence() }
            <div className="d-flex mt-2">
                <Button color="light" outline onClick={() => { closeToast }} size="sm">
                    Dismiss
                </Button>
                <Button color="info" outline onClick={() => { closeToast }} size="sm" className="ml-2">
                    OK
                </Button>
            </div>
        </Media>
    </Media>
);
// eslint-disable-next-line react/prop-types
const contentWarning = ({ closeToast }) => (
    <Media>
        <Media middle left>
            <i className="fa fa-fw fa-2x fa-exclamation text-white"></i>
        </Media>
        <Media body>
            <Media heading>
                Warning Heading
            </Media>
            { faker.lorem.sentence() }
            <div className="d-flex mt-2">
                <Button color="light" outline onClick={() => { closeToast }} size="sm">
                    Dismiss
                </Button>
                <Button color="warning" outline onClick={() => { closeToast }} size="sm" className="ml-2">
                    OK
                </Button>
            </div>
        </Media>
    </Media>
);
// eslint-disable-next-line react/prop-types
const contentDefault = ({ closeToast }) => (
    <Media>
        <Media body>
            <Media heading>
                Default Heading
            </Media>
            { faker.lorem.sentence() }
            <div className="d-flex mt-2">
                <Button outline onClick={() => { closeToast }} size="sm">
                    Dismiss
                </Button>
                <Button outline onClick={() => { closeToast }} size="sm" className="ml-2">
                    OK
                </Button>
            </div>
        </Media>
    </Media>
);

// ========== Component: ============
export class Notifications extends React.Component {
    state = _.clone(initialState);

    render() {
        return (
            <Container>
                <div className="d-flex">
                    <FormGroup>
                    {
                        _.map(positions, (position) => (
                            <CustomInput
                                label={ position.label }
                                checked={ position.value === this.state.position }
                                onChange={ () => { this.setState({position: position.value}) } }
                                type="radio"
                                key={`pos-${position.value}`}
                                id={`pos-${position.value}`}
                            />
                        ))
                    }
                    </FormGroup>
                    
                    <FormGroup className="ml-5">
                    {
                        _.map(types, (type) => (
                            <CustomInput
                                label={ type.label }
                                checked={ type.value === this.state.type }
                                onChange={ () => { this.setState({type: type.value}) } }
                                type="radio"
                                key={`pos-${type.value}`}
                                id={`pos-${type.value}`}
                            />
                        ))
                    }
                    </FormGroup>
                </div>
                <div className="d-flex">
                    <Button size="sm" color="primary" onClick={ this._showHandler }>
                        Show Toast
                    </Button>
                    <Button size="sm" color="danger" onClick={ this._clearHandler } className="ml-2">
                        Clear All
                    </Button>
                    <Button size="sm" color="secondary" onClick={ this._resetHandler } className="ml-2">
                        Reset
                    </Button>
                </div>

                <ToastContainer 
                    autoClose={50000}
                    draggable={false}
                    hideProgressBar={true}
                />
            </Container>
        );
    }

    _showHandler = () => {
        switch(this.state.type) {
            case 'info':
                toast.info(contentInfo);
            break;
            case 'success':
                toast.success(contentSuccess);
            break;
            case 'warning':
                toast.warning(contentWarning);
            break;
            case 'error':
                toast.error(contentError);
            break;
            default:
                toast(contentDefault);
            break;
        }
    }

    _clearHandler = () => {
        toast.dismiss();
    }

    _resetHandler = () => {
        this.setState(initialState);
    }
}
