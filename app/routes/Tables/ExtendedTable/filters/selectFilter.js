import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { customFilter } from 'react-bootstrap-table2-filter';

import { CustomInput } from './../../../../components';

class SelectFilter extends React.Component {
    static propTypes = {
        column: PropTypes.object.isRequired,
        onFilter: PropTypes.func.isRequired,
        options: PropTypes.array.isRequired,
        placeholder: PropTypes.string,
        getFilter: PropTypes.func
    }

    constructor() {
        super();

        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        if (_.isFunction(this.props.getFilter)) {
            this.props.getFilter((value) => {
                this.setState({ value });
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.onFilter(this.state.value);
        }
    }

    render() {
        const { placeholder, options } = this.props;
        return (
            <CustomInput
                type="select"
                bsSize="sm"
                onChange={(e) => { this.setState({ value: e.target.value }) }}
                value={ this.state.value }
                className="d-block"
            >
                <option value="">{ placeholder }</option>

                {
                    _.map(options, ({ value, label }) => (
                        <option value={value}>{ label }</option>
                    ))
                }
            </CustomInput>
        )
    }
}

export const buildCustomSelectFilter = ({ placeholder, options, getFilter, ...other } = {}) => ({
    filter: customFilter(other),
    filterRenderer: function TextFilterWrap(onFilter, column) {
        return (
            <SelectFilter
                {...{
                    onFilter,
                    column,
                    placeholder,
                    options,
                    getFilter
                }}
            />
        )
    }
});