import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Label, Input } from './../../../../components';

const STATES_AU = [
    { value: 'australian-capital-territory', label: 'Australian Capital Territory' },
    { value: 'new-south-wales', label: 'New South Wales' },
    { value: 'western-australia', label: 'Western Australia'},
    { value: 'south-australia', label: 'South Australia' },
    { value: 'tasmania', label: 'Tasmania' },
    { value: 'northern-territory', label: 'Northern Territory' }
];

const STATES_US = [
    { value: 'AZ', label: 'Arizona' },
    { value: 'CA', label: 'California' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MT', label: 'Montana' },
    { value: 'NY', label: 'New York' },
    { value: 'WA', label: 'Washington' },
];

export class States extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: STATES_AU,
            value: null,
            isSearchable: false,
            isDisabled: false,
            isClearable: false
        }
        this.selectRef = React.createRef();
    }

    setFocus() {
        this.selectRef.current.select.focus();
    }

    toggleState(stateKey) {
        this.setState({
            [`${stateKey}`]: !this.state[stateKey]
        });
    }

    render() {
        return (
            <div>
                <Select
                    { ...this.state }
                    onChange={ val => this.setState({ value: val }) }
                    ref={this.selectRef}
                />
                <div className='mt-1 d-flex align-items-center'>
                    <Button
                        onClick={ () => this.setFocus() } type='primary'
                        className="mr-3"
                    >
                        Focus
                    </Button>
                    <FormGroup check inline>
                        <Label check>
                            <Input
                                type="checkbox"
                                checked={ this.state.isSearchable}
                                onChange={ () => this.toggleState('isSearchable') }
                            />
                            Searchable
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input
                                type="checkbox"
                                checked={ this.state.isDisabled}
                                onChange={ () => this.toggleState('isDisabled') }
                            />
                            Disabled
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input
                                type="checkbox"
                                checked={ this.state.isClearable}
                                onChange={ () => this.toggleState('isClearable') }
                            />
                            Clearable
                        </Label>
                    </FormGroup>
                </div>
                <div className='mt-1'>
                    <FormGroup check inline>
                        <Label check>
                            <Input
                                type="radio"
                                checked={ this.state.options === STATES_AU }
                                onChange={ () => { this.setState({ options: STATES_AU, value: null }) } }
                            />
                            Australia
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input
                                type="radio"
                                checked={ this.state.options === STATES_US }
                                onChange={ () => { this.setState({ options: STATES_US, value: null }) } }
                            />
                            United States
                        </Label>
                    </FormGroup>
                </div>
            </div>
        )
    }
}
