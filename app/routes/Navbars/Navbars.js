import React from 'react';

import {
    Container,
    Row,
    Col
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";
import {
    Navbar101
} from "../components/Navbars/Navbar101";
import {
    Navbar102
} from "../components/Navbars/Navbar102";
import {
    Navbar103
} from "../components/Navbars/Navbar103";
import {
    Navbar104
} from "../components/Navbars/Navbar104";


const Navbars = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Navbars Default" 
                        subTitle="Basic button layout options"
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col12 */}
                <Col lg={ 12 }>
                    <Navbar101 />
                </Col>
                { /* END Col12 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Navbars Brand" 
                        className="mt-5"
                        subTitle="Basic button layout options"
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                { /* START Col12 */}
                <Col lg={ 12 }>
                    <Navbar102 />
                    <Navbar103 />
                </Col>
                { /* END Col12 */}
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Navbars Menu" 
                        className="mt-5"
                        subTitle="Basic button layout options"
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                { /* START Col12 */}
                <Col lg={ 12 }>
                    <Navbar104 />
                </Col>
                { /* END Col12 */}
            </Row>
            { /* END Section 3 */}
        </Container>
    </React.Fragment>
);

export default Navbars;