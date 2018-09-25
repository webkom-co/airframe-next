import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";
import { Navbar101 } from "../../components/Navbars/Navbar101";
import { Navbar201 } from "../../components/Navbars/Navbar201";
import { Navbar202 } from "../../components/Navbars/Navbar202";

const Navbars = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Navbars"
                className="mb-5 mt-4"
            />
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
                    <p>This navbar is used as example (example) here as: <Link to="/layouts/navbar-only">Navbar Only</Link></p>
                    <Navbar101 />
                </Col>
                { /* END Col12 */}
            </Row>
            { /* END Section 1 */}

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
                <Col lg={ 12 } className="mb-4">
                    <h6>
                        Navbar
                        <span className="small text-muted ml-2">
                            #2.01
                        </span>
                    </h6>
                    <p>This navbar is used as example (example) here as: <Link to="/layouts/navbar-only">Navbar Only</Link></p>
                    <Navbar201 />
                </Col>
                { /* END Col12 */}
                { /* START Col12 */}
                <Col lg={ 12 }>
                    <h6>
                        Navbar
                        <span className="small text-muted ml-2">
                            #2.02
                        </span>
                    </h6>
                    <p>This navbar is used as example (example) here as: <Link to="/layouts/sidebar-default">Sidebar Default</Link></p>
                    <Navbar202 />
                </Col>
                { /* END Col12 */}
            </Row>
            { /* END Section 3 */}
        </Container>
    </React.Fragment>
);

export default Navbars;