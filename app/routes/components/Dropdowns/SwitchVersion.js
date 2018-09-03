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
            <DropdownItem href="http://react.bs4.webkom.co" active>
                React 1.0.0
                <br />
                <span className="small">
                    Sun, Jun 12, 2018 4:43:12 PM
                </span>
            </DropdownItem>
            <DropdownItem href="http://angular.bs4.webkom.co">
                Angular 1.0.0
                <br />
                <span className="small">
                    Sun, Jun 12, 2018 4:43:12 PM
                </span>
            </DropdownItem>
            <DropdownItem href="http://bs4.webkom.co">
                Jquery 1.0.0
                <br />
                <span className="small">
                    Sun, Jun 12, 2018 4:43:12 PM
                </span>
            </DropdownItem>
        </DropdownMenu>
    </React.Fragment>
)

export { SwitchVersion };
