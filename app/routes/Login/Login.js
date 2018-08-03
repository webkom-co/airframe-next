import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import {
    Card,
    CardBody,
    CardFooter,
    EmptyLayout
} from './../../components';

const Login = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            <Card>
                <CardBody>
                    { faker.lorem.paragraph() }
                </CardBody>
            </Card>
            <CardFooter className="d-flex justify-content-between">
                <Link to="/">Go Back</Link>
                <Link to="/pages/register">Register</Link>
            </CardFooter>
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Login;
