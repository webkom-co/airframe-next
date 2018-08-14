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
import {
    Navbar202
} from "../components/Navbars/Navbar202";


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
                    <h6>
                        Navbar
                        <span className="small text-muted ml-2">
                            #1.01
                        </span>
                    </h6>
                    <Navbar101 />
                </Col>
                { /* END Col12 */}
            </Row>
            { /* END Section 1 */}
            { /* START Section 2 */}
            <Row>
                { /* START Col12 */}
                <Col lg={ 12 }>
                    <h6>
                        Navbar
                        <span className="small text-muted ml-2">
                            #1.02
                        </span>
                    </h6>
                    <Navbar102 />
                    <h6>
                        Navbar
                        <span className="small text-muted ml-2">
                            #1.03
                        </span>
                    </h6>
                    <Navbar103 />
                </Col>
                { /* END Col12 */}
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Navbars Menu" 
                        className="mt-5"
                        subTitle="The following navbars are worth using for the menu. They are usually used as a second navbar."
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                { /* START Col12 */}
                <Col lg={ 12 }>
                    <h6>
                        Navbar
                        <span className="small text-muted ml-2">
                            #2.01
                        </span>
                    </h6>
                    <Navbar104 />
                    <h6 className="mt-4">
                        Navbar
                        <span className="small text-muted ml-2">
                            #2.02
                        </span>
                    </h6>
                    <Navbar202 />
                </Col>
                { /* END Col12 */}
            </Row>
            { /* END Section 3 */}
            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Navbars Combined" 
                        className="mt-5"
                        subTitle="Basic button layout options"
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                { /* START Col12 */}
                <Col lg={ 12 }>
                    <h6>
                        Navbars
                        <span className="small text-muted ml-2">
                            #1.03 (Top) + #2.01 (Bottom)
                        </span>
                    </h6>
                    <Navbar103 />
                    <Navbar104 />

                    <h6 className="mt-4">
                        Navbars
                        <span className="small text-muted ml-2">
                            #1.03 (Top) + #2.02 (Bottom)
                        </span>
                    </h6>
                    <Navbar103 />
                    <Navbar202 />
                </Col>
                { /* END Col12 */}
            </Row>
            { /* END Section 4 */}
        </Container>
    </React.Fragment>
);

export default Navbars;