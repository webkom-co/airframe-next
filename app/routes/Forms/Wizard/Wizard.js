import React from 'react';
import _ from 'lodash';

import {
    Container,
    Wizard,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Button,
    Row,
    Col,
    Table,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    ButtonGroup,
    Label,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
} from './../../../components';

const sequence = ['your-cart', 'shipping', 'payment', 'summary'];

const items = [
    {
        name: 'Incredible Metal Keyboard',
        quantity: 22,
        price: '$578.00'
    },
    {
        name: 'Incredible Soft Cheese',
        quantity: 3,
        price: '$278.00'
    },
    {
        name: 'Handcrafted Granite Sausages',
        quantity: 29,
        price: '$465.00'
    },
    {
        name: 'Awesome Metal Gloves',
        quantity: 15,
        price: '$501.00'
    }
];

const WizardStep1 = () => (
    <Row>
        <Col md={ 6 }>
            <div className='p-3'>
                <h3 className="fw-300">Your Bags are ready to check out!</h3>
                <p>
                    Discover goods you&apos;ll love from brands that inspire.
                    The easiest way to open your own online store.
                    Discover amazing stuff or open your own store for free!
                </p>
                <small className="text-muted">
                    Below is a sample page for your cart , Created using pages design UI Elementes
                </small>
            </div>
        </Col>
        <Col md={ 6 }>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(items, (item, index) => (
                            <tr key={index}>
                                <td>
                                    <i className="fa fa-close text-danger"></i>
                                </td>
                                <td>
                                    { item.name }
                                </td>
                                <td>
                                    { item.quantity }
                                </td>
                                <td>
                                    { item.price }
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={3}></td>
                        <td>
                            <Row tag="dl">
                                <dt className="col-sm-7 text-right">Sub-Total</dt>
                                <dd className="col-sm-5 text-right">$114.00</dd>

                                <dt className="col-sm-7 text-right">VAT</dt>
                                <dd className="col-sm-5 text-right">$876.78</dd>

                                <dt className="col-sm-7 mt-3 text-right h4 mb-0">Total</dt>
                                <dd className="col-sm-5 mt-3 text-right h4 mb-0">$986.78</dd>
                            </Row>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    </Row>
);
const WizardStep2 = () => (
    <Row>
        <Col md={6}>
            <div className='pa-3'>
                <h3 className="fw-300">Your Information is safe with us!</h3>
                <p>
                    We respect your privacy and protect it with strong encryption, plus strict policies.
                    Two-step verification, which we encourage all our customers to use.
                </p>
                <small className="text-muted"> Fields marked as <span className="text-danger">*</span> are required!</small>
            </div>
        </Col>
        <Col md={6}>
            <Form>
                <h5>Name and Email Address</h5>
                <Row className='mt-2'>
                    <Col sm={6}>
                        <FormGroup>
                            <Label>
                                First Name <span className="text-danger">*</span>
                            </Label>
                            <Input placeholder='First Name...'/>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label>
                                Last Name <span className="text-danger">*</span>
                            </Label>
                            <Input placeholder='Last Name...'/>
                        </FormGroup>
                    </Col>
                    <Col sm={12}>
                        <FormGroup>
                            <Label>
                                Email <span className="text-danger">*</span>
                            </Label>
                            <Input placeholder='Email address...'/>
                        </FormGroup>
                    </Col>
                </Row>

                <h5>Billing Address</h5>
                <Row className='mt-2'>
                    <Col sm={12}>
                        <FormGroup>
                            <Label>
                                Address <span className="text-danger">*</span>
                            </Label>
                            <Input placeholder='Current address...'/>
                        </FormGroup>
                    </Col>

                    <Col sm={3}>
                        <FormGroup>
                            <Label>
                                Country <span className="text-danger">*</span>
                            </Label>
                            <UncontrolledDropdown className="d-block">
                                <DropdownToggle>
                                    PL (+48) <i className="fa fa-fw fa-angle-down"></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem active>PL (+48)</DropdownItem>
                                    <DropdownItem>UK (+44)</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </FormGroup>
                    </Col>
                    <Col sm={9}>
                        <FormGroup>
                            <Label>
                                City <span className="text-danger">*</span>
                            </Label>
                            <Input placeholder='Enter City...'/>
                        </FormGroup>
                    </Col>

                    <Col sm={9}>
                        <FormGroup>
                            <Label>
                                State/Province <span className="text-danger">*</span>
                            </Label>
                            <Input placeholder='Outside US/Canada...'/>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>
                                ZIP Code <span className="text-danger">*</span>
                            </Label>
                            <Input placeholder='Email...'/>
                        </FormGroup>
                    </Col>

                    <Col sm={12}>
                        <FormGroup>
                            <Label>
                                Phone Number
                            </Label>
                            <InputGroup>
                                <InputGroupAddon
                                    addonType="prepend"
                                    tag={UncontrolledDropdown}
                                >
                                    <DropdownToggle>
                                        PL (+48) <i className="fa fa-fw fa-angle-down"></i>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem active>PL (+48)</DropdownItem>
                                        <DropdownItem>UK (+44)</DropdownItem>
                                    </DropdownMenu>
                                </InputGroupAddon>
                                <Input type="text" placeholder='For Verification Purpose...' />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </Col>
    </Row>
);
const WizardStep3 = () => (
    <Row>
        <Col md={6}>
            <div className='p-3'>
                <h3 className="fw-300">We Secured Your Line</h3>
                <p>
                    Below is a sample page for your cart , Created using pages design UI Elementes.
                </p>
                <small className="text-muted">Below is a sample page for your cart , Created using pages design UI Elementes</small>

                <Table className='my-2'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _.map(items, (item, index) => (
                                <tr key={index}>
                                    <td>
                                        <i className="fa fa-close text-danger"></i>
                                    </td>
                                    <td>
                                        { item.name }
                                    </td>
                                    <td>
                                        { item.quantity }
                                    </td>
                                    <td>
                                        { item.price }
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={4} className='text-right'>
                                <strong>$986.78</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <small className="text-muted">Invoice are issued on the date of despatch. Payment terms: Pre-orders: within 10 days of invoice date with 4% discount, from the 11th to the 30th day net. Re-orders: non-reduced stock items are payable net after 20 days.</small>
            </div>
        </Col>
        <Col md={6}>
            <ButtonGroup>
                <Button color='link'>
                    Credit Card
                </Button>
                <Button color='link'>
                    PayPal
                </Button>
                <Button color='link'>
                    Skrill
                </Button>
            </ButtonGroup>

            <Card>
                <CardBody>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="fw-300 mt-0">Credit Card</h3>
                        <div>
                            <i className="fa fa-lg fa-cc-visa text-primary mr-1"></i>
                            <i className="fa fa-lg fa-cc-mastercard text-muted mr-1"></i>
                            <i className="fa fa-lg fa-cc-jcb text-muted mr-1"></i>
                        </div>
                    </div>
                    <Form>
                        <FormGroup>
                            <Label>
                                Card Holder&apos;s Name <span className="text-danger">*</span>
                            </Label>
                            <Input placeholder='Name on the card...'/>
                        </FormGroup>

                        <FormGroup>
                            <Label>
                                Card Number <span className="text-danger">*</span>
                            </Label>
                            <Input placeholder='8888-8888-8888-8888'/>
                        </FormGroup>

                        <div className="d-flex justify-content-between align-items-center">
                            <FormGroup>
                                <Label>
                                    Expiriation <span className="text-danger">*</span>
                                </Label>
                                <div className="d-flex">
                                    <UncontrolledDropdown className="d-block">
                                        <DropdownToggle>
                                            Jun (06) <i className="fa fa-fw fa-angle-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem active>Jun (06)</DropdownItem>
                                            <DropdownItem>Jul (07))</DropdownItem>
                                            <DropdownItem>Aug (08)</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    &nbsp;
                                    <UncontrolledDropdown className="d-block">
                                        <DropdownToggle>
                                            2018 <i className="fa fa-fw fa-angle-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem active>2018</DropdownItem>
                                            <DropdownItem>2019</DropdownItem>
                                            <DropdownItem>2020</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </FormGroup>

                            <FormGroup className='text-right'>
                                <Label>
                                    CVC Code <span className="text-danger">*</span>
                                </Label>
                                <Input placeholder='000'/>
                            </FormGroup>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    </Row>
);
const WizardStep4 = () => (
    <Row>
        <Col md={6}>
            <div className='p-3'>
                <h3 className="fw-300">Summary</h3>
                <p>
                    Below is a sample page for your cart , Created using pages design UI Elementes.
                </p>
                <small className="text-muted">Below is a sample page for your cart, Created using pages design UI Elements</small>

                <Table className='my-2'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _.map(items, (item, index) => (
                                <tr key={index}>
                                    <td>
                                        <i className="fa fa-close text-danger"></i>
                                    </td>
                                    <td>
                                        { item.name }
                                    </td>
                                    <td>
                                        { item.quantity }
                                    </td>
                                    <td>
                                        { item.price }
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={4} className='text-right'>
                                <strong>$986.78</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <small className="text-muted">Invoice are issued on the date of despatch. Payment terms: Pre-orders: within 10 days of invoice date with 4% discount, from the 11th to the 30th day net. Re-orders: non-reduced stock items are payable net after 20 days.</small>
            </div>
        </Col>
        <Col md={6}>
            <h5 className="mb-3 mt-2">Name and Email Address</h5>

            <Row tag="dl">
                <dt className="col-sm-4">First Name</dt>
                <dd className="col-sm-8">John</dd>

                <dt className="col-sm-4">Last Name</dt>
                <dd className="col-sm-8">Novoselic</dd>

                <dt className="col-sm-4">Email</dt>
                <dd className="col-sm-8">john@novoselic.com</dd>

                <dt className="col-sm-4"></dt>
                <dd className="col-sm-8">
                    <Button color='link' className="p-0"><i className="fa fa-angle-left mr-1"></i> Change</Button>
                </dd>
            </Row>

            <h5 className="my-3">Billing Address</h5>

            <Row tag="dl">
                <dt className="col-sm-4">Address</dt>
                <dd className="col-sm-8">65575 Wintheiser Skyway Einar Pike</dd>

                <dt className="col-sm-4">Country</dt>
                <dd className="col-sm-8">United Kingdom</dd>

                <dt className="col-sm-4">City</dt>
                <dd className="col-sm-8">London</dd>

                <dt className="col-sm-4">State/Province</dt>
                <dd className="col-sm-8">Greater London</dd>

                <dt className="col-sm-4">ZIP Code</dt>
                <dd className="col-sm-8">151</dd>

                <dt className="col-sm-4">Phone</dt>
                <dd className="col-sm-8">+48 383-747-234</dd>

                <dt className="col-sm-4"></dt>
                <dd className="col-sm-8">
                    <Button color='link' className="p-0"><i className="fa fa-angle-left m-r-1"></i> Change</Button>
                </dd>
            </Row>

            <h5 className="my-3">Credit Card</h5>

            <Row tag="dl">
                <dt className="col-sm-4">Card Name</dt>
                <dd className="col-sm-8"><i className="fa fa-cc-visa text-primary"></i> Visa </dd>

                <dt className="col-sm-4">Card Number</dt>
                <dd className="col-sm-8">**** **** **** 6765</dd>

                <dt className="col-sm-4"></dt>
                <dd className="col-sm-8">
                    <Button color='link' className="p-0"><i className="fa fa-angle-left m-r-1"></i> Change</Button>
                </dd>
            </Row>
        </Col>
    </Row>
);

export class WizardExample extends React.Component {
    state = {
        currentStep: _.first(sequence)
    }

    render() {
        const { currentStep } = this.state;

        return (
            <Container>
                <Card>
                    <CardHeader>
                        <Wizard
                            activeStep={ currentStep }
                            onStepChanged={ this._changeStep }
                        >
                            <Wizard.Step
                                id={ sequence[0] }
                                icon={ <i className="fa fa-shopping-basket fa-fw"></i> }
                                complete={ this._isComplete(sequence[0]) }
                            >
                                Your Cart
                            </Wizard.Step>
                            <Wizard.Step
                                id={ sequence[1] }
                                icon={ <i className="fa fa-cube fa-fw"></i> }
                                complete={ this._isComplete(sequence[1]) }
                            >
                                Shipping
                            </Wizard.Step>
                            <Wizard.Step
                                id={ sequence[2] }
                                icon={ <i className="fa fa-credit-card fa-fw"></i> }
                                complete={ this._isComplete(sequence[2]) }
                            >
                                Payment
                            </Wizard.Step>
                            <Wizard.Step
                                id={ sequence[3] }
                                icon={ <i className="fa fa-navicon fa-fw"></i> }
                                complete={ this._isComplete(sequence[3]) }
                            >
                                Summary
                            </Wizard.Step>
                        </Wizard>
                    </CardHeader>

                    <CardBody>
                    {
                        (() => {
                            switch(this.state.currentStep) {
                                case sequence[0]:
                                    return <WizardStep1 />
                                case sequence[1]:
                                    return <WizardStep2 />
                                case sequence[2]:
                                    return <WizardStep3 />
                                case sequence[3]:
                                    return <WizardStep4 />
                            }
                        })()
                    }
                    </CardBody>

                    <CardFooter>
                    {
                        currentStep !== sequence[0] && (
                            <Button onClick={() => {this._prevStep()}} outline className='mr-3'>
                                <i className='fa fa-angle-left mr-1'></i>
                                Previous
                            </Button>
                        )
                    }
                    {
                        currentStep !== sequence[sequence.length - 1] && (
                            <Button color='primary' onClick={() => {this._nextStep()}}>
                                Next
                                <i className='fa fa-angle-right ml-1'></i>
                            </Button>
                        )
                    }
                    </CardFooter>
                </Card>
            </Container>
        );
    }

    _changeStep = (stepId) => {
        this.setState({
            currentStep: stepId
        });
    }

    _prevStep = () => {
        const index = sequence.indexOf(this.state.currentStep);
        this.setState({
            currentStep: sequence[index - 1]
        });
    }

    _nextStep = () => {
        const index = sequence.indexOf(this.state.currentStep);
        this.setState({
            currentStep: sequence[index + 1]
        });
    }

    _isComplete = (stepId) =>
        sequence.indexOf(stepId) < sequence.indexOf(this.state.currentStep)
}
