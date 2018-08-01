import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Button, 
    FormFeedback,
    Badge,
    CustomInput,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const FormsLayouts = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Forms Horizontal & Vertical" 
                        subTitle={(
                            <React.Fragment>
                                Create horizontal forms with the grid by adding the 
                                .row class to form groups and using the .col-*-* classes 
                                to specify the width of your labels and controls.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Forms Horizontal: Basic Example
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="input" sm={4}>
                                        Input
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="input" 
                                            placeholder="Enter Name..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPassword" sm={4}>
                                        Password
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="password" 
                                            name="password" 
                                            id="inputPassword" 
                                            placeholder="Password..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Radios */}
                                <FormGroup row>
                                    <Label for="operatingSystem" sm={4} className="pt-0">
                                        Operating System
                                    </Label>
                                    <Col sm={8}>
                                        <Form>
                                            <FormGroup>
                                                <CustomInput 
                                                    type="radio" 
                                                    id="operatingSystem1"
                                                    name="operatingSystem"
                                                    label="OSX" 
                                                    inline
                                                    checked
                                                />
                                                <CustomInput 
                                                    type="radio" 
                                                    id="operatingSystem2" 
                                                    name="operatingSystem"
                                                    label="Windows" 
                                                    inline
                                                />
                                                <CustomInput 
                                                    type="radio" 
                                                    id="operatingSystem3" 
                                                    name="operatingSystem"
                                                    label="Linux" 
                                                    inline
                                                    disabled
                                                />
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </FormGroup>
                                { /* END Radios */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="country" sm={4}>
                                        Country
                                    </Label>
                                    <Col sm={8}>
                                        <CustomInput 
                                            type="select" 
                                            name="customSelect" 
                                            id="country"  
                                        >
                                            <option value="">Select Country...</option>
                                            <option>United States of America (US)</option>
                                            <option>United Kingdom (UK)</option>
                                            <option>Australia</option>
                                            <option>Canada</option>
                                            <option>Other...</option>
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START File Select */}
                                <FormGroup row>
                                    <Label for="addCv" sm={4}>
                                        Add CV
                                    </Label>
                                    <Col sm={8}>
                                        <CustomInput type="file" id="addCv" name="customFile" label="Choose file..." />
                                        <FormText color="muted">
                                            Accepted formats: pdf, doc, txt. Max file size 7Mb
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END File Select */}
                                { /* START Textarea */}
                                <FormGroup row>
                                    <Label for="message" sm={4}>
                                        Message
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="message" 
                                            placeholder="Enter Your Message..." 
                                            className="mb-2"
                                        />
                                        <CustomInput 
                                            type="checkbox" 
                                            id="iConfirm" 
                                            label="I confirm that I have read the Terms." 
                                            className="mb-3"
                                        />
                                        <Button color="primary">Save</Button>
                                    </Col>
                                </FormGroup>
                                { /* END Textarea */}
                            </Form>
                            { /* END Form */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Forms Vertical: Preview Example
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup>
                                    <Label for="input">
                                        Input
                                    </Label>
                                    <Input 
                                        type="text" 
                                        name="" 
                                        id="input" 
                                        placeholder="Enter Name..." 
                                    />
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup>
                                    <Label for="inputPassword">
                                        Password
                                    </Label>
                                    <Input 
                                        type="password" 
                                        name="password" 
                                        id="inputPassword" 
                                        placeholder="Password..." 
                                    />
                                </FormGroup>
                                { /* END Input */}
                                { /* START Radios */}
                                <FormGroup>
                                    <Label for="operatingSystem" className="pt-0">
                                        Operating System
                                    </Label>
                                    <Form>
                                        <FormGroup>
                                            <CustomInput 
                                                type="radio" 
                                                id="operatingSystem1"
                                                name="operatingSystem"
                                                label="OSX" 
                                                inline
                                                checked
                                            />
                                            <CustomInput 
                                                type="radio" 
                                                id="operatingSystem2" 
                                                name="operatingSystem"
                                                label="Windows" 
                                                inline
                                            />
                                            <CustomInput 
                                                type="radio" 
                                                id="operatingSystem3" 
                                                name="operatingSystem"
                                                label="Linux" 
                                                inline
                                                disabled
                                            />
                                        </FormGroup>
                                    </Form>
                                </FormGroup>
                                { /* END Radios */}
                                { /* START Select */}
                                <FormGroup>
                                    <Label for="country">
                                        Country
                                    </Label>
                                    <CustomInput 
                                        type="select" 
                                        name="customSelect" 
                                        id="country"  
                                    >
                                        <option value="">Select Country...</option>
                                        <option>United States of America (US)</option>
                                        <option>United Kingdom (UK)</option>
                                        <option>Australia</option>
                                        <option>Canada</option>
                                        <option>Other...</option>
                                    </CustomInput>
                                </FormGroup>
                                { /* END Select */}
                                { /* START File Select */}
                                <FormGroup>
                                    <Label for="addCv">
                                        Add CV
                                    </Label>
                                    <CustomInput type="file" id="addCv" name="customFile" label="Choose file..." />
                                    <FormText color="muted">
                                        Accepted formats: pdf, doc, txt. Max file size 7Mb
                                    </FormText>
                                </FormGroup>
                                { /* END File Select */}
                                { /* START Textarea */}
                                <FormGroup>
                                    <Label for="message">
                                        Message
                                    </Label>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="message" 
                                            placeholder="Enter Your Message..." 
                                            className="mb-2"
                                        />
                                        <CustomInput 
                                            type="checkbox" 
                                            id="iConfirm" 
                                            label="I confirm that I have read the Terms." 
                                            className="mb-3"
                                        />
                                        <Button color="primary">Save</Button>
                                </FormGroup>
                                { /* END Textarea */}
                            </Form>
                            { /* END Form */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 1 */}
        </Container>
    </React.Fragment>
);

export default FormsLayouts;