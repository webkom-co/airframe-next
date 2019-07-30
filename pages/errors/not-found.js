import React from 'react';

import {
    Form,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroup,
    Button,
    Label,
    EmptyLayout,
    Link,
    ThemeConsumer
} from './../../components';

import { HeaderAuth } from "../../features/HeaderAuth";
import { FooterAuth } from "../../features/FooterAuth";

const Error404 = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Error 404"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3">
                <FormGroup>
                    <Label for="search">
                        Search
                    </Label>
                    <InputGroup>
                        <Input type="text" name="text" id="search" placeholder="Enter search phrase here..." />
                        <InputGroupAddon addonType="append">
                            <ThemeConsumer>
                            {
                                ({ color }) => (
                                    <Button color={ color } tag={ Link } to="/">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                )
                            }
                            </ThemeConsumer>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/pages/login">
                    Back to Home
                </Link>
                <Link to="/" className="ml-auto">
                    Support
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Error404;
