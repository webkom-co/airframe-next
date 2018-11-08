import React from 'react';
import faker from 'faker';
import {
    Container,
    Row,
    Table,
    Col
} from './../../components';

import { HeaderMain } from "../../features/HeaderMain";
import { CardSystem } from "../../features/System/CardSystem";
import { TrSystem } from "../../features/System/trSystem";

const TrColors =  [
    {
        fill: "400",
        stroke: "primary"
    },
    {
        fill: "400",
        stroke: "info"
    },
    {
        fill: "400",
        stroke: "purple"
    },
    {
        fill: "400",
        stroke: "secondary"
    }
];

const System = () => (
    <Container>
        <Row className="mb-5">
            <Col lg={ 12 }>
                <HeaderMain 
                    title="System"
                    className="mb-4 mb-lg-5"
                />
            </Col>
            <Col lg={ 3 } md={ 6 }>
               <CardSystem
                    title="Memory"
                    badgeColor="primary"
                    pieColor="primary"
               />
            </Col>
            <Col lg={ 3 } md={ 6 }>
               <CardSystem
                    title="CPU"
                    unit="Mb"
                    badgeColor="info"
                    pieColor="info"
               />
            </Col>
            <Col lg={ 3 } md={ 6 }>
                <CardSystem
                    title="Traffic"
                    unit="Kb"
                    badgeColor="purple"
                    pieColor="purple"
               />
            </Col>
            <Col lg={ 3 } md={ 6 }>
                <CardSystem
                    title="Disk I/O"
                    unit="Kb"
                    pieColor="secondary"
               />
            </Col>
            <Col lg={ 12 }>
                <h6 className="mt-5">Processes</h6>
                <p className="pb-3">
                    { faker.lorem.paragraphs() }
                </p>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Memory</th>
                            <th>CPU</th>
                            <th>Traffic</th>
                            <th>Disk I/O</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TrSystem 
                            colors={TrColors}
                        />
                        <TrSystem 
                            colors={TrColors}
                        />
                        <TrSystem 
                            colors={TrColors}
                        />
                        <TrSystem 
                            colors={TrColors}
                        />
                        <TrSystem 
                            colors={TrColors}
                        />
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
);

export default System;
