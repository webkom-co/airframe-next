import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import {
    Container,
    Input
} from './../../../components';
import { Example, ButtonInput } from './components';

export class DatePickerExamples extends React.Component {
    state = {
        startDate: moment(),
        endDate: moment().add(5, 'days')
    }

    render() {
        return (
            <Container>
                <Example
                    title="Default"
                    exampleInput={(
                        <DatePicker
                            customInput={ <ButtonInput /> }
                            selected={this.state.startDate}
                            onChange={this._handleChange}
                        />
                    )}
                >
                {   
                    '<DatePicker\n' +
                    '    selected={this.state.startDate}\n' +
                    '    onChange={this._handleChange}\n' +
                    '/>'
                }
                </Example>

                <Example
                    title="Inline"
                    exampleInput={(
                        <DatePicker
                            inline
                            selected={this.state.startDate}
                            onChange={this._handleChange}
                        />
                    )}
                >
                {   
                    '<DatePicker\n' +
                    '   inline\n' +
                    '   selected={this.state.startDate}\n' +
                    '   onChange={this._handleChange}\n' +
                    '/>'
                }
                </Example>

                <Example
                    title="Range"
                    exampleInput={(
                        <React.Fragment>
                            <DatePicker
                                customInput={ <Input /> }
                                selected={this.state.startDate}
                                selectsStart
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeStart}
                            />

                            <DatePicker
                                customInput={ <Input /> }
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd}
                            />
                        </React.Fragment>
                    )}
                >
                {   
                    '<DatePicker\n' +
                    '    selected={this.state.startDate}\n' +
                    '    selectsStart\n' +
                    '    startDate={this.state.startDate}\n' +
                    '    endDate={this.state.endDate}\n' +
                    '    onChange={this.handleChangeStart}\n' +
                    '/>\n' +
                    '\n' +
                    '<DatePicker\n' +
                    '    selected={this.state.endDate}\n' +
                    '    selectsEnd\n' +
                    '    startDate={this.state.startDate}\n' +
                    '    endDate={this.state.endDate}\n' +
                    '    onChange={this.handleChangeEnd}\n' +
                    '/>\n'
                }
                </Example>
            </Container>
        )
    }

    _handleChange = (date) => (
        this.setState({ date })
    )
}
