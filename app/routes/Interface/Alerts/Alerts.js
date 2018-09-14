import React from 'react';

import {
    Container,
    Row,
    Alert,
    Col,
    Button,
    Media,
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

const Alerts = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Alerts"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Alerts Default" 
                        subTitle="Provide contextual feedback messages for typical user actions with the handful of 
                        available and flexible alert messages. Alerts don't have default classes, only base and 
                        modifier classes: choose from primary, success, info, warning or danger. Wrap any text 
                        and an optional dismiss button in .alert and one of the five contextual classes 
                        (e.g., .alert-success) for basic alert messages."
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Primary
                             <span className="small ml-1 text-muted">
                                #1.01
                            </span>
                        </h6>
                        <Alert color="primary">
                            <h6 className="mb-1">Morning!</h6>
                            Were glad to see you again and wish you a nice day.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Danger
                             <span className="small ml-1 text-muted">
                                #1.02
                            </span>
                        </h6>
                        <Alert color="danger">
                            <h6 className="mb-1">Oh Snap!</h6>
                            Change a few things up and try submitting again.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Info
                             <span className="small ml-1 text-muted">
                                #1.03
                            </span>
                        </h6>
                        <Alert color="info">
                            <h6 className="mb-1">Heads Up!</h6>
                            This alert needs your attention, but its not super important.
                        </Alert>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Warning
                             <span className="small ml-1 text-muted">
                                #1.04
                            </span>
                        </h6>
                        <Alert color="warning">
                            <h6 className="mb-1">Warning!</h6>
                            Better check yourself, youre not looking too good.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Success
                             <span className="small ml-1 text-muted">
                                #1.05
                            </span>
                        </h6>
                        <Alert color="success">
                            <h6 className="mb-1">Well Done!</h6>
                            You successfully read this important alert message.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Dark
                             <span className="small ml-1 text-muted">
                                #1.06
                            </span>
                        </h6>
                        <Alert color="dark">
                            <h6 className="mb-1">Attention!</h6>
                            This alert needs your attention, but its not important.
                        </Alert> 
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
                        title="Alerts Dismissing"
                        className="mt-5"
                        subTitle="Sing the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:"
                    />
                </Col>
            </Row>
            { /* END Header 2 */}             
            { /* START Section 2 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Dismissing: Primary
                             <span className="small ml-1 text-muted">
                                #2.01
                            </span>
                        </h6>
                        <Alert color="primary">
                            <h6 className="mb-1">Morning!</h6>
                            Were glad to see you again and wish you a nice day.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Dismissing: Danger
                             <span className="small ml-1 text-muted">
                                #2.02
                            </span>
                        </h6>
                        <Alert color="danger">
                            <h6 className="mb-1">Oh Snap!</h6>
                            Change a few things up and try submitting again.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Dismissing: Info
                            <span className="small ml-1 text-muted">
                                #2.03
                            </span>
                        </h6>
                        <Alert color="info">
                            <h6 className="mb-1">Heads Up!</h6>
                            This alert needs your attention, but its not super important.
                        </Alert>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Dismissing: Warning
                             <span className="small ml-1 text-muted">
                                #2.04
                            </span>
                        </h6>
                        <Alert color="warning">
                            <h6 className="mb-1">Warning!</h6>
                            Better check yourself, youre not looking too good.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Dismissing: Success
                             <span className="small ml-1 text-muted">
                                #2.05
                            </span>
                        </h6>
                        <Alert color="success">
                            <h6 className="mb-1">Well Done!</h6>
                            You successfully read this important alert message.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Dismissing: Dark
                             <span className="small ml-1 text-muted">
                                #2.06
                            </span>
                        </h6>
                        <Alert color="dark">
                            <h6 className="mb-1">Attention!</h6>
                            This alert needs your attention, but its not important.
                        </Alert> 
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Alerts Icon Small"
                        className="mt-5"
                        subTitle="Sing the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:"
                    />
                </Col>
            </Row>
            { /* END Header 3 */} 
            { /* START Section 3 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Small: Primary
                            <span className="small ml-1 text-muted">
                                #3.01
                            </span>
                        </h6>
                        <Alert color="primary">
                            <i className="fa fa-play-circle text-primary mr-2"></i>
                            <strong>Morning</strong> Were glad to see you again and wish you a nice day.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Small: Danger
                            <span className="small ml-1 text-muted">
                                #3.02
                            </span>
                        </h6>
                        <Alert color="danger">
                            <i className="fa fa-times-circle text-danger mr-2"></i>
                            <strong>Danger!</strong> Change a few things up and try submitting again.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Small: Info
                            <span className="small ml-1 text-muted">
                                #3.03
                            </span>
                        </h6>
                        <Alert color="info">
                            <i className="fa fa-info-circle text-info mr-2"></i>
                            <strong>Information!</strong> This alert needs your attention, but its not important.
                        </Alert>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Small: Warning
                            <span className="small ml-1 text-muted">
                                #3.04
                            </span>
                        </h6>
                        <Alert color="warning">
                            <i className="fa fa-exclamation-circle text-warning mr-2"></i>
                            <strong>Warning!</strong> This alert needs your attention, but its not important.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Small: Success
                            <span className="small ml-1 text-muted">
                                #3.05
                            </span>
                        </h6>
                        <Alert color="success">
                            <i className="fa fa-check-circle text-success mr-2"></i>
                            <strong>Success!</strong> You successfully read this important alert message.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Small: Dark
                            <span className="small ml-1 text-muted">
                                #3.06
                            </span>
                        </h6>
                        <Alert color="dark">
                            <i className="fa fa-question-circle text-dark mr-2"></i>
                            <strong>Attention!</strong> This alert needs your attention, but it's not important.
                        </Alert> 
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={4} 
                        title="Alerts Icon Big"
                        className="mt-5"
                        subTitle="Sing the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:"
                    />
                </Col>
            </Row>
            { /* END Header 4 */} 
            { /* START Section 4 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Dismissing: Primary
                             <span className="small ml-1 text-muted">
                                #2.01
                            </span>
                        </h6>
                        <Alert color="primary">
                            <Media>
                                <Media left middle className="mr-2">
                                    <i className="fa fa-fw fa-play text-primary fa-2x"></i> 
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Welcome</h6>
                                    We're glad to see you again and wish you a nice day.
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Danger
                            <span className="small ml-1 text-muted">
                                #2.02
                            </span>
                        </h6>
                        <Alert color="danger">
                            <Media>
                                <Media left middle className="mr-2">
                                    <i className="fa fa-fw fa-close text-danger fa-2x"></i> 
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Danger!</h6>
                                    Change a few things up and try submitting.
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Info
                            <span className="small ml-1 text-muted">
                                #2.03
                            </span>
                        </h6>
                        <Alert color="info">
                            <Media>
                                <Media left middle className="mr-2">
                                    <i className="fa fa-fw fa-info text-info fa-2x"></i> 
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Information</h6>
                                    This alert needs your attention, but it's not important.
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Warning
                            <span className="small ml-1 text-muted">
                                #2.04
                            </span>
                        </h6>
                        <Alert color="warning">
                            <Media>
                                <Media left middle className="mr-2">
                                    <i className="fa fa-fw fa-exclamation text-warning fa-2x"></i> 
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Warning!</h6>
                                    Better check yourself, you're not looking too good.
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Success
                            <span className="small ml-1 text-muted">
                                #2.05
                            </span>
                        </h6>
                        <Alert color="success">
                            <Media>
                                <Media left middle className="mr-2">
                                    <i className="fa fa-fw fa-check text-success fa-2x"></i> 
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Success</h6>
                                    You successfully read this important alert message.
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Dark
                            <span className="small ml-1 text-muted">
                                #2.06
                            </span>
                        </h6>
                        <Alert color="dark">
                            <Media>
                                <Media left top className="mr-2">
                                    <i className="fa fa-fw fa-question text-dark fa-2x"></i> 
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Attention</h6>
                                    This alert needs your attention, but its not important.
                                </Media>
                            </Media>
                        </Alert> 
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 4 */}

            { /* START Header 5 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={5} 
                        title="Alerts Big"
                        className="mt-5"
                        subTitle="Sing the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:"
                    />
                </Col>
            </Row>
            { /* END Header 5 */}
            { /* START Section 4 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Dismissing: Primary
                             <span className="small ml-1 text-muted">
                                #5.01
                            </span>
                        </h6>
                        <Alert color="primary">
                            <Media>
                                <Media left middle className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                        <i className="fa fa-caret-right fa-stack-1x text-white"></i>
                                    </span>
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Welcome</h6>
                                    <p className="mb-2">We're glad to see you again and wish you a nice day.</p>
                                    <Button color="primary">I Understand</Button>{' '}
                                    <Button color="primary" outline>Cancel</Button>{' '}
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Danger
                            <span className="small ml-1 text-muted">
                                #5.02
                            </span>
                        </h6>
                        <Alert color="danger">
                            <Media>
                                <Media left middle className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x text-danger"></i>
                                        <i className="fa fa-close fa-stack-1x text-white"></i>
                                    </span>
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Danger!</h6>
                                    <p className="mb-2">Change a few things up and try submitting.</p>
                                    <Button color="danger">I Understand</Button>{' '}
                                    <Button color="danger" outline>Cancel</Button>{' '}
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Info
                            <span className="small ml-1 text-muted">
                                #5.03
                            </span>
                        </h6>
                        <Alert color="info">
                            <Media>
                                <Media left middle className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x text-info"></i>
                                        <i className="fa fa-info fa-stack-1x text-white"></i>
                                    </span> 
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Information</h6>
                                    <p className="mb-2">This alert needs your attention, but it's not important.</p>
                                    <Button color="info">I Understand</Button>{' '}
                                    <Button color="info" outline>Cancel</Button>{' '}                                    
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Warning
                            <span className="small ml-1 text-muted">
                                #5.04
                            </span>
                        </h6>
                        <Alert color="warning">
                            <Media>
                                <Media left middle className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x text-warning"></i>
                                        <i className="fa fa-exclamation fa-stack-1x text-white"></i>
                                    </span> 
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Warning!</h6>
                                    <p className="mb-2">Better check yourself, you're not looking too good.</p>
                                    <Button color="warning">I Understand</Button>{' '}
                                    <Button color="warning" outline>Cancel</Button>{' '}       
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Success
                            <span className="small ml-1 text-muted">
                                #5.05
                            </span>
                        </h6>
                        <Alert color="success">
                            <Media>
                                <Media left middle className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x text-success"></i>
                                        <i className="fa fa-check fa-stack-1x text-white"></i>
                                    </span>
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Success</h6>
                                    <p className="mb-2">You successfully read this important alert message.</p>
                                    <Button color="success">I Understand</Button>{' '}
                                    <Button color="success" outline>Cancel</Button>{' '}       
                                </Media>
                            </Media>
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                            Icon Big: Dark
                            <span className="small ml-1 text-muted">
                                #5.06
                            </span>
                        </h6>
                        <Alert color="dark">
                            <Media>
                                <Media left middle className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x text-dark"></i>
                                        <i className="fa fa-question fa-stack-1x text-white"></i>
                                    </span>
                                </Media>
                                <Media body>
                                    <h6 className="mb-1">Attention</h6>
                                    <p className="mb-2">This alert needs your attention, but its not important.</p>
                                    <Button color="dark">I Understand</Button>{' '}
                                    <Button color="dark" outline>Cancel</Button>{' '}
                                </Media>
                            </Media>
                        </Alert> 
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 4 */}
        </Container>
    </React.Fragment>
);

export default Alerts;