import React from 'react';
import {
    Row,
    Col,
    Container
} from './../../../components';

import {
    Async,
    Creatable,
    Grouped,
    Single,
    Multi,
    MultiSelectTextInput,
    CustomOption,
    CustomMenuList,
    CustomPlaceholder
} from './components';

export const Selects = () => (
    <Container>
        <Row>
            <Col lg={ 12 }>
                <p>
                    <strong>React Select</strong> is a flexible Select Input control for <strong>React</strong> with multiselect, autocomplete and async support.
                </p>
            </Col>
        </Row>
        
        <Row>
            <Col lg={ 4 }>
                <h6 className="mb-2">
                    Single
                </h6>
                <Single />
            </Col>
            <Col lg={ 4 }>
                <h6 className="mb-2">
                    Multi
                </h6>
                <Multi />
            </Col>
            <Col lg={ 4 }>
                <h6 className="mb-2">
                    Grouped
                </h6>
                <Grouped />
            </Col>
        </Row>

        <Row className="mt-2">
            <Col lg={ 4 }>
                <h6 className="mb-2">
                    Custom Option
                </h6>
                <CustomOption />
            </Col>
            <Col lg={ 4 }>
                <h6 className="mb-2">
                    Custom Menu List
                </h6>
                <CustomMenuList />
            </Col>
            <Col lg={ 4 }>
                <h6 className="mb-2">
                    Custom Placeholder
                </h6>
                <CustomPlaceholder />
            </Col>
        </Row>

        <Row className="mt-2">
            <Col lg={ 4 }>
                <h6 className="mb-2">
                    Async + Fetch (GitHub users search)
                </h6>
                <Async />
            </Col>
            <Col lg={ 4 }>
                <h6 className="mb-2">
                    Creatable
                </h6>
                <Creatable />
            </Col>
            <Col lg={ 4 }>
                <h6 className="mb-2">
                    Multi-select text input
                </h6>
                <MultiSelectTextInput />
            </Col>
        </Row>
    </Container>
);
