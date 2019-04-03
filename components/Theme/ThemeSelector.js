import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    Button,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { Consumer } from './ThemeContext';

class ThemeSelector extends React.Component {
    static propTypes = {
        style: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        styleOptions: PropTypes.array,
        colorOptions: PropTypes.array,
        onChangeTheme: PropTypes.func,
    };
    static defaultProps = {
        styleOptions: [
            { name: 'Light', value: 'light' },
            { name: 'Dark', value: 'dark' },
            { name: 'Color', value: 'color' }
        ],
        colorOptions: [
            { name: 'Primary', value: 'primary' },
            { name: 'Success', value: 'success' },
            { name: 'Info', value: 'info' },
            { name: 'Danger', value: 'danger' },
            { name: 'Warning', value: 'warning' }
        ]
    };

    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            initialStyle: '',
            initialColor: '',
        };
    }

    componentDidMount() {
        this.setState({
            initialColor: this.props.color,
            initialStyle: this.props.style
        });
    }

    render() {
        const rootClass = classNames('theme-config', {
            'theme-config--active': this.state.isActive,
        });
        return (
            <div className={ rootClass }>
                <Button
                    color="primary"
                    className="theme-config__trigger"
                    onClick={() => { this.setState({isActive: !this.state.isActive}) }}
                >
                    <i className="fa fa-gear fa-fw"></i>
                </Button>
                <Card className="theme-config__body">
                    <CardBody>
                        <FormGroup>
                            <span className="h6 text-uppercase">
                                Sidebar Style
                            </span>
                            {
                                _.map(this.props.styleOptions, (option, index) => (
                                    <FormGroup check key={ index }>
                                        <Label check>
                                            <Input
                                                type="radio"
                                                name="sidebarStyle"
                                                value={ option.value }
                                                checked={ this.props.style === option.value }
                                                onChange={(ev) => {
                                                    if (ev.target.checked) {
                                                        this.props.onChangeTheme({
                                                            style: option.value
                                                        });
                                                    }
                                                }}
                                            />{' '}
                                            { option.name }
                                        </Label>
                                    </FormGroup>
                                ))
                            }
                        </FormGroup>

                        <FormGroup>
                            <span className="h6 text-uppercase">
                                Sidebar Color
                            </span>
                            {
                                _.map(this.props.colorOptions, (option, index) => (
                                    <FormGroup check key={ index }>
                                        <Label check className="w-100">
                                            <Input
                                                type="radio"
                                                name="sidebarColor"
                                                value={ option.value }
                                                checked={ this.props.color === option.value }
                                                onChange={(ev) => {
                                                    if (ev.target.checked) {
                                                        this.props.onChangeTheme({
                                                            color: option.value
                                                        });
                                                    }
                                                }}
                                            />{' '}
                                            <span className="d-flex align-items-center">
                                                { option.name }
                                                <i className={`fa fa-circle ml-auto text-${option.value}`} />
                                            </span>
                                        </Label>
                                    </FormGroup>
                                ))
                            }
                        </FormGroup>
                        <FormGroup className="mb-0">
                            <Button
                                color="secondary"
                                outline
                                className="d-block w-100"
                                onClick={() => {
                                    this.props.onChangeTheme({
                                        color: this.state.initialColor,
                                        style: this.state.initialStyle
                                    });
                                }}
                            >
                                Reset Options
                            </Button>
                        </FormGroup>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const ContextThemeSelector = () =>
    <Consumer>
        {
            (themeState) => <ThemeSelector { ...themeState } />
        }
    </Consumer>

export { ContextThemeSelector as ThemeSelector };
