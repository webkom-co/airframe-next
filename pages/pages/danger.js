import React from 'react';

import {
    EmptyLayout,
    ThemeConsumer,
    Link
} from './../../components';

import { HeaderAuth } from "../../features/Pages/HeaderAuth";
import { FooterAuth } from "../../features/Pages/FooterAuth";

const Danger = () => (
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
                        <Input type="text" name="text" id="search" placeholder="Enter search phrase here..." className="bg-white" />
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
                <Link to="/" className="ml-auto text-decoration-none">
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

export default Danger;
