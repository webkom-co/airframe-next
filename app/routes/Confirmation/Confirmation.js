import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import {
    Card,
    CardBody,
    CardFooter,
    Form,
    FormGroup,
    FormText,
    Input,
    CustomInput,
    InputGroupAddon,
    InputGroup,
    Button,
    Label,
    EmptyLayout
} from './../../components';

import {
    HeaderAuth
} from "../components/HeaderAuth";

import {
    FooterAuth
} from "../components/FooterAuth";

const Confirmation = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Confirm Your Email Address"
                icon="envelope"
                text={(
                    <React.Fragment>
                        The confirmation mail was sent to 
                        <i>email@example.com</i> Check your mailbox 
                        and hit the <strong>Confirm My Email</strong> 
                        link to confirm your email address.
                    </React.Fragment>
                )}
            />
            { /* END Header */}
            { /* START Bottom Links */}
            <div className="text-center mb-5">
                <a href="/">
                    <i className="fa fa-angle-left mr-2"></i>Back to Home
                </a>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Confirmation;
