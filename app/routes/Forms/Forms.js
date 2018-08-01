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

const Forms = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Basic Inputs" 
                        subTitle={(
                            <React.Fragment>
                                Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Forms: Inputs
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="input" sm={3}>
                                        Input
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="" 
                                            name="" 
                                            id="input" 
                                            placeholder="" 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPassword" sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="password" 
                                            name="password" 
                                            id="inputPassword" 
                                            placeholder="" 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPasswordPlaceholder" sm={3}>
                                        Input Placeholder
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            id="inputPasswordPlaceholder" 
                                            placeholder="Placeholder..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPasswordReadonly" sm={3}>
                                        Input Readonly
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="" 
                                            name="email" 
                                            id="inputPasswordReadonly" 
                                            placeholder="Readonly Input..." 
                                            readonly
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPasswordDisabled" sm={3}>
                                        Input Disabled
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="" 
                                            name="" 
                                            id="inputPasswordDisabled" 
                                            placeholder="Disabled" 
                                            disabled
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="defaultSelect" sm={3}>
                                        Default Select
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="select" 
                                            name="select" 
                                            id="defaultSelect" 
                                        >
                                            <option value="">Open this Select Menu</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="customSelect" sm={3}>
                                        Custom Select
                                    </Label>
                                    <Col sm={9}>
                                        <CustomInput 
                                            type="select" 
                                            name="customSelect" 
                                            id="customSelect"  
                                        >
                                            <option value="">Open this Select Menu</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="staticText" sm={3}>
                                        Static Text
                                    </Label>
                                    <Col sm={9}>
                                        <Input plaintext>
                                            static@text.com
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="textArea" sm={3}>
                                        Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="textArea" 
                                            placeholder="Enter text..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: Selects
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="multipleSelect" sm={3}>
                                        Multiple Select
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="select" 
                                            name="select" 
                                            id="multipleSelect"
                                            multiple
                                        >
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                            <option>Four</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="multipleSelectDisabled" sm={3}>
                                        Multiple Select Disabled
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="select" 
                                            name="select" 
                                            id="multipleSelectDisabled"
                                            multiple
                                            disabled
                                        >
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                            <option>Four</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: File Inputs
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="fileInput" sm={3}>File Input</Label>
                                    <Col sm={9}>
                                        <Input type="file" name="file" id="fileInput" />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It's a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="fileInputStyle" sm={3}>File Browser</Label>
                                    <Col sm={9}>
                                        <CustomInput type="file" id="fileInputStyle" name="customFile" />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It's a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="fileInputStyleDisabled" sm={3}>File Browser Disabled</Label>
                                    <Col sm={9}>
                                        <CustomInput type="file" id="fileInputStyleDisabled" name="customFile" disabled />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It's a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="fileInputStyle" sm={3}>File Browser Custom Label</Label>
                                    <Col sm={9}>
                                        <CustomInput type="file" id="fileInputStyle" name="customFile" label="Yo, select a file!" />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It's a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: Text Helpers
                                <span className="small ml-1 text-muted">
                                    #1.04
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="inputHelper" sm={3}>
                                        Input Helper
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputHelper" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted">
                                                    Left Text Helper
                                                </FormText>
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputHelper" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted text-center">
                                                    Center Text Helper
                                                </FormText>
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputHelper" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted text-right">
                                                    Right Text Helper
                                                </FormText>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="inputIcon" sm={3}>
                                        Input Icon
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputIcon" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted">
                                                    <i className="fa fa-info-circle mr-2"></i>
                                                    We'll never share your email.
                                                </FormText>
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputIcon" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted text-center">
                                                    <i className="fa fa-info-circle mr-2"></i>
                                                    We'll never share your email.
                                                </FormText>
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputIcon" 
                                                    placeholder="" 
                                                />
                                                <FormText color="muted text-right">
                                                    <i className="fa fa-info-circle mr-2"></i>
                                                    We'll never share your email.
                                                </FormText>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="inputBadge" sm={3}>
                                        Input Badge
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputBadge" 
                                                    placeholder="" 
                                                />
                                                <FormText>
                                                    <Badge color="primary">
                                                        Left Badge Helper
                                                    </Badge>
                                                </FormText>
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputBadge" 
                                                    placeholder="" 
                                                />
                                                <FormText className="text-center">
                                                    <Badge color="success">
                                                        Center Badge Helper
                                                    </Badge>
                                                </FormText>
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="inputBadge" 
                                                    placeholder="" 
                                                />
                                                <FormText className="text-right">
                                                    <Badge color="warning">
                                                        Right Badge Helper
                                                    </Badge>
                                                </FormText>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Input Inline */}
                                <FormGroup row>
                                    <Label for="inputInline" sm={3}>
                                        Input Inline
                                    </Label>
                                    <Col sm={9} inline className="d-flex align-items-center">
                                        <FormGroup check inline>
                                            <Input 
                                                type="text" 
                                                name="" 
                                                id="inputInline" 
                                                placeholder="" 
                                            />
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <FormText className="align-self-center">
                                                Must be 8-20 characters long.
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input Inline */}
                                { /* START Input Inline */}
                                <FormGroup row>
                                    <Label for="inputInlineBadge" sm={3}>
                                        Input Inline Badge
                                    </Label>
                                    <Col sm={9} inline className="d-flex align-items-center">
                                        <FormGroup check inline>
                                            <Input 
                                                type="text" 
                                                name="" 
                                                id="inputInlineBadge" 
                                                placeholder="" 
                                            />
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Badge color="danger">
                                                Must be 8-20 characters long.
                                            </Badge>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input Inline */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: Validations
                                <span className="small ml-1 text-muted">
                                    #1.05
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputWithoutValidation" sm={3}>
                                        Input Without Validation
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="inputWithoutValidation" 
                                            placeholder="" 
                                        />
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputValidation" sm={3}>
                                        Input Validation
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="inputValidation" 
                                            placeholder="" 
                                            valid
                                            value="Mark"
                                        />
                                        <FormFeedback valid>Looks good!</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputValidation" sm={3}>
                                        Input Validation
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="inputValidation" 
                                            placeholder="Username..." 
                                            invalid
                                        />
                                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="selectCustomValidation" sm={3}>
                                        Select Custom Validation
                                    </Label>
                                    <Col sm={9}>
                                        <CustomInput 
                                            type="select" 
                                            name="customSelect" 
                                            id="selectCustomValidation" 
                                            invalid 
                                        >
                                            <option value="">Open this Select Menu</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </CustomInput>
                                        <FormFeedback>Example invalid custom select feedback</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START File Input */}
                                <FormGroup row>
                                    <Label for="fileInputStyleValidation" sm={3}>
                                        File Browser Validation
                                    </Label>
                                    <Col sm={9}>
                                        <CustomInput 
                                            type="file" 
                                            id="fileInputStyleValidation" 
                                            name="customFile" 
                                            invalid
                                        />
                                        <FormFeedback>Example invalid custom file feedback</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </Col>
                                </FormGroup>
                                { /* END File Input */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="validationTooltips" sm={3}>
                                        Validation Tooltips
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="validationTooltips" 
                                                    placeholder="" 
                                                    value="Mark"
                                                    valid
                                                />
                                                <FormFeedback valid tooltip>
                                                    Sweet! that name is available
                                                </FormFeedback>
                                                <FormText>
                                                    Example help text that remains unchanged.
                                                </FormText>
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="validationTooltips" 
                                                    placeholder=""
                                                    invalid
                                                />
                                                <FormFeedback tooltip>
                                                    Oh noes! that name is already taken
                                                </FormFeedback>
                                                <FormText>
                                                    Example help text that remains unchanged.
                                                </FormText>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                            </Form>
                            { /* END Form */}

                            <CardTitle tag="h6" className="mt-5 mb-4">
                                Forms: Sizes
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="largeSize" sm={3} size="lg">
                                       Large Size
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="largeSize" 
                                                    placeholder="Large (lg) Input"
                                                    bsSize="lg" 
                                                />
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="select" 
                                                    name="select" 
                                                    id="largeSize"
                                                    bsSize="lg" 
                                                >
                                                    <option value="">Large (lg) Select</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </Input>
                                            </Col>
                                            <Col>
                                                <CustomInput 
                                                    type="select" 
                                                    name="customSelect" 
                                                    id="largeSize"
                                                    bsSize="lg" 
                                                >
                                                    <option value="">Large (lg) Custom</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </CustomInput>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="defaultSize" sm={3}>
                                       Default Size
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="defaultSize" 
                                                    placeholder="Default Input"
                                                />
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="select" 
                                                    name="select" 
                                                    id="defaultSize"
                                                >
                                                    <option value="">Default Select</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </Input>
                                            </Col>
                                            <Col>
                                                <CustomInput 
                                                    type="select" 
                                                    name="customSelect" 
                                                    id="defaultSize"
                                                >
                                                    <option value="">Default Custom</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </CustomInput>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
                                { /* START Inputs */}
                                <FormGroup row>
                                    <Label for="largeSize" sm={3} size="sm">
                                       Small Size
                                    </Label>
                                    <Col sm={9}>
                                        <Row>
                                            <Col>
                                                <Input 
                                                    type="text" 
                                                    name="" 
                                                    id="smSize" 
                                                    placeholder="Small (sm) Input"
                                                    bsSize="sm" 
                                                />
                                            </Col>
                                            <Col>
                                                <Input 
                                                    type="select" 
                                                    name="select" 
                                                    id="smSize"
                                                    bsSize="sm" 
                                                >
                                                    <option value="">Small (sm) Select</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </Input>
                                            </Col>
                                            <Col>
                                                <CustomInput 
                                                    type="select" 
                                                    name="customSelect" 
                                                    id="smSize"
                                                    bsSize="sm" 
                                                >
                                                    <option value="">Small (sm) Custom</option>
                                                    <option>One</option>
                                                    <option>Two</option>
                                                    <option>Three</option>
                                                </CustomInput>
                                            </Col>
                                        </Row>
                                    </Col>
                                </FormGroup>
                                { /* END Inputs */}
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

export default Forms;