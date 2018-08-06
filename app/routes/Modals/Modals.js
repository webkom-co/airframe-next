import React from 'react';
import faker from 'faker';

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    UncontrolledModal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from './../../components'

export const Modals = () => (
    <Container>
        <Row>
            <Col md={ 3 }>
                <Card>
                    <Button id="triggerSomeModal">
                        Test
                    </Button>

                    <UncontrolledModal target="triggerSomeModal">
                        <ModalHeader>Modal Body</ModalHeader>
                        <ModalBody>
                            { faker.lorem.paragraph() }
                        </ModalBody>
                        <ModalFooter>
                            <UncontrolledModal.Close color="secondary">
                                Close
                            </UncontrolledModal.Close>
                        </ModalFooter>
                    </UncontrolledModal>
                </Card>
            </Col>
        </Row>
    </Container>
);