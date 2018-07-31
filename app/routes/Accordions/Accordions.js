import React from 'react';
import faker from 'faker';

import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button,
    UncontrolledCollapse
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const Accordions = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Accordions Default" 
                        subTitle="Basic button layout options"
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card with Links
                            <span className="small ml-1 text-muted">
                                #1.01
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion101">Accordion Card #1</a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion101">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion101a">Accordion Card #2</a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion101a">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion101b">Accordion Card #3</a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion101b">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Normal Text 
                            <span className="small ml-1 text-muted">
                                #1.04
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Card className="mb-2">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion104">Accordion Card #1</a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion104">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion104a">Accordion Card #2</a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion104a">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion104b">Accordion Card #3</a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion104b">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Left Icon
                            <span className="small ml-1 text-muted">
                                #1.02
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>, <code>&lt;i className="fa fa-fw fa-plus" /&gt;</code>
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion102">
                                    <i className="fa fa-fw fa-plus mr-2"></i>
                                    Accordion Card #1
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion102">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion102a">
                                    <i className="fa fa-fw fa-plus mr-2"></i>
                                    Accordion Card #2
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion102a">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion102b">
                                    <i className="fa fa-fw fa-plus mr-2"></i>
                                    Accordion Card #3
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion102b">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Right Icon
                            <span className="small ml-1 text-muted">
                                #1.03
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion103" className="d-flex">
                                    <span>Accordion Card #1</span>
                                    <i className="fa fa-fw fa-plus ml-auto"></i>
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion103">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion103a" className="d-flex">
                                    <span>Accordion Card #2</span>
                                    <i className="fa fa-fw fa-plus ml-auto"></i>
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion103a">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion103b" className="d-flex">
                                    <span>Accordion Card #3</span>
                                    <i className="fa fa-fw fa-plus ml-auto"></i>
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion103b">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Right & Left Icon
                            <span className="small ml-1 text-muted">
                                #1.05
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion105" className="d-flex">
                                    <span>
                                        <i className="fa fa-fw fa-bookmark-o mr-2"></i>
                                        Accordion Card #1
                                    </span>
                                    <i className="fa fa-fw fa-plus ml-auto"></i>
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion105">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion105a" className="d-flex">
                                    <span>
                                        <i className="fa fa-fw fa-clone mr-2"></i>
                                        Accordion Card #2
                                    </span>
                                    <i className="fa fa-fw fa-plus ml-auto"></i>
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion105a">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="h6 bg-none bb-0">
                                <a href="" id="accordion105b" className="d-flex">
                                    <span>
                                        <i className="fa fa-fw fa-copy mr-2"></i>
                                        Accordion Card #3
                                    </span>
                                    <i className="fa fa-fw fa-plus ml-auto"></i>
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion105b">
                                <CardBody className="pt-0">
                                  <CardText>
                                      { faker.lorem.paragraph() }
                                  </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Accordions Styling"
                        className="mt-5"
                        subTitle="Basic button layout options"
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Colors Borders
                            <span className="small ml-1 text-muted">
                                #2.01
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Card className="mb-2 b-primary">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion201" className="text-primary">
                                    Primary Card #1
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion201">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion201a" className="text-success">
                                    Success Card #2
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion201a">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion201b" className="text-danger">
                                    Danger Card #3
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion201b">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card Colors Backgrounds
                            <span className="small ml-1 text-muted">
                                #2.02
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Card className="mb-2 bg-primary text-white">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion202" className="text-white">
                                    Primary Card #1
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion202">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2 bg-success text-white">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion202a" className="text-white">
                                    Success Card #2
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion202a">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2 bg-danger text-white">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion202b" className="text-white">
                                    Danger Card #3
                                </a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion202b">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </div>
                    { /* END Example */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            Accordion: Card White Background
                            <span className="small ml-1 text-muted">
                                #2.03
                            </span>
                        </h6>
                        <p>
                            Below is an example of default accordion based on <code>Card</code>, <code>h6</code>,
                            and <code>UncontrolledCollapse</code>.
                        </p>
                        <Card className="mb-2">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion203">Accordion Card #1</a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion203">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion203a">Accordion Card #2</a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion203a">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                        <Card className="mb-2">
                            <CardHeader className="bg-none bb-0">
                                <a href="" id="accordion203b">Accordion Card #3</a>
                            </CardHeader>
                            <UncontrolledCollapse toggler="#accordion203b">
                                <CardBody className="pt-0">
                                    <CardText>
                                        { faker.lorem.paragraph() }
                                    </CardText>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </div>
                    { /* END Example */}
                </Col>
            </Row>
            { /* END Section 2 */}
        </Container>
    </React.Fragment>
);

export default Accordions;