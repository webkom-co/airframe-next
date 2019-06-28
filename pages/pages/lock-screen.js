import React from 'react';

import {
    Form,
    FormGroup,
    Input,
    Button,
    Label,
    EmptyLayout,
    Link,
    ThemeConsumer
} from './../../components';

import { HeaderAuth } from "../../features/Pages/HeaderAuth";
import { FooterAuth } from "../../features/Pages/FooterAuth";

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
                    <Input type="password" name="password" id="password" placeholder="Enter the password to continue..." className="bg-white" />
                </FormGroup>
                <ThemeConsumer>
                {
                    ({ color }) => (
                        <Button color={ color } block tag={ Link } to="/">
                            Unlock
                        </Button>
                    )
                }
                </ThemeConsumer>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/pages/login" className="text-decoration-none">
                    Sign as Diffrent User
                </Link>
                <Link to="/" className="ml-auto text-decoration-none">
                    <i className="fa fa-angle-left mr-2"></i> Back to Home
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default LockScreen;
