import React from 'react';

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const cardText = ({ cardNo }) => (
    <CardText>
        <span className="mr-2 text-muted">
            #{ cardNo }
        </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl elit, porta a sapien eget, fringilla sagittis ex.
    </CardText>
);

const cardContent = (title = 'Some Card Title') => (
    <CardBody>
        <CardTitle>
            { title }
        </CardTitle>
        { cardText }
    </CardBody>
);

const Buttons = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Buttons Colors" 
                        subTitle="Available panel styles and colors"
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Primary
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="primary"&gt;Primary&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="primary">Primary Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Secondary
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="secondary"&gt;Secondary&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="secondary">Secondary Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Success
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="success"&gt;Success&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="success">Success Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Warning
                                <span className="small ml-1 text-muted">
                                    #1.04
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="warning"&gt;Warning&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="warning">Warning Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Danger
                                <span className="small ml-1 text-muted">
                                    #1.05
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="danger"&gt;Danger&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="danger">Danger Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Info
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="info"&gt;Info&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="info">Info Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Light
                                <span className="small ml-1 text-muted">
                                    #1.07
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="light"&gt;Light&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="light">Warning Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Dark
                                <span className="small ml-1 text-muted">
                                    #1.08
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="dark"&gt;Dark&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="dark">Dark Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Custom (Purple)
                                <span className="small ml-1 text-muted">
                                    #1.09
                                </span>
                            </CardTitle>
                            <p>
                                Custom color button, example:  
                                <code>
                                    &lt;Button color="purple"&gt;Purple&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="purple">Custom Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Buttons Social Colors" 
                        className="mt-5"
                        subTitle="Often the colors used in applications with social networking sites."
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Facebook
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="facebook"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="facebook">
                                <i className="fa fa-facebook mr-2"></i>
                                Facebook Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Twitter
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="twitter"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="facebook">
                                <i className="fa fa-facebook mr-2"></i>
                                Twitter Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: LastFM
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="lastfm"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="facebook">
                                <i className="fa fa-lastfm mr-2"></i>
                                LastFM Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Pinterest
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="pinterest"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="pinterest">
                                <i className="fa fa-pinterest mr-2"></i>
                                Pinterest Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Linkedin
                                <span className="small ml-1 text-muted">
                                    #2.05
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="linkedin"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="linkedin">
                                <i className="fa fa-linkedin mr-2"></i>
                                Linkedin Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Medium
                                <span className="small ml-1 text-muted">
                                    #2.06
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="medium"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="medium">
                                <i className="fa fa-medium mr-2"></i>
                                Medium Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Android
                                <span className="small ml-1 text-muted">
                                    #2.07
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="android"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="android">
                                <i className="fa fa-android mr-2"></i>
                                Android Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Spotify
                                <span className="small ml-1 text-muted">
                                    #2.08
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="spotify"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="facebook">
                                <i className="fa fa-spotify mr-2"></i>
                                Spotify Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Foursquare
                                <span className="small ml-1 text-muted">
                                    #2.09
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="foursquare"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="pinterest">
                                <i className="fa fa-pinterest mr-2"></i>
                                Foursquare Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Skype
                                <span className="small ml-1 text-muted">
                                    #2.10
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="skype"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="skype">
                                <i className="fa fa-skype mr-2"></i>
                                Skype Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Youtube
                                <span className="small ml-1 text-muted">
                                    #2.11
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="youtube"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="youtube">
                                <i className="fa fa-youtube mr-2"></i>
                                Youtube Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Windows
                                <span className="small ml-1 text-muted">
                                    #2.12
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="windows"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="android">
                                <i className="fa fa-android mr-2"></i>
                                Windows Button</Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Amazon
                                <span className="small ml-1 text-muted">
                                    #2.13
                                </span>
                            </CardTitle>
                            <p>
                                Default button, example:  
                                <code>
                                    &lt;Button color="amazon"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button color="amazon">
                                <i className="fa fa-amazon mr-2"></i>
                                Amazon Button</Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Buttons Layouts" 
                        className="mt-5"
                        subTitle="Media list and media object layouts."
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Outline
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p>
                                Outline button, example:  
                                <code>
                                    &lt;Button outline color="secondary"&gt;...&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button outline color="secondary">
                                Outline Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Outline Left Icon
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            <p>
                                Available in both directions, example:  
                                <code>&lt;Button outline color="secondary"&gt;&lt;i className="fa fa-home mr-2" /&gt;&lt;/Button&gt;{' '}
                                </code>
                            </p>
                            <Button outline color="secondary">
                                <i className="fa fa-home mr-2"></i>
                                With Icon Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Button: Dropdown
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            <p>
                                Default button with dropdown
                            </p>
                            <Button outline color="secondary">
                                <i className="fa fa-home mr-2"></i>
                                With Icon Button
                            </Button>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                   
                </Col>
                <Col lg={ 4 }>

                </Col>
            </Row>
            { /* END Section 3 */}
        </Container>
    </React.Fragment>
);

export default Buttons;