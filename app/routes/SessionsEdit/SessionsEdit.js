import React from 'react';

import { 
    Container,
    Row,
    Col,
    Table,
    Card,

    CardBody,
    CardTitle
} from './../../components';

import {
    ProfileLeftNav
} from "../components/Profile/ProfileLeftNav";

import {
    ProfileHeader
} from "../components/Profile/ProfileHeader";

import {
    TrResponsive
} from "../components/Tables/TrResponsive";

const BillingEdit = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 12 }>
                   <ProfileHeader />
                </Col>
                <Col lg={ 3 }>
                    <ProfileLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <Card className="mb-3">
                        <CardBody>
                           <CardTitle tag="h6" className="mb-0">
                                Billing History
                           </CardTitle>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Browser & OS</th>
                                    <th>IP</th>
                                    <th>Location</th>
                                    <th>Signed In</th>
                                    <th className="text-right">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrResponsive />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default BillingEdit;