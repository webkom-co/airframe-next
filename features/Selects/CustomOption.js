import React from 'react';
import Select from 'react-select';
import {
    Avatar,
    FormGroup,
    Label,
    Input
} from './../../components';

import { people } from './data';

const UserOption = ({innerProps, data}) => {
    const { avatarUrl, label } = data;
    
    return (
        <a className="d-flex align-items-center px-2 py-1" {...innerProps} href="javascript:;">
            <Avatar.Image size="sm" src={ avatarUrl } className="mr-3"/>
            <span>{ label }</span>
        </a>
    );
};

const UserSingleValue = ({innerProps, data}) => {
    const { avatarUrl, label } = data;

    return (
        <div className="d-flex align-items-center px-2 py-1" {...innerProps}>
            <Avatar.Image size="sm" src={ avatarUrl } className="mr-3"/>
            <span>{ label }</span>
        </div>
    );
};

export class CustomOption extends React.Component {
    constructor() {
        super();

        this.state = {
            isMulti: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <Select
                    defaultValue={ people[0] }
                    options={ people }
                    isMulti={ this.state.isMulti }
                    components={{
                        Option: UserOption,
                        SingleValue: UserSingleValue
                    }}
                />
                <div className="mt-2">
                    <FormGroup check inline>
                        <Label check>
                            <Input
                                type="checkbox"
                                checked={ this.state.isMulti}
                                onChange={ () => { this.setState({ isMulti: !this.state.isMulti }) } }
                            />
                            Multiple selections
                        </Label>
                    </FormGroup>
                </div>
            </React.Fragment>
        )
    }
}
