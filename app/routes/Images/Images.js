import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardText,
    HolderProvider
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

import colors from './../../colors';

const Images = () => (
    <Container>
        { /* START Header 1 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={4} 
                    title="Images" 
                    subTitle="Documentation and examples for opting images into responsive behavior."
                />
            </Col>
        </Row>
        { /* END Header 1 */}
        { /* START Section 1 */}
        <Row>
            <Col lg={ 12 }>
                <h6 className="">
                    Images: Responsive Images 
                    <small className="text-muted">#1.01</small>
                </h6>
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                    className="mb-3"
                >
                    <CardImg className="img-fluid mb-5" />
                </HolderProvider.Icon>
            </Col>
        </Row>
        <Row>
            <Col lg={ 12 } className="mb-5">
                <h6 className="mb-2">
                    Images: Thumbnails
                    <small className="text-muted">#1.02</small>
                </h6>
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                    width={200}
                    height={200}
                >
                    <CardImg 
                        className="img-thumbnail mr-2" 
                    />
                </HolderProvider.Icon>
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                    width={200}
                    height={200}
                >
                    <CardImg 
                        className="img-thumbnail mr-2" 
                    />
                </HolderProvider.Icon>
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                    width={200}
                    height={200}
                >
                    <CardImg 
                        className="img-thumbnail mr-2" 
                    />
                </HolderProvider.Icon>
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                    width={200}
                    height={200}
                >
                    <CardImg 
                        className="img-thumbnail" 
                    />
                </HolderProvider.Icon>
            </Col>
        </Row>
        <Row>
            <Col lg={ 12 }>
                <h6 className="mb-2">
                    Images: Aligning
                    <small className="text-muted">#1.03</small>
                </h6>
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                    width={200}
                    height={200}
                >
                    <CardImg 
                        className="rounded float-left" 
                    />
                </HolderProvider.Icon>
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                    width={200}
                    height={200}
                >
                    <CardImg 
                        className="rounded float-right" 
                    />
                </HolderProvider.Icon>
            </Col>
            <Col lg={ 12 } className="mb-5">
                <HolderProvider.Icon
                    iconChar=""
                    size={ 32 }
                    width={200}
                    height={200}
                >
                    <CardImg 
                        className="rounded mx-auto d-block" 
                    />
                </HolderProvider.Icon>
            </Col>
        </Row>
        <Row>
            <Col lg={ 12 } className="mb-5">
                <h6 className="mb-2">
                    Images: Figures
                    <small className="text-muted">#1.04</small>
                </h6>
                <figure className="figure mr-2">
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                        width={400}
                        height={400}
                    >
                        <CardImg 
                            className="figure-img img-fluid rounded" 
                        />
                    </HolderProvider.Icon>
                    <figcaption className="figure-caption">
                        A caption for the above image.
                    </figcaption>
                </figure>
                <figure className="figure">
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                        width={400}
                        height={400}
                    >
                        <CardImg 
                            className="figure-img img-fluid rounded" 
                        />
                    </HolderProvider.Icon>
                    <figcaption className="figure-caption text-right">
                        A caption for the above image.
                    </figcaption>
                </figure>
            </Col>
        </Row>
        <Row>
            <Col lg={ 12 } className="mb-5">
                <h6 className="mb-2">
                    Images: Styles
                    <small className="text-muted">#1.05</small>
                </h6>
                <figure className="figure mr-2">
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                        width={125}
                        height={125}
                    >
                        <CardImg 
                            className="rounded" 
                        />
                    </HolderProvider.Icon>
                    <figcaption className="figure-caption">
                        <code>.rounded</code>
                    </figcaption>
                </figure>
                <figure className="figure mr-2">
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                        width={125}
                        height={125}
                    >
                        <CardImg 
                            className="rounded-top" 
                        />
                    </HolderProvider.Icon>
                    <figcaption className="figure-caption">
                        <code>.rounded-top</code>
                    </figcaption>
                </figure>
                <figure className="figure mr-2">
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                        width={125}
                        height={125}
                    >
                        <CardImg 
                            className="rounded-right" 
                        />
                    </HolderProvider.Icon>
                    <figcaption className="figure-caption">
                        <code>.rounded-right</code>
                    </figcaption>
                </figure>
                <figure className="figure mr-2">
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                        width={125}
                        height={125}
                    >
                        <CardImg 
                            className="rounded-bottom" 
                        />
                    </HolderProvider.Icon>
                    <figcaption className="figure-caption">
                        <code>.rounded-bottom</code>
                    </figcaption>
                </figure>
                <figure className="figure mr-2">
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                        width={125}
                        height={125}
                    >
                        <CardImg 
                            className="rounded-left" 
                        />
                    </HolderProvider.Icon>
                    <figcaption className="figure-caption">
                        <code>.rounded-left</code>
                    </figcaption>
                </figure>
                <figure className="figure mr-2">
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                        width={125}
                        height={125}
                    >
                        <CardImg 
                            className="rounded-circle" 
                        />
                    </HolderProvider.Icon>
                    <figcaption className="figure-caption">
                        <code>.rounded-circle</code>
                    </figcaption>
                </figure>
            </Col>
        </Row>
        { /* END Section 1 */}

        { /* START Header 2 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={2} 
                    title="Images: Title Options"
                    className="mt-5"
                    subTitle="Documentation and examples for opting images into responsive behavior."
                />
            </Col>
        </Row>
        { /* END Header 2 */}
        { /* START Section 2 */}
        <Row>
            <Col lg={ 4 }>
                <Card>
                    <HolderProvider.Icon
                        iconChar=""
                        size={ 32 }
                    >
                        <CardImg />
                                            <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </HolderProvider.Icon>

                </Card>
            </Col>
            <Col lg={ 4 }>

            </Col>
            <Col lg={ 4 }>

            </Col>
        </Row>
        { /* END Section 2 */}

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
