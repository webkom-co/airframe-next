import React from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    Button,
    Label,
    EmptyLayout
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const ForgotPassword = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Forgot Password"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3">
                <FormGroup>
                    <Label for="emailAdress">
                        Email Adress or Username
                    </Label>
                    <Input type="email" name="email" id="emailAdress" placeholder="Enter..." />
                    <FormText color="muted">
                        We'll never share your email with anyone else.
                    </FormText>
                </FormGroup>
                <div className="d-flex">
                    <Button color="primary" tag={ Link } to="/" className="align-self-center">
                        Reset Password
                    </Button>
                    <Button color="secondary" outline tag={ Link } to="/" className="align-self-center ml-auto">
                        Back to Home
                    </Button>
                </div>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/pages/login">
                    Login
                </Link>
                <Link to="/pages/register" className="ml-auto">
                    Register
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default ForgotPassword;
