import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    HolderProvider
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

import colors from './../../colors';

const Images = () => (
    <Container>
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={ 1 } 
                    title="Images" 
                    subTitle="Images in Cards"
                />
            </Col>
        </Row>
        <Row>
            <Col lg={ 4 }>
                <Card>
                    <HolderProvider.Text>
                        <CardImg />
                    </HolderProvider.Text>
                </Card>
            </Col>
            <Col lg={ 4 }>
                <Card>
                    <HolderProvider.Text
                        fg={ colors['success'] }
                        bg={ colors['primary'] }
                    >
                        <img alt="Plain Image" />
                    </HolderProvider.Text>
                </Card>
            </Col>
            <Col lg={ 4 }>
                <Card>
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                    >
                        <CardImg />
                    </HolderProvider.Icon>
                </Card>
            </Col>
        </Row>
    </Container>
);

export { Images };
