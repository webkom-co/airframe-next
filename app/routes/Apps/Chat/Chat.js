import React from 'react';

import { 
    Container,
    Row,
    CardBody,
    Col,
    CardHeader,
    Card,
    CardFooter
} from './../../../components';

import { Chat } from "../../components/Chat/Chat";
import { ChatRight } from "../../components/Chat/ChatRight";
import { ChatLeftNav } from "../../components/Chat/ChatLeftNav";
import { ChatCardFooter } from "../../components/Chat/ChatCardFooter";
import { ChatCardHeader } from "../../components/Chat/ChatCardHeader";

const Clients = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <ChatLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <Card className="mb-3">
                        <CardHeader className="d-flex">
                            <ChatCardHeader />
                        </CardHeader>
                        <CardBody>
                            <Chat />
                            <ChatRight />
                            <Chat />
                            <ChatRight />
                            <div className="small mb-3 mt-4 text-center">
                                Yesterday
                            </div>
                            <Chat />
                            <ChatRight />
                            <Chat />
                        </CardBody>
                        <CardFooter>
                            <ChatCardFooter />
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}

        </Container>
    </React.Fragment>
);

export default Clients;