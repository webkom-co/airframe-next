import React from 'react';
import Select from 'react-select';
import { FormGroup, Label, Input } from './../../components';
import { colourOptions } from '../data';

export class Single extends React.Component {
    constructor() {
        super();

        this.state = {
            isClearable: true,
            isDisabled: false,
            isLoading: false,
            isSearchable: true,
        };
    }

    toggleState(stateKey) {
        this.setState({
            [`${stateKey}`]: !this.state[stateKey]
        });
    }

    render() {
        return (
            <React.Fragment>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={colourOptions[0]}
                    { ...this.state }
                    name="color"
                    options={colourOptions}
                />
                <div className="mt-2 px-1">
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
                                checked={ this.state.isLoading}
                                onChange={ () => this.toggleState('isLoading') }
                            />
                            Loading
                        </Label>
                    </FormGroup>
                </div>
            </React.Fragment>
        );
    }
}