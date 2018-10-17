import React from 'react';
import MaskedInput from 'react-text-mask'
import {
    createAutoCorrectedDatePipe,
    createNumberMask,
    emailMask
} from 'text-mask-addons';

import {
    Row,
    Container,
    Col,
    FormGroup,
    Label,
    Input
} from './../../../components';

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy');
const dolarsMask = createNumberMask({ prefix: '$' });
const dolarsMaskDecimal = createNumberMask({ prefix: '$', allowDecimal: true });
const percentageMask = createNumberMask({ prefix: '', suffix: '%', integerLimit: 3 });
const upperCasePipe = conformedValue => conformedValue.toUpperCase();

export const TextMask = () => (
    <Container>
        <Row>
            <Col lg={ 4 }>
                <FormGroup>
                    <Label>US Phone Number</Label>
                    <Input
                        mask={ ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }
                        placeholder='(555) 495-3947'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>
            <Col lg={ 4 }>
                <FormGroup>
                    <Label>US Phone Number With Masked Input</Label>
                    <Input
                        mask={ ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }
                        placeholder='+1 (555) 495-3947'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>
            <Col lg={ 4 }>
                <FormGroup>
                    <Label>Date</Label>
                    <Input
                        mask={ [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] }
                        placeholder='25/09/1970'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>

            <Col lg={ 4 }>
                <FormGroup>
                    <Label>Date (Auto-Corrected)</Label>
                    <Input
                        mask={ [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] }
                        keepCharPositions={ true }
                        pipe={ autoCorrectedDatePipe }
                        placeholder='Please Enter a Date'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>
            <Col lg={ 4 }>
                <FormGroup>
                    <Label>US dollar amount</Label>
                    <Input
                        mask={ dolarsMask }
                        className='text-right form-control'
                        placeholder='Enter an amount'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>
            <Col lg={ 4 }>
                <FormGroup>
                    <Label>US dollar amount (allows decimal)</Label>
                    <Input
                        mask={ dolarsMaskDecimal }
                        className='text-right form-control'
                        placeholder='Enter an amount'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>

            <Col lg={ 4 }>
                <FormGroup>
                    <Label>Percentage Amount</Label>
                    <Input
                        mask={ percentageMask }
                        className='text-right form-control'
                        placeholder='Enter an amount'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>
            <Col lg={ 4 }>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        mask={ emailMask }
                        placeholder='john@smith.com'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>
            <Col lg={ 4 }>
                <FormGroup>
                    <Label>US Zip Code</Label>
                    <Input
                        mask={ [/[1-9]/, /\d/, /\d/, /\d/, /\d/] }
                        placeholder='94303'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>

            <Col lg={ 4 }>
                <FormGroup>
                    <Label>Canadian Postal Code</Label>
                    <Input
                        pipe={ upperCasePipe }
                        mask={ [/[A-Z]/i, /\d/, /[A-Z]/i, ' ', /\d/, /[A-Z]/i, /\d/] }
                        placeholder='K1A 0B2'
                        tag={ MaskedInput }
                    />
                </FormGroup>
            </Col>
        </Row>
    </Container>
);
