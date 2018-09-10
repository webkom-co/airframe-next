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
            <DropdownItem href="http://bs4.webkom.co" className="d-flex">
                <span>
                    Jquery 1.0.0
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
                <i className="fa fa-fw ml-auto align-self-center pl-2" />
            </DropdownItem>
            <DropdownItem href="http://react.bs4.webkom.co" active className="d-flex">
                <span>
                    React 1.0.0
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
                <i className="fa fa-fw fa-check ml-auto align-self-center pl-4" />
            </DropdownItem>
            <DropdownItem href="http://angular.bs4.webkom.co" className="d-flex">
                <span>
                    Angular 1.0.0
                    <br />
                    <span className="small">
                        Sun, Jun 12, 2018 4:43:12 PM
                    </span>
                </span>
                <i className="fa fa-fw ml-auto align-self-center pl-2" />
            </DropdownItem>
        </DropdownMenu>
    </React.Fragment>
)

export { SwitchVersion };
