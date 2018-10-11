import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';

const components = {
    DropdownIndicator: null,
};

const createOption = (label) => ({
    label,
    value: label,
});

export class MultiSelectTextInput extends React.Component {
    constructor() {
        super();
        
        this.state = {
            inputValue: '',
            value: [],
        };
    }
    handleChange(value, actionMeta) {
        /*eslint-disable */
        console.group('Value Changed');
        console.log(value);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        /*eslint-enable */
        this.setState({ value });
    }
    handleInputChange(inputValue) {
        this.setState({ inputValue });
    }
    handleKeyDown(event) {
        const { inputValue, value } = this.state;
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                /*eslint-disable */
                console.group('Value Added');
                console.log(value);
                console.groupEnd();
                /*eslint-enable */
                this.setState({
                    inputValue: '',
                    value: [...value, createOption(inputValue)],
                });
                event.preventDefault();
        }
    }
    render() {
        const { inputValue, value } = this.state;
        return (
            <CreatableSelect
                components={components}
                inputValue={inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={this.handleChange.bind(this)}
                onInputChange={this.handleInputChange.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
                placeholder="Type something and press enter..."
                value={value}
            />
        );
    }
}
