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
    Link
} from './../../components';

const ErrorNotFound = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <div className="mb-4">
                <div className="mb-4 text-center">
                    <Link to="/">
                        <i className="fa fa-send fa-3x text-primary"></i>
                    </Link>
                </div>
                <h5 className="text-center mb-4">
                    Error 404
                </h5>
                <p className="text-center">
                    The request page was not found within this App.
                </p>
            </div>
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
                            <Button color="primary" tag={ Link } to="/">
                                <i className="fa fa-search"></i>
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/">
                    Back to Home
                </Link>
                <Link to="/" className="ml-auto">
                    Support
                </Link>
            </div>
            { /* END Bottom Links */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default ErrorNotFound;
