import React from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    CustomInput,
    Button,
    Label,
    EmptyLayout
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const Register = () => (
    <EmptyLayout>
        <EmptyLayout.Section center width={ 480 }>
            { /* START Header */}
            <HeaderAuth 
                title="Create Account"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3">
                <FormGroup>
                    <Label for="username">
                        Username
                    </Label>
                    <Input type="text" name="text" id="username" placeholder="Enter a Username..." />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input type="password" name="password" id="password" placeholder="Password..." />
                </FormGroup>
                <FormGroup>
                    <Label for="repeatPassword">
                        Repeat Password
                    </Label>
                    <Input type="password" name="password" id="repeatPassword" placeholder="Password..." />
                </FormGroup>
                <FormGroup>
                    <Label for="emailAdress">
                        Email Adress
                    </Label>
                    <Input type="email" name="email" id="emailAdress" placeholder="Enter email..." />
                    <FormText color="muted">
                        We'll never share your email with anyone else.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <CustomInput type="checkbox" id="acceptTerms" label="Accept Terms and Privacy Policy" inline />
                </FormGroup>
                <Button color="primary" block tag={ Link } to="/">
                    Create Account
                </Button>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/pages/forgot-password">
                    Forgot Password
                </Link>
                <Link to="/pages/login" className="ml-auto">
                    Login
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Register;
