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

const Login = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Sign In to Application"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3">
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
                    <Label for="password">
                        Password
                    </Label>
                    <Input type="password" name="password" id="password" placeholder="Password..." />
                </FormGroup>
                <FormGroup>
                    <CustomInput type="checkbox" id="rememberPassword" label="Remember Password" inline />
                </FormGroup>
                <Button color="primary" block tag={ Link } to="/">
                    Sign In
                </Button>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/pages/forgotpassword">
                    Forgot Password
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

export default Login;
