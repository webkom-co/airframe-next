import React from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    Input,
    Button,
    Label,
    EmptyLayout
} from './../../components';

import {
    HeaderAuth
} from "../components/Pages/HeaderAuth";

import {
    FooterAuth
} from "../components/Pages/FooterAuth";

const LockScreen = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Your Session is Blocked"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3">
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input type="password" name="password" id="password" placeholder="Enter the password to continue..." />
                </FormGroup>
                <Button color="primary" block href="/">
                    Unlock
                </Button>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <a href="/pages/login">
                    Sign as Diffrent User
                </a>
                <a href="/" className="ml-auto">
                    Back to Home
                </a>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default LockScreen;
