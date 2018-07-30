import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Progress,
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const Typography = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Colors" 
                        subTitle={(
                            <React.Fragment>
                                Convey meaning through color with a 
                                handful of color utility classes. 
                                Includes support for styling links 
                                with hover states, too.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col4 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Defaults Colors
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Use any of these color variables as they 
                                are or reassign them to more meaningful 
                                variables for your project.
                            </p>
                            <p className="text-secondary">This is an example for 
                                <code className="text-secondary b-1 b-gray-200">
                                    .text-secondary
                                </code>
                            </p>
                            <p className="text-success">
                                This is an example for 
                                <code className="text-success b-1 b-gray-200">
                                    .text-success
                                </code>
                            </p>
                            <p className="text-danger">
                                This is an example for 
                                <code className="text-danger b-1 b-gray-200">
                                    .text-success
                                </code>
                            </p>
                            <p className="text-warning">
                                This is an example for 
                                <code className="text-warning b-1 b-gray-200">
                                    .text-warning
                                </code>
                            </p>
                            <p className="text-info">
                                This is an example for 
                                <code className="text-info b-1 b-gray-200">
                                    .text-info
                                </code>
                            </p>

                            <p className="text-dark">
                                This is an example for 
                                <code className="text-dark b-1 b-gray-200">
                                    .text-dark
                                </code>
                            </p>
                            <p className="text-body">
                                This is an example for 
                                <code className="text-body b-1 b-gray-200">
                                    .text-body
                                </code>
                            </p>
                            <p className="text-muted">
                                This is an example for 
                                <code className="text-muted b-1 b-gray-200">
                                    .text-muted
                                </code>
                            </p>
                            <p className="text-black-50">
                                This is an example for 
                                <code className="text-black-50 b-1 b-gray-200">
                                    .text-black-50
                                </code>
                            </p>
                            <p className="text-white p-2 bg-dark">
                                This is an example for 
                                <code className="text-white b-1 b-gray-600">
                                    .text-white
                                </code>
                            </p>
                            <p className="text-light p-2 bg-dark">
                                This is an example for 
                                <code className="text-light b-1 b-gray-600">
                                    .text-light
                                </code>
                            </p>
                            <p className="text-white-50 p-2 bg-dark">
                                This is an example for 
                                <code className="text-white-50 b-1 b-gray-600">
                                    .text-white-50
                                </code>
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Social Colors
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Colors are often used for social media.
                            </p>
                            <p className="text-facebook">
                                <i className="fa fa-fw fa-facebook mr-1"></i>
                                This is an example for 
                                <code class="text-facebook b-1 b-gray-200">
                                    .text-facebook
                                </code>
                            </p>
                            <p className="text-twitter">
                                <i className="fa fa-fw fa-twitter mr-1"></i>
                                This is an example for 
                                <code class="text-twitter b-1 b-gray-200">
                                    .text-twitter
                                </code>
                            </p>
                            <p className="text-lastfm">
                                <i className="fa fa-fw fa-lastfm mr-1"></i>
                                This is an example for 
                                <code class="text-lastfm b-1 b-gray-200">
                                    .text-lastfm
                                </code>
                            </p>
                            <p className="text-pinterest">
                                <i className="fa fa-fw fa-pinterest mr-1"></i>
                                This is an example for 
                                <code class="text-pinterest b-1 b-gray-200">
                                    .text-pinterest
                                </code>
                            </p>
                            <p className="text-linkedin">
                                <i className="fa fa-fw fa-linkedin mr-1"></i>
                                This is an example for 
                                <code class="text-linkedin b-1 b-gray-200">
                                    .text-linkedin
                                </code>
                            </p>
                            <p className="text-medium">
                                <i className="fa fa-fw fa-medium mr-1"></i>
                                This is an example for 
                                <code class="text-medium b-1 b-gray-200">
                                    .text-medium
                                </code>
                            </p>
                            <p className="text-skype">
                                <i className="fa fa-fw fa-skype mr-1"></i>
                                This is an example for 
                                <code class="text-skype b-1 b-gray-200">
                                    .text-skype
                                </code>
                            </p>
                            <p className="text-foursquare">
                                <i className="fa fa-fw fa-foursquare mr-1"></i>
                                This is an example for 
                                <code class="text-foursquare b-1 b-gray-200">
                                    .text-foursquare
                                </code>
                            </p>
                            <p className="text-android">
                                <i className="fa fa-fw fa-android mr-1"></i>
                                This is an example for 
                                <code class="text-android b-1 b-gray-200">
                                    .text-android
                                </code>
                            </p>
                            <p className="text-spotify">
                                <i className="fa fa-fw fa-spotify mr-1"></i>
                                This is an example for 
                                <code class="text-spotify b-1 b-gray-200">
                                    .text-spotify
                                </code>
                            </p>
                            <p className="text-youtube">
                                <i className="fa fa-fw fa-youtube mr-1"></i>
                                This is an example for 
                                <code class="text-youtube b-1 b-gray-200">
                                    .text-youtube
                                </code>
                            </p>
                            <p className="text-windows">
                                <i className="fa fa-fw fa-windows mr-1"></i>
                                This is an example for 
                                <code class="text-windows b-1 b-gray-200">
                                    .text-windows
                                </code>
                            </p>
                            <p className="text-amazon">
                                <i className="fa fa-fw fa-amazon mr-1"></i>
                                This is an example for 
                                <code class="text-amazon b-1 b-gray-200">
                                    .text-amazon
                                </code>
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 1 */}
                { /* START Col4 2 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Grays
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Grayscale colors provide quick access to 
                                commonly used shades of black while semantic 
                                include various colors assigned to meaningful 
                                contextual values.
                            </p>
                            <p class="text-gray-100 p-2 bg-dark">
                                This is an example for 
                                <code class="text-gray-100 b-1 b-gray-600">
                                    .text-gray-100
                                </code>
                            </p>
                            <p class="text-gray-200 p-2 bg-dark">
                                This is an example for 
                                <code class="text-gray-200 b-1 b-gray-600">
                                    .text-gray-200
                                </code>
                            </p>
                            <p class="text-gray-300 p-2 bg-dark">
                                This is an example for 
                                <code class="text-gray-300 b-1 b-gray-600">
                                    .text-gray-300
                                </code>
                            </p>
                            <p class="text-gray-400 p-2 bg-dark">
                                This is an example for 
                                <code class="text-gray-400 b-1 b-gray-600">
                                    .text-gray-400
                                </code>
                            </p>
                            <p class="text-gray-500 p-2 bg-dark">
                                This is an example for 
                                <code class="text-gray-500 b-1 b-gray-600">
                                    .text-gray-500
                                </code>
                            </p>
                            <p class="text-gray-600 p-2 bg-gray-100">
                                This is an example for 
                                <code class="text-gray-600 b-1 b-gray-200">
                                    .text-gray-600
                                </code>
                            </p>
                            <p class="text-gray-700 p-2 bg-gray-100">
                                This is an example for 
                                <code class="text-gray-700 b-1 b-gray-200">
                                    .text-gray-700
                                </code>
                            </p>
                            <p class="text-gray-800 p-2 bg-gray-100">
                                This is an example for 
                                <code class="text-gray-800 b-1 b-gray-200">
                                    .text-gray-800
                                </code>
                            </p>
                            <p class="text-gray-900 p-2">
                                This is an example for 
                                <code class="text-gray-900 b-1 b-gray-200">
                                    .text-gray-900
                                </code>
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Social Colors
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Colors are often used for social media.
                            </p>
                            <p>
                                This is an example 
                                <a href="#" class="text-primary">
                                    Primary Link
                                </a>
                            </p>
                            <p>
                                This is an example 
                                <a href="#" class="text-secondary">
                                    Secondary Link
                                </a>
                            </p>
                            <p>
                                This is an example 
                                <a href="#" class="text-success">
                                    Success Link
                                </a>
                            </p>
                            <p>
                                This is an example 
                                <a href="#" class="text-danger">
                                    Danger Link
                                </a>
                            </p>
                            <p>
                                This is an example 
                                <a href="#" class="text-warning">
                                    Warning Link
                                </a>
                            </p>
                            <p>
                                This is an example 
                                <a href="#" class="text-info">
                                    Info Link
                                </a>
                            </p>
                            <p>
                                This is an example 
                                <a href="#" class="text-dark">
                                    Dark Link
                                </a>
                            </p>
                            <p>
                                <a href="#" class="text-light bg-dark">
                                    Light Link
                                </a>
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col4 2 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Headings"
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                All HTML headings, <code>&lt;h1&gt;</code> 
                                through <code>&lt;h6&gt;</code>, are available.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header: Light
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Just add class/helper <code>.fw-300</code> to <code>&lt;h1&gt;</code> 
                                - <code>&lt;h6&gt;</code>.
                            </p>
                            <h1 class="mb-2 fw-300">
                                h1. Light Heading
                            </h1>
                            <h2 class="fw-300">
                                h2. Light Heading
                            </h2>
                            <h3 class="fw-300">
                                h3. Light Heading
                            </h3>
                            <h4 class="fw-300">
                                h4. Light Heading
                            </h4>
                            <h5 class="fw-300">
                                h5. Light Heading
                            </h5>
                            <h6 class="fw-300">
                                h6. Light Heading
                            </h6>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header: Displays
                                <span className="small ml-1 text-muted">
                                    #2.05
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Traditional heading elements are designed 
                                to work best in the meat of your page content. 
                                When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.
                            </p>
                            <h1 class="display-1">Display 1</h1>
                            <h1 class="display-2">Display 2</h1>
                            <h1 class="display-3">Display 3</h1>
                            <h1 class="display-4">Display 4</h1>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header: Regular
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                In the case of Regular is from set as default in <code>.scss</code>.
                            </p>
                            <h1 class="mb-0">
                                h1. Regular Heading
                            </h1>
                            <h2>
                                h2. Regular Heading
                            </h2>
                            <h3>
                                h3. Regular Heading
                            </h3>
                            <h4>
                                h4. Regular Heading
                            </h4>
                            <h5>
                                h5. Regular Heading
                            </h5>
                            <h6>
                                h6. Regular Heading
                            </h6>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header: Customizing
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Use the included utility classes to recreate the small secondary 
                                heading text from Bootstrap 4
                            </p>
                            <h1 class="mb-0">
                                h1. Custom 
                                <small class="text-muted">
                                    with Small Text
                                </small>
                            </h1>
                            <h2>
                                h2. Custom
                                <small class="text-muted">
                                    with Small Text
                                </small>
                            </h2>
                            <h3>
                                h3. Custom
                                <small class="text-muted">
                                    with Small Text
                                </small>
                            </h3>
                            <h4>
                                h4. Custom
                                <small class="text-muted">
                                    with Small Text
                                </small>
                            </h4>
                            <h5>
                                h5. Custom
                                <small class="text-muted">
                                    with Small Text
                                </small>
                            </h5>
                            <h6>
                                h6. Custom
                                <small class="text-muted">
                                    with Small Text
                                </small>
                            </h6>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
            { /* END Section 2 */}

        </Container>
    </React.Fragment>
);

export default Typography;