import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { customFilter } from 'react-bootstrap-table2-filter';
import uid from 'uuid/v4';

import { CustomInput } from './../../../components';

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
        this.inputId = uid();
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
                id={this.inputId}
            >
                <option value="">{ placeholder }</option>

                {
                    _.map(options, ({ value, label }, index) => (
                        <option value={value} key={ index }>{ label }</option>
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