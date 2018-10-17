import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import {
    CustomInput,
    FormGroup
} from './../../../../components';
import options from './exampleData';

export class BodyContainer extends React.Component {
    state = {
        bodyContainer: true,
        dropup: false
    };
  
    render() {
        const {bodyContainer, dropup} = this.state;

        return (
            <React.Fragment>
                <div
                    style={{
                        border: '1px solid #ddd',
                        height: '116px',
                        overflowY: 'scroll',
                        padding: '40px',
                    }}
                >
                    <div style={{height: '300px'}}>
                        <Typeahead
                            {...this.state}
                            labelKey="name"
                            options={options}
                            placeholder="Choose a state..."
                        />
                    </div>
                </div>
                <FormGroup className="mt-2">
                    <CustomInput
                        checked={bodyContainer}
                        name="bodyContainer"
                        onChange={this._handleChange}
                        type="checkbox"
                        id="enable-attach-menu"
                    >
                        Attach menu to document body
                    </CustomInput>
                    <CustomInput
                        checked={dropup}
                        name="dropup"
                        onChange={this._handleChange}
                        type="checkbox"
                        id="enable-dropup-menu"
                    >
                        Dropup menu
                    </CustomInput>
                </FormGroup>
            </React.Fragment>
        );
    }
  
    _handleChange = (e) => {
        const {checked, name} = e.target;
        this.setState({[name]: checked});
    }
}
