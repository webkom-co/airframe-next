import React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { colourOptions } from '../data';

export class Creatable extends React.Component {
    handleChange(newValue, actionMeta) {
        /*eslint-disable */
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        /*eslint-enable */
    }
    render() {
        return (
            <CreatableSelect
                isMulti
                onChange={this.handleChange}
                options={colourOptions}
            />
        );
    }
}