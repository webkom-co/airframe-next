import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    DropdownMenu,
    DropdownItem
} from './../../../components';

const SwitchVersion = () => (
    <React.Fragment>
        <DropdownMenu>
            <DropdownItem header>
                Choose Version
            </DropdownItem>
            <DropdownItem href="http://v2.spin.webkom.co" className="d-flex">
                <i className="fa fa-fw fa-circle-o align-self-center mr-2" />
                <span>
                    Jquery 1.0.0
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
            </DropdownItem>
            <DropdownItem href="http://react.spin.webkom.co" active className="d-flex">
                <i className="fa fa-fw fa-check align-self-center mr-2" />
                <span>
                    React 1.0.0
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
            </DropdownItem>
            <DropdownItem href="http://angular.spin.webkom.co" className="d-flex">
                <i className="fa fa-fw fa-circle-o align-self-center mr-2" />
                <span>
                    Angular 1.0.0
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
            </DropdownItem>
        </DropdownMenu>
    </React.Fragment>
)

export { SwitchVersion };
