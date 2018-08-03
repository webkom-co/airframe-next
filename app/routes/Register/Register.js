import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import {
    Card,
    CardBody,
    CardFooter,
    EmptyLayout
} from './../../components';

const Register = () => (
    <EmptyLayout>
        <EmptyLayout.Section center width={ 480 }>
            <Card>
                <CardBody>
                    { faker.lorem.paragraph() }
                </CardBody>
                <CardFooter className="d-flex justify-content-between">
                    <Link to="/">Go Back</Link>
                    <Link to="/pages/login">Login</Link>
                </CardFooter>
            </Card>
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Register;
